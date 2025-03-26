'use client';
import { strengths } from "@/data/data";
import { fadeInDown, fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const OurStrengths = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (
        <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-full min-h-screen w-full flex flex-col justify-center items-center gap-24"
        >
            <motion.p
                className="font-barlow font-black max-w-5xl leading-max text-6xl text-primary-800"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInDown}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Our Strengths
            </motion.p>
            <motion.div className="flex justify-center items-center gap-10 max-w-6xl mx-auto">
                {strengths && strengths.map((strength, index) => (
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        key={index}
                        className="flex flex-col items-center justify-between text-center h-full w-72 gap-4 font-barlow"
                    >
                        <Image
                            src={strength?.image}
                            alt={index}
                            height={100}
                            width={100}
                            className="object-contain h-[150px] w-[150px]"
                        />
                        <motion.h4 className="text-2xl text-blue-950 tracking-wide font-bold h-[50px] flex items-center">
                            {strength?.title}
                        </motion.h4>
                        <motion.p className="text-base text-slate-500 h-[100px] flex items-start">
                            {strength?.description}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>


        </motion.div>
    );
};

export default OurStrengths;