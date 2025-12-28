// netlify/functions/send-emails.js

/**
 * Netlify Function for Cardoso Cleaning Services LLC
 * Handles Quote Form submissions with reCAPTCHA v3 verification.
 * * Dependencies: npm install nodemailer
 */

import nodemailer from 'nodemailer';

export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ message: 'Method Not Allowed' }) 
    };
  }

  try {
    const data = JSON.parse(event.body);

    // === 1. reCAPTCHA v3 VERIFICATION ===
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
    });
    
     const recaptchaResult = await recaptchaResponse.json();
    
    console.log('--- reCAPTCHA Debug ---');
    console.log('Success:', recaptchaResult.success);
    console.log('Score:', recaptchaResult.score); 
    console.log('Error Codes:', recaptchaResult['error-codes']);

    /**
     * LOCAL TESTING BYPASS
     * If you are running via 'netlify dev' (localhost), Google often fails v3 checks.
     * We check if we are in a local environment to allow the email to send during dev.
     */
    const isLocal = event.headers.host && event.headers.host.includes('localhost');
    const THRESHOLD = 0.3;

    // Reject only if:
    // 1. It's NOT local AND
    // 2. (Result failed OR score is below threshold)
    if (!isLocal) {
      if (!recaptchaResult.success || (recaptchaResult.score !== undefined && recaptchaResult.score < THRESHOLD)) {
        return {
          statusCode: 403,
          body: JSON.stringify({ 
            message: 'RECAPTCHA_FAILED',
            details: recaptchaResult['error-codes']
          }),
        };
      }
    } else {
      console.log('Local environment detected: Bypassing strict reCAPTCHA score check for testing.');
    }

       // === 2. CREDENTIAL SANITIZATION & LOGGING ===
    // We trim them to remove accidental spaces/newlines from .env files
    const emailUser = (process.env.EMAIL_USER || "").trim();
    const emailPass = (process.env.EMAIL_PASS || "").trim();
    const logoUrl = "https://cardosocleaningservicesllc.netlify.app/logos/Cardoso-Cleaning-Services-LLC-LOGO.png";


    // Debugging logs (Safe: won't show your password, only if they exist)
    console.log('--- Credential Check ---');
    console.log('EMAIL_USER defined:', !!emailUser, emailUser ? `(Length: ${emailUser.length})` : '(Empty)');
    console.log('EMAIL_PASS defined:', !!emailPass, emailPass ? `(Length: ${emailPass.length})` : '(Empty)');

    if (!emailUser || !emailPass) {
      throw new Error('EMAIL_USER or EMAIL_PASS is missing or empty in environment variables.');
    }

    // === 3. SETUP NODEMAILER ===
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Helper to format dynamic lists (Rooms/Pets) for the email
    const formatItemList = (items) => {
      const filtered = items.filter(item => item.count > 0);
      if (filtered.length === 0) return '<li>None specified</li>';
      return filtered.map(item => `<li>${item.name}: <strong>${item.count}</strong></li>`).join('');
    };

    const roomListHtml = formatItemList(data.rooms || []);
    const petListHtml = formatItemList(data.pets || []);

    // === 3. SEND NOTIFICATION TO ADMIN (You) ===
    await transporter.sendMail({
      from: `"Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `[New Quote Request] ${data.name} - ${data.service}`,
      html: `
        <h2 style="color: #2c3e50;">New Quote Request: Cardoso Cleaning</h2>
        <p><strong>Customer:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <hr />
        <h3>Service Location</h3>
        <p>
          ${data.address.street}<br>
          ${data.address.city}, ${data.address.state} ${data.address.zip}
        </p>
        <hr />
        <h3>Job Details</h3>
        <p><strong>Service Type:</strong> ${data.service}</p>
        <p><strong>Frequency:</strong> ${data.frequency}</p>
        <p><strong>Sq Ft:</strong> ${data.sqft || 'N/A'}</p>
        <p><strong>Rooms Requested:</strong></p>
        <ul>${roomListHtml}</ul>
        <p><strong>Pets in Home:</strong></p>
        <ul>${petListHtml}</ul>
        <hr />
        <p><strong>Message:</strong><br>${data.message || 'No additional message.'}</p>
        <p><strong>Approved Contact via Text/Call:</strong> ${data.contactApproval ? 'YES' : 'NO'}</p>
        <p><small>reCAPTCHA Score: ${recaptchaResult.score}</small></p>
      `,
    });

    // === 4. SEND PROFESSIONAL CONFIRMATION TO CLIENT ===
    await transporter.sendMail({
      from: `"Cardoso Cleaning Services" <${process.env.EMAIL_USER}>`,
      to: data.email,
      replyTo: process.env.EMAIL_USER,
      subject: 'We Received Your Quote Request - Cardoso Cleaning Services LLC',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #ffffff; padding: 20px; text-align: center; border-bottom: 1px solid #eee;">
            <img src="${logoUrl}" alt="Cardoso Cleaning Services LLC" style="max-width: 200px; height: auto;" onerror="this.style.display='none'">
            <h2 style="margin: 10px 0 0; color: #443091; font-size: 20px;">Cardoso Cleaning Services LLC</h2>
          </div>
          <div style="background-color: #3DB6BC; color: white; padding: 15px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">Request Received!</h1>
          </div>
          
          <div style="padding: 30px;">
            <p>Hi <strong>${data.name}</strong>,</p>
            <p>Thank you for choosing <strong>Cardoso Cleaning Services LLC</strong>! This is an automated confirmation that we have received your request for a free estimate.</p>
            
            <div style="background-color: #f1f8ff; border-left: 4px solid #3DB6BC; padding: 20px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #443091; font-size: 18px;">Summary of Request:</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 5px 0; color: #666;">Service:</td><td><strong>${data.service.replace('-', ' ')}</strong></td></tr>
                <tr><td style="padding: 5px 0; color: #666;">Frequency:</td><td><strong>${data.frequency}</strong></td></tr>
                <tr><td style="padding: 5px 0; color: #666;">Location:</td><td><strong>${data.address.city}, ${data.address.state}</strong></td></tr>
              </table>
            </div>

            <p><strong>What's Next?</strong></p>
            <p>A member of our team will review your details and contact you at <strong>${data.phone}</strong> shortly. Depending on the size of the project, we may provide a preliminary estimate or schedule a brief walk-through of your home.</p>
            
            <p>If you have any urgent questions or need to update your details, simply reply to this email or call us directly.</p>
            
            <p style="margin-top: 40px;">Best Regards,</p>
            <p style="margin: 0; font-weight: bold; color: #2c3e50;">The Cardoso Cleaning Team</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #999;">
            <p style="margin: 0;">Cardoso Cleaning Services LLC &bull; Professional. Reliable. Clean.</p>
            <p style="margin: 5px 0 0;">This is an automated message, please reply for further assistance.</p>
          </div>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };

  } catch (error) {
    console.error('Submission Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};