"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./custom/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import sgrLogo from "../../public/assets/logo.png";
import Link from "next/link";
import { Button } from "@mui/material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useLenis } from "lenis/react"

export default function Navbar({
    className
}) {
    const lenis = useLenis();

    const scrollToSection = (id) => {
        if (lenis) {
            lenis.scrollTo(`#${id}`, {
                offset: 0,
                duration: 1.5,
                easing: (t) => t * (2 - t),
            });
        }
    };


    return (
        <div
            className={cn("top-0 inset-x-0 w-full bg-transparent absolute z-50 flex justify-between items-center px-10 py-4", className)}>
            <Link href={"/"}>
                <Image src={sgrLogo} alt="ShyamGlobalLogo" className="object-contain w-[7vw]" />
            </Link>
            <ul className="flex justify-center items-center gap-11 font-barlow text-slate-100 font-normal">
                <li className="hover:text-primary-200 cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
                <li className="hover:text-primary-200 cursor-pointer" onClick={() => scrollToSection("about")}>About Us</li>
                <li className="hover:text-primary-200 cursor-pointer" onClick={() => scrollToSection("why")}>Why Us</li>
                <li className="hover:text-primary-200 cursor-pointer" onClick={() => scrollToSection("products")}>Products</li>
                <li className="hover:text-primary-200 cursor-pointer" onClick={() => scrollToSection("strengths")}>Strengths</li>
                <li className="hover:text-primary-200 cursor-pointer" onClick={() => scrollToSection("contact")}>Contact Us</li>
                <Button variant="contained" color="success" href="tel:+91 9829266033" className="flex gap-2 items-center rounded-full"><PhoneInTalkIcon fontSize="small" />9829266033</Button>
            </ul>
        </div>
    );
}
