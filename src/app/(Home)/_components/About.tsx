import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";

const About = () => {
  return (
    <div className="flex min-h-[512px] w-full flex-row items-center gap-32 bg-darkblue p-32">
      <div className="relative h-96 w-1/2">
        <Image src={"/IMG_0048.JPG"} alt="" className="object-cover" fill />
      </div>
      <div className="flex h-full w-1/2 flex-col text-white">
        <div>
          <h1 className="text-5xl font-semibold">About us</h1>
          <hr className="mt-2 bg-yellow-500 h-[4px] w-56" />
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-2xl text-yellow-500">
            Bridging the Digital Divide
          </h2>
          <p className="text-lg">
            Code Empowerment is dedicated to providing coding education and
            resources to underserved communities. Our goal is to empower
            individuals with the skills they need to thrive in the digital age.
          </p>
          <Button className="bg-yellow-500" size={"lg"}>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
