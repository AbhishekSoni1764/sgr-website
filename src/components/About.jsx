"use client";
import { motion, useInView } from "framer-motion";
import { fadeInDown, fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { useRef } from "react";

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            id="about"
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-auto min-h-screen w-full flex flex-col justify-center items-center p-10 tracking-wide text-center gap-10"
        >
            <motion.p
                variants={fadeInDown}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-barlow font-black max-w-5xl leading-max text-6xl text-primary-800 pt-32"
            >
                Your Trusted Partner for Industrial Salt Solutions
            </motion.p>
            <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: 1 }}
                className="font-barlow text-slate-400 max-w-5xl px-4 text-[1.7rem] leading-9"
            >
                We provide top-quality industrial salts, including Rock Salt, Solar Salt, and custom-blended solutions, designed to meet the unique demands of industries like Water Treatment, Agriculture, Oil & Gas, Chemical Production, and beyond. With a focus on innovation, sustainability, and customer satisfaction, we deliver reliability in every shipment.
            </motion.p>
        </motion.div>
    );
};

export default AboutSection;
