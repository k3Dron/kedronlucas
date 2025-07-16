"use client";

import React from "react";
import ContactForm from "@/components/contact-form";
 import ProfileCard from '@/components/profileCard';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white flex items-center justify-center min-h-screen">
            <div className="max-w-6xl w-full items-center flex flex-col gap-20">
                <div className="hero-heading text-4xl md:text-8xl bebas bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">🌀Summoning Juitsu?</div>
                <div className="flex flex-row items-center justify-between gap-10">
                    <ProfileCard
                        name="Kedron J. Lucas"
                        title="Software Engineer"
                        handle="this_is_ked"
                        status="Online"
                        contactText="Hello!"
                        avatarUrl="/images/mainpfp.png"
                        showUserInfo={true}
                        enableTilt={true}
                        onContactClick={() => console.log('Contact clicked')}
                    />
                    <ContactForm />
                </div>
                <p className="text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Kedron Lucas. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
