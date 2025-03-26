import dbConnect from "@/lib/dbConnect";
import ContactModel from "@/model/contact.model";
import { sendContactFormNotification } from "@/utils/email-config";

export async function POST(request) {
    try {
        await dbConnect();
    } catch (error) {
        console.error("Database connection failed!", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Failed to connect to the database"
        }), { status: 500 });
    }

    const body = await request.json();
    const { firstName, lastName, email, mobileNumber, date, message } = body;

    if (!firstName || !lastName || !email || !mobileNumber || !date || !message) {
        return new Response(JSON.stringify({
            success: false,
            message: "Please fill all the fields"
        }), { status: 400 });
    }

    try {
        const contact = new ContactModel({ firstName, lastName, email, mobileNumber, date, message });

        await contact.save().catch((err) => {
            console.error("Mongoose Save Error:", err);
            throw new Error("Database save failed");
        });

        try {
            const emailResponse = await sendContactFormNotification(
                "Deepak Kumar Soni",
                "abhisoni1764@gmail.com",
                firstName,
                email,
                mobileNumber,
                date,
                message
            );

            if (!emailResponse) {
                console.error("Email sending failed.");
                return new Response(JSON.stringify({
                    success: false,
                    message: "Failed to send email notification"
                }), { status: 500 });
            }
        } catch (emailError) {
            console.error("Email Service Error:", emailError);
            return new Response(JSON.stringify({
                success: false,
                message: "Unexpected email service failure"
            }), { status: 500 });
        }

        return new Response(JSON.stringify({
            success: true,
            message: "Contact Form Data stored successfully and email notification sent!"
        }), { status: 200 });

    } catch (error) {
        console.error("Error while processing request:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Something went wrong while saving the contact form data!"
        }), { status: 500 });
    }
}
