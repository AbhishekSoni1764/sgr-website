'use client';
import { products } from "@/data/data";
import { fadeInDown, staggerContainer } from "@/lib/framer-animations";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FocusCards } from "@/components/custom/focus-card";

const fadeScaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, delay: i * 0.1 },
    }),
};

const OurProducts = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [isActive, setIsActive] = useState([]);

    const handleActiveTitles = (title) => {
        if (isActive.includes(title)) {
            setIsActive(isActive.filter((item) => item !== title));
        } else {
            setIsActive([...isActive, title]);
        }
    };

    const CustomButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '20px',
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        borderRadius: '14px',
        color: 'black',
        backgroundColor: 'transparent',
        borderColor: '#00000',
        fontFamily: ["barlow"].join(','),
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0C5588',
            borderColor: '#0C5588',
            color: 'white'
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });

    const filteredProducts = isActive.length > 0
        ? products.filter(product => isActive.includes(product.title))
        : products;

    return (
        <motion.div
            id="products"
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-full min-h-screen p-10 w-full flex flex-col justify-center items-center"
        >
            <motion.p
                className="font-barlow font-black max-w-5xl leading-max text-6xl text-primary-800"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInDown}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Our Products
            </motion.p>
            <motion.div className="flex flex-wrap justify-center items-center gap-5 mt-16 max-w-6xl">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        variants={fadeScaleUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={index}
                    >
                        <CustomButton
                            onClick={() => handleActiveTitles(product.title)}
                            style={{
                                backgroundColor: isActive.includes(product.title) ? "#0C5588" : "transparent",
                                color: isActive.includes(product.title) ? "white" : "black"
                            }}
                        >
                            {product?.title}
                        </CustomButton>
                    </motion.div>
                ))}
            </motion.div>
            {filteredProducts.length > 0 && <FocusCards cards={filteredProducts} />}
        </motion.div>
    );
};

export default OurProducts;
