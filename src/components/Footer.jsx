'use client';

import Image from "next/image";
import sgrLogo from "../../public/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-slate-100 w-full p-10 relative">
            <div className="mx-auto flex flex-wrap justify-between items-center relative">
                {/* Logo - Left */}
                <Image src={sgrLogo} alt="Shyam Global Logo" width={100} height={80} className="object-contain" />

                {/* Navigation - Centered */}
                <ul className="absolute left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center items-center gap-6 text-gray-800 text-base font-semibold tracking-wide">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Why Us</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Strengths</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>

                {/* Copyright - Right */}
                <p className="text-sm text-gray-600 uppercase">&copy; {new Date().getFullYear()} Shyam Global Resources</p>
            </div>
        </footer>
    );
};

export default Footer;
