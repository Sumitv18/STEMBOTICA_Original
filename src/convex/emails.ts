"use node";

import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = internalAction({
  args: {
    name: v.string(),
    schoolName: v.string(),
    email: v.string(),
    phone: v.string(),
    service: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "STEMBotica <onboarding@resend.dev>",
        to: ["stembotica@gmail.com"],
        subject: `🎯 New Inquiry: ${args.service}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa; margin: 0; padding: 0; }
              .container { max-width: 650px; margin: 30px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #0077ff 0%, #00b894 100%); padding: 30px; text-align: center; }
              .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; }
              .header p { color: #e0f7ff; margin: 8px 0 0 0; font-size: 16px; }
              .content { padding: 35px; }
              .info-box { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2f1 100%); border-left: 4px solid #0077ff; padding: 20px; margin: 20px 0; border-radius: 8px; }
              .info-row { margin: 12px 0; display: flex; align-items: flex-start; }
              .info-label { font-weight: 700; color: #0077ff; min-width: 140px; font-size: 14px; }
              .info-value { color: #2c3e50; font-size: 14px; line-height: 1.6; }
              .message-box { background: #fff9e6; border: 2px solid #ffcc00; padding: 20px; margin: 20px 0; border-radius: 8px; }
              .message-box h3 { color: #ff6b00; margin: 0 0 12px 0; font-size: 16px; }
              .message-box p { color: #5a5a5a; margin: 0; line-height: 1.7; white-space: pre-wrap; }
              .footer { background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef; }
              .footer p { color: #6c757d; margin: 5px 0; font-size: 13px; }
              .badge { display: inline-block; background: #00b894; color: white; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚀 STEMBotica</h1>
                <p>New Contact Form Submission</p>
                <span class="badge">${args.service}</span>
              </div>
              
              <div class="content">
                <div class="info-box">
                  <div class="info-row">
                    <span class="info-label">👤 Name:</span>
                    <span class="info-value">${args.name}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">🏫 School Name:</span>
                    <span class="info-value">${args.schoolName}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">📧 Email:</span>
                    <span class="info-value"><a href="mailto:${args.email}" style="color: #0077ff; text-decoration: none;">${args.email}</a></span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">📱 Phone:</span>
                    <span class="info-value"><a href="tel:${args.phone}" style="color: #0077ff; text-decoration: none;">${args.phone}</a></span>
                  </div>
                </div>

                <div class="message-box">
                  <h3>📝 Message Details</h3>
                  <p>${args.message.replace(/\n/g, '<br>')}</p>
                </div>
              </div>

              <div class="footer">
                <p><strong>STEMBotica</strong> - From Roots to Rockets 🚀</p>
                <p>stembotica@gmail.com | 9520559669</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });

      if (error) {
        console.error("Error sending email:", error);
        throw new Error(`Failed to send email: ${error.message}`);
      }

      return { success: true, data };
    } catch (error) {
      console.error("Error in sendContactEmail:", error);
      throw error;
    }
  },
});