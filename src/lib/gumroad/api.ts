/**
 * Gumroad API Integration
 * 
 * This module provides functions for interacting with the Gumroad API
 * to verify licenses, check subscription status, and handle webhooks.
 * 
 * Documentation: https://app.gumroad.com/api
 */

// Types for Gumroad API responses
export interface GumroadLicense {
  success: boolean;
  uses: number;
  purchase: {
    seller_id: string;
    product_id: string;
    product_name: string;
    permalink: string;
    product_permalink: string;
    email: string;
    price: number;
    currency: string;
    quantity: number;
    order_number: string;
    sale_id: string;
    sale_timestamp: string;
    purchaser_id: string;
    subscription_id: string | null;
    variants: string | null;
    license_key: string;
    is_gift_receiver_purchase: boolean;
    refunded: boolean;
    disputed: boolean;
    dispute_won: boolean;
    id: string;
    created_at: string;
    custom_fields: any[];
    chargebacked: boolean;
  };
}

export interface GumroadSubscription {
  success: boolean;
  subscription: {
    id: string;
    status: "active" | "cancelled" | "failed" | "expired";
    product_name: string;
    product_id: string;
    created_at: string;
    user_id: string;
    user_email: string;
    charge_occurrence_count: number;
    recurrence: string;
    cancelled_at: string | null;
    ended_at: string | null;
    failed_at: string | null;
  };
}

/**
 * Verify a license key with Gumroad
 * 
 * @param licenseKey - The license key to verify
 * @param productId - Optional product ID to check against
 * @returns License information if valid, null if invalid
 */
export async function verifyLicense(
  licenseKey: string,
  productId?: string
): Promise<GumroadLicense | null> {
  try {
    const params = new URLSearchParams({
      product_permalink: productId || "",
      license_key: licenseKey,
      increment_uses_count: "true",
    });

    const response = await fetch(
      `https://api.gumroad.com/v2/licenses/verify?${params.toString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GUMROAD_API_KEY}`,
        },
      }
    );

    const data = await response.json();

    if (!data.success) {
      return null;
    }

    return data as GumroadLicense;
  } catch (error) {
    console.error("Error verifying Gumroad license:", error);
    return null;
  }
}

/**
 * Check subscription status with Gumroad
 * 
 * @param subscriptionId - The Gumroad subscription ID
 * @returns Subscription information if valid, null if invalid
 */
export async function checkSubscription(
  subscriptionId: string
): Promise<GumroadSubscription | null> {
  try {
    const response = await fetch(
      `https://api.gumroad.com/v2/subscriptions/${subscriptionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GUMROAD_API_KEY}`,
        },
      }
    );

    const data = await response.json();

    if (!data.success) {
      return null;
    }

    return data as GumroadSubscription;
  } catch (error) {
    console.error("Error checking Gumroad subscription:", error);
    return null;
  }
}

/**
 * Generate a purchase URL for a Gumroad product
 * 
 * @param productPermalink - The product permalink (e.g., "hivetechs-mcp")
 * @param email - Optional pre-filled email
 * @param name - Optional pre-filled name
 * @param price - Optional custom price (for pay-what-you-want products)
 * @returns URL to the Gumroad checkout page
 */
export function generatePurchaseUrl(
  productPermalink: string,
  email?: string,
  name?: string,
  price?: number
): string {
  const baseUrl = `https://gumroad.com/l/${productPermalink}`;
  const params = new URLSearchParams();

  if (email) params.append("email", email);
  if (name) params.append("name", name);
  if (price) params.append("price", price.toString());

  // Add referral code if needed
  params.append("referrer", "hivetechs");

  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * Validate a webhook signature from Gumroad
 * 
 * @param signature - The signature from the request headers
 * @param body - The raw request body
 * @returns Whether the signature is valid
 */
export function validateWebhookSignature(
  signature: string,
  body: string
): boolean {
  // In a real implementation, this would verify the HMAC signature
  // For now, we'll return true for development purposes
  return true;
}

/**
 * Parse a webhook event from Gumroad
 * 
 * @param body - The webhook request body
 * @returns Parsed webhook event data
 */
export function parseWebhookEvent(body: any): any {
  // Process the webhook event based on the event type
  const eventType = body.event || "";

  switch (eventType) {
    case "sale":
      // Handle new sale
      return {
        type: "sale",
        email: body.email,
        productId: body.product_id,
        productName: body.product_name,
        licenseKey: body.license_key,
        subscriptionId: body.subscription_id,
        price: body.price,
        saleId: body.sale_id,
      };

    case "refund":
      // Handle refund
      return {
        type: "refund",
        email: body.email,
        productId: body.product_id,
        saleId: body.sale_id,
      };

    case "subscription_updated":
      // Handle subscription update
      return {
        type: "subscription_updated",
        subscriptionId: body.subscription_id,
        status: body.status,
        email: body.email,
      };

    case "subscription_cancelled":
      // Handle subscription cancellation
      return {
        type: "subscription_cancelled",
        subscriptionId: body.subscription_id,
        email: body.email,
      };

    default:
      // Unknown event type
      return { type: "unknown", raw: body };
  }
}
