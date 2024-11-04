import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="relative min-h-96 w-full">
        <div className="h-full w-full absolute top-0 left-0 mix-blend-normal bg-blue-900/60 z-50" />
        <Image src={"/IMG_0178.JPG"} alt="" fill className="object-cover object-top"/>
        <div className="flex flex-col gap-4 absolute left-1/2 top-1/2 text-black -translate-y-1/2 -translate-x-1/2 z-50 items-center">
          <h1 className="text-3xl font-semibold text-white">Achieve Your Goals with Our Expert Guidance</h1>
          <Button className="bg-yellow-500">Get started</Button>
        </div>
      </div>
      <div className="w-full flex items-center flex-col gap-4 justify-center bg-darkblue min-h-32">
        <div className="flex gap-2 flex-row">
          <FaInstagram className="size-6 text-yellow-500"/>
          <FaLinkedin className="size-6 text-yellow-500" />
          <FaFacebook className="size-6 text-yellow-500" />
        </div>
        <p className="text-yellow-500">Copyright Codeempowement © 2024</p>
      </div>
      
    </footer>
  );
};

export default Footer;
