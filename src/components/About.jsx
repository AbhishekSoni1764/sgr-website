"use client";
import { motion, useInView } from "framer-motion";
import { staggerContainer, zoomIn } from "@/lib/framer-animations";
import { useRef } from "react";

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-auto min-h-screen w-full flex flex-col justify-center items-center p-10 tracking-wide text-center"
        >
            <motion.p
                variants={zoomIn}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-barlow font-black max-w-5xl leading-max text-6xl text-primary-800"
            >
                Your Trusted Partner for Industrial Salt Solutions
            </motion.p>
            <motion.p
                variants={zoomIn}
                transition={{ duration: 0.4, delay: 1 }}
                className="font-barlow text-slate-400 max-w-3xl text-2xl mt-10 leading-16"
            >
                We provide top-quality industrial salts, including Rock Salt, Solar Salt, and custom-blended solutions, designed to meet the unique demands of industries like Water Treatment, Agriculture, Oil & Gas, Chemical Production, and beyond. With a focus on innovation, sustainability, and customer satisfaction, we deliver reliability in every shipment.
            </motion.p>
        </motion.div>
    );
};

export default AboutSection;
