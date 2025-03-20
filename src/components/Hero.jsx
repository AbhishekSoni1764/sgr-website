"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./custom/image-slider";
import EmailIcon from '@mui/icons-material/Email';
import EastIcon from '@mui/icons-material/East';

const HeroSection = () => {

    const images = [
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <ImagesSlider className="h-screen bg-primary-800 text-secondary-800 flex flex-col justify-center items-center font-barlow" images={images}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                >
                    <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 max-w-7xl leading-6">
                        Delivering industrial salts with unmatched quality and reliability.
                    </motion.p>
                    <motion.div
                        className="flex gap-7 justify-center items-center font-barlow text-base tracking-wide md:text-lg text-center"
                    >
                        <button className="px-8 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-300/20 text-white mx-auto text-center rounded-full relative mt-4 flex gap-2 items-center justify-center">
                            <span>Products </span><EastIcon />
                            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                        </button>
                        <button className="px-8 py-2 backdrop-blur-sm border bg-slate-100/10 border-slate-100/20 text-white mx-auto text-center rounded-full relative mt-4 flex gap-2 items-center justify-center">
                            <EmailIcon /><span>Email</span>
                            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-slate-200 to-transparent" />
                        </button>
                    </motion.div>
                </motion.div>
            </ImagesSlider>
        </div>
    )
}

export default HeroSection;