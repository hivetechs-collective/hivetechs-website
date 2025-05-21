import { NextRequest, NextResponse } from "next/server";
import { validateWebhookSignature, parseWebhookEvent } from "@/lib/gumroad/api";
import clientPromise from "@/lib/mongodb";

/**
 * Gumroad Webhook Handler
 * 
 * This endpoint receives webhook events from Gumroad when:
 * - A new purchase is made
 * - A subscription is updated
 * - A subscription is cancelled
 * - A refund is processed
 * 
 * It updates the user's subscription status and credits in our database.
 */
export async function POST(req: NextRequest) {
  try {
    // Verify the webhook signature
    const signature = req.headers.get("X-Gumroad-Signature") || "";
    const rawBody = await req.text();
    
    if (!validateWebhookSignature(signature, rawBody)) {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 401 }
      );
    }

    // Parse the webhook event
    const body = JSON.parse(rawBody);
    const event = parseWebhookEvent(body);

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection("users");
    const subscriptionsCollection = db.collection("subscriptions");
    const transactionsCollection = db.collection("transactions");

    // Process the event based on its type
    switch (event.type) {
      case "sale": {
        // Find or create user by email
        const user = await usersCollection.findOne({ email: event.email });
        
        if (!user) {
          // Create a new user if they don't exist
          await usersCollection.insertOne({
            email: event.email,
            createdAt: new Date(),
            credits: 0,
          });
        }

        // Add subscription record if this is a subscription
        if (event.subscriptionId) {
          await subscriptionsCollection.updateOne(
            { subscriptionId: event.subscriptionId },
            {
              $set: {
                userId: user?._id || null,
                email: event.email,
                productId: event.productId,
                productName: event.productName,
                status: "active",
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            },
            { upsert: true }
          );

          // Add credits based on subscription tier
          let creditsToAdd = 0;
          if (event.productName.includes("Basic")) {
            creditsToAdd = 1000;
          } else if (event.productName.includes("Pro")) {
            creditsToAdd = 5000;
          } else if (event.productName.includes("Enterprise")) {
            creditsToAdd = 20000;
          }

          if (creditsToAdd > 0) {
            await usersCollection.updateOne(
              { email: event.email },
              { $inc: { credits: creditsToAdd } }
            );

            // Record the transaction
            await transactionsCollection.insertOne({
              userId: user?._id || null,
              email: event.email,
              type: "subscription_credit_add",
              amount: creditsToAdd,
              productId: event.productId,
              saleId: event.saleId,
              createdAt: new Date(),
            });
          }
        } else {
          // One-time purchase (credit pack)
          let creditsToAdd = 0;
          if (event.productName.includes("100 Credits")) {
            creditsToAdd = 100;
          } else if (event.productName.includes("500 Credits")) {
            creditsToAdd = 500;
          } else if (event.productName.includes("1000 Credits")) {
            creditsToAdd = 1000;
          }

          if (creditsToAdd > 0) {
            await usersCollection.updateOne(
              { email: event.email },
              { $inc: { credits: creditsToAdd } }
            );

            // Record the transaction
            await transactionsCollection.insertOne({
              userId: user?._id || null,
              email: event.email,
              type: "credit_purchase",
              amount: creditsToAdd,
              productId: event.productId,
              saleId: event.saleId,
              createdAt: new Date(),
            });
          }
        }
        break;
      }

      case "subscription_updated": {
        // Update subscription status
        await subscriptionsCollection.updateOne(
          { subscriptionId: event.subscriptionId },
          {
            $set: {
              status: event.status,
              updatedAt: new Date(),
            },
          }
        );
        break;
      }

      case "subscription_cancelled": {
        // Mark subscription as cancelled
        await subscriptionsCollection.updateOne(
          { subscriptionId: event.subscriptionId },
          {
            $set: {
              status: "cancelled",
              cancelledAt: new Date(),
              updatedAt: new Date(),
            },
          }
        );
        break;
      }

      case "refund": {
        // Handle refund by recording the transaction
        // Note: We don't remove credits as they may have been used already
        await transactionsCollection.insertOne({
          email: event.email,
          type: "refund",
          productId: event.productId,
          saleId: event.saleId,
          createdAt: new Date(),
        });
        break;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing Gumroad webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Disable body parsing since we need the raw body for signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};
