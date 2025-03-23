"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { ImagesSlider } from "./custom/image-slider";
import EmailIcon from "@mui/icons-material/Email";
import EastIcon from "@mui/icons-material/East";
import { slideLeft, slideRight, staggerContainer, zoomIn } from "@/lib/framer-animations";

const HeroSection = () => {
    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleImageClick = (index) => {
        setSelectedIndex(!selectedIndex);
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-screen w-full flex flex-col justify-center items-center">
            <ImagesSlider className="h-screen text-secondary-800 flex flex-col justify-center items-center font-barlow" images={images}>
                <motion.div
                    className="z-50 flex flex-col justify-center items-center"
                >
                    <motion.p
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 1, delay: 0.1 }}
                        variants={zoomIn}
                        className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 max-w-7xl leading-6"
                    >
                        Delivering industrial salts with unmatched quality and reliability.
                    </motion.p>
                    <motion.div className="flex gap-7 justify-center items-center font-barlow text-base tracking-wide md:text-lg text-center">
                        <motion.button
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={slideLeft}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="px-8 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-300/20 text-white mx-auto text-center rounded-full relative mt-4 flex gap-2 items-center justify-center"
                        >
                            <span>Products</span>
                            <EastIcon />
                            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </motion.button>
                        <motion.button
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={slideRight}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="px-8 py-2 backdrop-blur-sm border bg-slate-100/10 border-slate-100/20 text-white mx-auto text-center rounded-full relative mt-4 flex gap-2 items-center justify-center"
                        >
                            <EmailIcon />
                            <span>Email</span>
                            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-slate-200 to-transparent" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </ImagesSlider>
            <motion.div className="absolute -bottom-[17vw] flex gap-5 justify-center items-center w-full">
                {images.map((image, index) => {
                    const isEven = (index - (selectedIndex ?? 0)) % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 0 }}
                            animate={{ opacity: 1, scale: 1, y: isEven ? "-10vw" : "-7vw" }}
                            transition={{ duration: 0.2, delay: 0.1 * index }}
                            className="relative w-[30vw] h-72 bg-slate-600 cursor-pointer"
                            onClick={() => handleImageClick(index)}
                        >
                            <div className={`absolute inset-0 bg-black bg-opacity-20 h-full w-full`} />
                            <img src={image} alt="image" className="w-full h-full object-cover object-center" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
