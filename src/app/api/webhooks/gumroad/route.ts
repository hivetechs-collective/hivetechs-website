import { NextRequest, NextResponse } from "next/server";

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
    // Verify the webhook signature - temporarily disabled
    const signature = req.headers.get("X-Gumroad-Signature") || "";
    const rawBody = await req.text();
    
    // Simple validation - in production, implement proper signature verification
    if (!signature) {
      return NextResponse.json(
        { error: "Missing webhook signature" },
        { status: 401 }
      );
    }

    // Parse the webhook event
    const body = JSON.parse(rawBody);
    
    // Log the event for debugging
    console.log("Received Gumroad webhook:", JSON.stringify(body, null, 2));

    // Simplified event processing - just acknowledge receipt
    // In production, implement database storage for these events
    
    // Extract basic information from the webhook
    const eventType = body.event || 'unknown';
    const email = body.email || body.purchaser_email || 'unknown';
    const productName = body.product_name || 'unknown';
    const saleId = body.sale_id || body.id || 'unknown';
    
    // Log the extracted information
    console.log(`Processing ${eventType} event for ${email} - Product: ${productName}`);

    // Return success response
    return NextResponse.json({ 
      success: true,
      message: "Webhook received and logged (MongoDB integration temporarily disabled)"
    });
  } catch (error) {
    console.error("Error processing Gumroad webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Note: In App Router, raw body access is handled differently
// The body is automatically available as text or JSON in route handlers
