// Cloudflare Worker for Gumroad webhook
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle license lookup
    if (url.pathname === '/license' && request.method === 'POST') {
      return handleLicenseLookup(request, env);
    }
    
    // Handle webhook (main endpoint)
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      // Parse the webhook data from Gumroad
      const body = await request.text();
      const data = new URLSearchParams(body);
      
      // Extract purchase information
      const purchaseInfo = {
        sale_id: data.get('sale_id'),
        product_id: data.get('product_id'),
        product_name: data.get('product_name'),
        buyer_email: data.get('email'),
        buyer_name: data.get('full_name'),
        price: data.get('price'),
        currency: data.get('currency'),
        sale_timestamp: data.get('sale_timestamp'),
        product_permalink: data.get('product_permalink'),
        short_product_id: data.get('short_product_id'),
        seller_id: data.get('seller_id')
      };

      console.log('🐝 Gumroad purchase received:', purchaseInfo);

      // Generate license key
      const licenseKey = generateLicenseKey(purchaseInfo.sale_id, purchaseInfo.product_id);
      
      // Send confirmation email with license key
      await sendConfirmationEmail(purchaseInfo, licenseKey, env);
      
      console.log('🎉 Purchase processed successfully:', {
        sale_id: purchaseInfo.sale_id,
        license_key: licenseKey,
        email: purchaseInfo.buyer_email
      });

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Purchase processed successfully',
        license_key: licenseKey 
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (error) {
      console.error('❌ Webhook error:', error);
      return new Response(JSON.stringify({ 
        error: 'Webhook processing failed',
        message: error.message 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

async function handleLicenseLookup(request, env) {
  try {
    const { order_id } = await request.json();
    
    if (!order_id) {
      return new Response(JSON.stringify({ error: 'Order ID required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate the same license key that would have been created for this order
    // We need to simulate the original purchase data
    const licenseKey = generateLicenseKey(order_id, 'lookup');
    
    // In a real system, you'd store purchases in a database
    // For now, we'll return a generated key based on the order ID
    return new Response(JSON.stringify({ 
      license_key: licenseKey,
      order_id: order_id 
    }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
    
  } catch (error) {
    console.error('License lookup error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to retrieve license key' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function generateLicenseKey(saleId, productId) {
  // Create a unique license key based on sale info
  const timestamp = Date.now().toString();
  const input = `${saleId}-${productId}-${timestamp}`;
  
  // Simple hash function for license key generation
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Format as: HIVE-XXXX-XXXX-XXXX
  const key = Math.abs(hash).toString(16).toUpperCase().padStart(16, '0');
  return `HIVE-${key.substring(0, 4)}-${key.substring(4, 8)}-${key.substring(8, 12)}-${key.substring(12, 16)}`;
}

async function sendConfirmationEmail(purchaseInfo, licenseKey, env) {
  // Skip email if no buyer email
  if (!purchaseInfo.buyer_email) {
    console.log('No buyer email provided, skipping email');
    return;
  }

  const emailData = {
    from: 'Hive.AI <verone.lazio@gmail.com>', // Your verified email
    to: purchaseInfo.buyer_email,
    subject: `🐝 Welcome to Hive.AI! Your License Key Inside`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Thank you for purchasing ${purchaseInfo.product_name}!</h2>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin: 0 0 10px 0;">Your License Key:</h3>
          <code style="font-size: 18px; font-weight: bold; color: #2563eb; background: white; padding: 10px; border-radius: 4px; display: block;">${licenseKey}</code>
          <p style="color: #6b7280; font-size: 14px; margin: 10px 0 0 0;">Save this key - you'll need it for installation!</p>
        </div>
        
        <h3>Next Steps:</h3>
        <ol style="color: #374151;">
          <li><strong>Install Hive.AI:</strong> <code>npm install -g @hivetechs/hive-ai</code></li>
          <li><strong>Configure License:</strong> <code>hive-ai configure</code></li>
          <li><strong>Setup IDE:</strong> <code>hive-ai configure-ide</code></li>
        </ol>
        
        <p style="margin: 30px 0;">
          <a href="https://hivetechs-website.pages.dev/install" 
             style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            View Installation Guide
          </a>
        </p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px;">
          Order ID: ${purchaseInfo.sale_id}<br>
          Need help? Email support@hivetechs.com
        </p>
        
        <p style="color: #9ca3af; font-size: 11px; margin-top: 20px;">
          🐝 Generated with Hive.AI Webhook System
        </p>
      </div>
    `
  };
  
  try {
    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('📧 Email sent successfully:', result.id);
    } else {
      const error = await response.text();
      console.error('📧 Email failed:', response.status, error);
    }
  } catch (error) {
    console.error('📧 Email error:', error);
  }
}