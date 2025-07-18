"use client";

import React from "react";
import ContactForm from "@/components/contact-form";
import ProfileCard from "@/components/profileCard";
import ScrollFloatHeader from './ScrollFloatHeader';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white flex items-center justify-center min-h-screen px-4">
      <div className="max-w-6xl w-full flex flex-col items-center gap-5">
        <ScrollFloatHeader animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Summon?</ScrollFloatHeader>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
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
