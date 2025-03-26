import { z } from "zod";

export const contactFormSchema = z.object({
    firstName: z.string().min(1, "First name is required").trim(),
    lastName: z.string().min(1, "Last name is required").trim(),
    email: z.string().email("Invalid email address").trim(),
    mobileNumber: z
        .string()
        .regex(/^\d{10}$/, "Mobile number must be 10 digits")
        .trim(),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
    message: z.string().min(1, "Message is required").trim(),
});
