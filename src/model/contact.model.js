import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
        },
        mobileNumber: {
            type: String,
            required: true,
            trim: true,
            match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"],
        },
        date: {
            type: Date,
            required: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

const ContactModel = mongoose.models.ContactForm || mongoose.model("ContactForm", contactFormSchema);

export default ContactModel;
