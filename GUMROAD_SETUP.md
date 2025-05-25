# Gumroad Setup Instructions

## ✅ Custom Delivery Redirect (CONFIRMED WORKING)

Gumroad supports custom delivery redirect URLs that automatically append purchase information. This is exactly what we need!

### 1. **Setup Custom Delivery Redirect**

For each product in Gumroad:
1. Log into your Gumroad account
2. Go to **Products** → Select your product
3. Go to **Content** tab
4. Toggle **OFF** the "Beta content editor" (switch on top-right)
5. Select **"Redirect to a URL after purchase"**
6. Enter: `https://hivetechs.com/thank-you`

This will redirect customers to your thank-you page instead of Gumroad's download page.

### 2. **Remove Wishlist Requirement**
The "Customers who bought this item also bought" section showing HiveTechs Wishlist appears because:
- You created the wishlist to prevent broken links
- This can be disabled in Gumroad settings

**Steps to fix:**
1. In product settings, look for "Related Products" or "Upsells" 
2. Remove or disable the wishlist recommendation
3. Or delete the HiveTechs Wishlist product entirely if not needed

### 3. **License Key Generation**

For each product in Gumroad:
1. Go to **Products** → Select your product
2. Go to **Settings** tab
3. Scroll to **"License keys"** section
4. Toggle **ON** "Generate a license key for each sale"
5. Choose format (recommend: Mixed case letters and numbers)
6. Set length (recommend: 20+ characters)

**Important:** License keys will be included in confirmation emails AND passed to your redirect URL as a `license_key` parameter.

## Product Mapping
Current URL structure assumes these Gumroad product slugs:
- `basic-plan` - Basic subscription
- `standard-plan` - Standard subscription  
- `premium-plan` - Premium subscription
- `team-plan` - Team subscription

Make sure your Gumroad product URLs match these patterns:
- `https://store.hivetechs.io/l/basic-plan`
- `https://store.hivetechs.io/l/standard-plan`
- etc.

## ✅ What Happens After Setup

1. **Customer clicks "Start Free Trial"** → Opens Gumroad checkout
2. **Customer completes purchase** → Gumroad processes payment  
3. **Gumroad redirects to:** `https://hivetechs.com/thank-you?sale_id=xyz&product_id=abc&license_key=123...`
4. **Your thank-you page shows:**
   - Purchase confirmation
   - Product details  
   - License key (prominently displayed)
   - Next steps for installation
5. **Customer follows installation guide** with their license key

## Parameters Gumroad Sends
- `sale_id` - Unique purchase ID
- `product_id` - Product identifier
- `product_permalink` - Product URL
- `license_key` - Generated license key (if enabled)
- `email` - Customer email (if available)
- `purchaser_id` - Customer ID

## Test Process
1. Configure redirect URLs in Gumroad (steps above)
2. Enable license key generation  
3. Test with small purchase
4. Verify redirect to thank-you page works with all parameters
5. Test installation flow with received license key

## Webhook Alternative
If manual setup is complex, consider setting up a webhook:
1. Create endpoint at `/api/gumroad-webhook`
2. Configure in Gumroad to POST purchase data
3. Generate license keys programmatically
4. Send custom emails with installation instructions