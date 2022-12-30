import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
      </Head>
      <div className=" text-text bg-mainbg h-[100vh] w-[100vw]">
        {/* Navbar */}
        <Navbar />
        <div className="relative text-xl bg-mainbg h-full">
            <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;