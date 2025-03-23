"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { ImagesSlider } from "./custom/image-slider";
import EmailIcon from "@mui/icons-material/Email";
import EastIcon from "@mui/icons-material/East";
import { slideLeft, slideRight, staggerContainer, zoomIn } from "@/lib/framer-animations";
import { heroImages } from "@/data/imagesData";

const HeroSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    return (
        <motion.div className="h-screen w-full flex flex-col justify-center items-center">
            <ImagesSlider
                className="h-screen text-secondary-800 flex flex-col justify-center items-center font-barlow"
                images={heroImages}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            >
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
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

            <motion.div className="absolute -bottom-[17vw] flex gap-8 justify-center items-center w-full">
                {heroImages.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, y: 0 }}
                        animate={{ opacity: 1, scale: 1, y: index % 2 !== 0 ? "-10vw" : "-7vw" }}
                        whileHover={{ y: index % 2 !== 0 ? "-11vw" : "-8vw", transition: { duration: 0.3, ease: "easeInOut" } }}
                        transition={{ duration: 0.2, delay: 0.1 * index }}
                        className="relative w-[30vw] h-72 bg-slate-600 cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-20 h-full w-full" />
                        <img src={image} alt="image" className="w-full h-full object-cover object-center" />
                    </motion.div>
                ))}
            </motion.div>


        </motion.div>
    );
};

export default HeroSection;
