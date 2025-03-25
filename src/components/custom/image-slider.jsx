"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
    images,
    children,
    selectedImage,
    setSelectedImage,
    overlay = true,
    overlayClassName,
    className,
    autoplay = true,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState([]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const loadImages = () => {
            const loadPromises = images.map((image) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image;
                    img.onload = () => resolve(image);
                    img.onerror = reject;
                });
            });

            Promise.all(loadPromises)
                .then(setLoadedImages)
                .catch((error) => console.error("Failed to load images", error));
        };

        loadImages();
    }, [images]);

    useEffect(() => {
        let interval;
        if (autoplay) {
            interval = setInterval(handleNext, 5000);
        }

        if (selectedImage) {
            clearInterval(interval);
            setTimeout(() => setSelectedImage(null), 5000);
        }

        return () => clearInterval(interval);
    }, [autoplay, selectedImage]);

    const slideVariants = {
        initial: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: "0%", transition: { duration: 1, ease: "easeInOut" } },
        exit: { opacity: 1, x: "-100%", transition: { duration: 1, ease: "easeInOut" } },
    };

    return (
        <div
            className={cn("overflow-hidden h-full w-full relative flex items-center justify-center", className)}
            style={{ perspective: "1000px" }}
        >
            {overlay && children}
            {overlay && <div className={cn("absolute inset-0 bg-black/70 z-40", overlayClassName)} />}
            <AnimatePresence>
                <motion.img
                    key={selectedImage || loadedImages[currentIndex]}
                    src={selectedImage || loadedImages[currentIndex]}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                    className="image h-full w-full absolute inset-0 object-cover object-center"
                />
            </AnimatePresence>
        </div>
    );
};
