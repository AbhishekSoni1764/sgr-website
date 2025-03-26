"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactFormSchema } from "@/schema/contact-zod";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import { slideRight } from "@/lib/framer-animations";

const API_BASE_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://shyamglobalresources.vercel.app";

const ContactForm = ({ isInView }) => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            date: "",
            message: "",
        },
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/api/post-contact`, data);
            toast({
                title: "Success",
                description: response.data.message,
            });

            form.reset();
        } catch (error) {
            const errorMessage = error.response?.data.message || "Something went wrong!";
            toast({
                title: "Submission Failed",
                description: errorMessage,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideRight}
            className="flex flex-col w-full max-w-2xl ml-20 font-barlow">
            <h2 className="text-5xl font-bold mb-8 uppercase text-start">Contact Us</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex space-x-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormControl>
                                        <Input
                                            className="p-4 text-lg"
                                            placeholder="First Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormControl>
                                        <Input
                                            className="p-4 text-lg"
                                            placeholder="Last Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="email"
                                        className="p-4 text-lg"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex space-x-4">
                        <FormField
                            control={form.control}
                            name="mobileNumber"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            className="p-4 text-lg"
                                            placeholder="Mobile Number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormControl>
                                        <Input
                                            type="date"
                                            className="p-4 text-lg"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <textarea
                                        className="w-full h-32 p-4 text-base border rounded-lg"
                                        placeholder="Your Doubts/Queries"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={loading}
                        className="rounded-full px-8 py-6 bg-green-700 text-white text-xl font-semibold flex items-center justify-center"
                    >
                        {loading ? "Sending..." : "Send"}
                        <SendIcon fontSize="large" />
                    </Button>
                </form>
            </Form>
        </motion.div>
    );
};

export default ContactForm;
