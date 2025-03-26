"use client";

import Image from "next/image";
import ContactForm from "./Contact-Form";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {

    const items = [
        { icon: <FacebookIcon />, label: 'Facebook' },
        { icon: <XIcon />, label: 'Twitter' },
        { icon: <LinkedInIcon />, label: 'LinkedIn' },
        { icon: <InstagramIcon />, label: 'Instagram' },
    ];

    return (
        <div className="flex w-full p-10 justify-center items-center min-h-screen h-full">
            <div className="w-[40%] h-auto font-barlow flex flex-col justify-between items-start gap-10">
                <div className="flex flex-col gap-4 justify-center items-start">
                    <h2 className="text-3xl font-bold">Shyam Global Resources</h2>
                    <p className="text-md font-light text-slate-500">Delivering Excellence, Empowering Industries, Building Trust.</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <div className="flex gap-5 items-center">
                        <Image src={'/contact.svg'} width={60} height={60} alt="contact" />
                        <div className="flex flex-col items-start justify-center gap-1">
                            <span>Phone Number</span>
                            <a className="font-medium tracking-wide" href="tel:+919829266033">+91 9829266033</a>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Image src={'/email.svg'} width={60} height={60} alt="contact" />
                        <div className="flex flex-col items-start justify-center gap-1">
                            <span>Email</span>
                            <a className="font-medium tracking-wide" href="mailto:shyamglobalresources@gmail.com">shyamglobalresources@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="relative w-[80%] h-auto bg-[#EAF7ED] py-8 px-14 rounded-lg flex flex-col justify-center items-start gap-5">
                    <p className="text-xl font-medium w-full">Our Socials</p>
                    <div className="relative w-full flex gap-7 justify-center items-center">
                        {items.map((item, index) => (
                            <div key={index} className="flex gap-5 items-center relative group w-full">
                                <div className="p-5 bg-white text-secondary-800 hover:text-white hover:bg-secondary-800 rounded-full shadow-md cursor-pointer">
                                    {item.icon}
                                </div>
                                <span className="absolute font-medium top-16 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary-800 text-white text-sm px-4 py-2 rounded-lg shadow-md">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="w-[1px] h-[65vh] bg-slate-400" />
            <ContactForm />
        </div>
    );
};

export default ContactUs;
