"use client";
import { cardVariants } from "@/lib/framer-animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ApartCard({ title, description, image, video }) {
    return (
        <motion.div
            variants={cardVariants}
            className="max-w-xs w-full">
            <div
                className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-2xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                    // Preload hover image by setting it in a pseudo-element
                    "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                )}>
                <div className="text relative z-50">
                    <h1 className="font-bold text-xl pr-3 md:text-3xl text-gray-50 relative">
                        {title}
                    </h1>
                    <p className="font-normal text-base text-slate-300 relative my-4">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
