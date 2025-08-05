"use client";

import React from "react";
import ContactForm from "@/components/contact-form";
import ProfileCard from "@/components/profileCard";
import ScrambledText from './ScrambledText';
import ScrollVelocity from "./ScrollVelocityComponent";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white flex items-center justify-center min-h-screen px-4">
      <div className="max-w-6xl w-full flex flex-col items-center gap-5">
           <div className="h-5"/>
        <ScrollVelocity
        texts={[
          "we travel in the train of time, but we can always look back and see where we came from.",
        ]}
        velocity={20}
        className="custom-scroll-text"
      />
     
      <ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.2}
  scrambleChars=".:"
>
  Summon?
</ScrambledText>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <ContactForm />
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
        </div>

        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Kedron Lucas. All rights reserved.
        </p>
        <div className="h-2"/>
      </div>
    </footer>
  );
};
export default Footer;
