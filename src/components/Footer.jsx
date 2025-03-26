'use client';

import Image from "next/image";
import sgrLogo from "../../public/assets/logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInDown } from "@/lib/framer-animations";

const Footer = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInDown}
            className="bg-slate-100 w-full p-10 relative">
            <div className="mx-auto flex flex-wrap justify-between items-center relative">
                <Image src={sgrLogo} alt="Shyam Global Logo" width={100} height={80} className="object-contain" />
                <ul className="absolute left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center items-center gap-6 text-gray-800 text-base font-semibold tracking-wide">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Why Us</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Strengths</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
                <p className="text-sm text-gray-600 uppercase">&copy; {new Date().getFullYear()} Shyam Global Resources</p>
            </div>
        </motion.div>
    );
};

export default Footer;
