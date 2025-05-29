import { NextRequest, NextResponse } from 'next/server';


// This endpoint receives purchase notifications from Gumroad
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const data = new URLSearchParams(body);
    
    // Extract purchase information from Gumroad
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
      ip_country: data.get('ip_country'),
      order_number: data.get('order_number')
    };

    console.log('🐝 Gumroad purchase received:', purchaseInfo);

    // Generate license key for this purchase
    const licenseKey = await generateLicenseKey(purchaseInfo.sale_id!, purchaseInfo.product_id!);
    
    // Send custom confirmation email with license key and installation instructions
    await sendCustomConfirmationEmail(purchaseInfo, licenseKey);
    
    // Store purchase in your database (optional)
    await storePurchase(purchaseInfo, licenseKey);
    
    console.log('🎉 Purchase processed successfully:', {
      sale_id: purchaseInfo.sale_id,
      license_key: licenseKey,
      email: purchaseInfo.buyer_email
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Purchase processed successfully',
      license_key: licenseKey 
    });
    
  } catch (error) {
    console.error('❌ Gumroad webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function generateLicenseKey(saleId: string, productId: string): Promise<string> {
  // Create a unique license key based on sale info
  const timestamp = Date.now().toString();
  const input = `${saleId}-${productId}-${timestamp}`;
  
  // Use Web Crypto API for Edge Runtime compatibility
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  // Format as: HIVE-XXXX-XXXX-XXXX
  const key = hash.substring(0, 16).toUpperCase();
  return `HIVE-${key.substring(0, 4)}-${key.substring(4, 8)}-${key.substring(8, 12)}-${key.substring(12, 16)}`;
}

async function sendCustomConfirmationEmail(purchaseInfo: any, licenseKey: string) {
  // TODO: Implement email sending
  // For now, just log what we would send
  
  const emailContent = {
    to: purchaseInfo.buyer_email,
    subject: `🐝 Welcome to hive-tools! Your License Key Inside`,
    html: `
      <h2>Thank you for purchasing ${purchaseInfo.product_name}!</h2>
      
      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937;">Your License Key:</h3>
        <code style="font-size: 18px; font-weight: bold; color: #2563eb;">${licenseKey}</code>
        <p style="color: #6b7280; font-size: 14px;">Save this key - you'll need it for installation!</p>
      </div>
      
      <h3>Next Steps:</h3>
      <ol>
        <li><strong>Install hive-tools:</strong> <code>npm install -g @hivetechs/hive-ai</code></li>
        <li><strong>Configure License:</strong> <code>hive-ai configure</code></li>
        <li><strong>Setup IDE:</strong> <code>hive-ai configure-ide</code></li>
      </ol>
      
      <p><a href="https://hivetechs.com/install" style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Installation Guide</a></p>
      
      <hr style="margin: 30px 0;">
      <p style="color: #6b7280; font-size: 12px;">
        Order ID: ${purchaseInfo.sale_id}<br>
        Need help? Email support@hivetechs.com
      </p>
    `
  };
  
  console.log('📧 Email to send:', emailContent);
  
  // TODO: Integrate with your email service (SendGrid, Mailgun, etc.)
  // await sendEmail(emailContent);
}

async function storePurchase(purchaseInfo: any, licenseKey: string) {
  // TODO: Store in your database
  console.log('💾 Store purchase:', { purchaseInfo, licenseKey });
}