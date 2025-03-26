'use client';
import { fadeInDown, staggerContainer } from "@/lib/framer-animations";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ApartCard } from "./custom/apart-card";
import { apartData } from "@/data/data";

const ApartSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-auto min-h-screen w-full flex flex-col justify-center bg-slate-200 items-center p-10 tracking-wide gap-16">
            <motion.p
                className="font-barlow font-black max-w-5xl leading-max text-6xl text-primary-800"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInDown}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                What Sets Us Apart
            </motion.p>
            <motion.div className="flex max-w-7xl gap-10">
                {apartData.map((apart, index) => (
                    <ApartCard
                        key={index}
                        title={apart?.title}
                        description={apart?.description}
                        image={apart?.image}
                        video={apart?.video}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ApartSection;