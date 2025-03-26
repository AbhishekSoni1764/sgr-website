"use client";;
import Image from "next/image";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

export const FocusCard = React.memo(({
    card,
    index,
    hovered,
    setHovered
}) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "rounded-2xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-28 w-28 md:h-60 md:w-60 transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "opacity-90 scale-[0.98]"
        )}>
        <Image
            src={card.image_url}
            alt={card.title}
            fill
            className="object-cover absolute inset-0" />
        <div
            className={cn(
                "absolute inset-0 bg-black/70 flex items-end py-6 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}>
            <div
                className="text-xl md:text-2xl font-black tracking-wide font-barlow bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
            </div>
        </div>
    </div>
));

FocusCard.displayName = "Card";

const fadeScaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

export function FocusCards({
    cards
}) {
    const [hovered, setHovered] = useState(null);
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1 });


    return (
        <motion.div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl justify-center items-center md:px-8 w-full mt-16">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    variants={fadeScaleUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={index}>
                    <FocusCard
                        key={card.title}
                        card={card}
                        index={index}
                        hovered={hovered}
                        setHovered={setHovered} />
                </motion.div>
            ))}
        </motion.div>
    );
}
