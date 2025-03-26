import { resend } from "@/lib/emailService";
import ContactFormEmail from "../../emails/email-template";

export async function sendContactFormNotification(
  ownerName,
  ownerEmail,
  senderName,
  senderEmail,
  mobileNumber,
  date,
  message
) {
  try {
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ownerEmail,
      subject: "New Contact Form Submission",
      react: ContactFormEmail({
        ownerName,
        senderName,
        senderEmail,
        mobileNumber,
        date,
        message,
      }),
    });

    return {
      success: true,
      message: "Contact form notification email successfully sent!",
      emailResponse,
    };
  } catch (error) {
    console.error(
      "Something went wrong while sending the contact form notification!",
      error
    );
    return {
      success: false,
      message: "Failed to send contact form notification!",
    };
  }
}
