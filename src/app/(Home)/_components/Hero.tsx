"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "~/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".hero", {
      y: -200,
      opacity: 0,
      duration: 0.8
    });
    gsap.to(".hero", {
        y: 0,
      opacity: 1,
      duration: 0.8,
      ease:"ease.in",
      scrollTrigger: {
        trigger: ".hero",
        start: "top 40%",
        end:"bottom 50%",
      }
    })
  }, []);

  return (
    <div className="relative flex h-[720px] w-full select-none flex-col items-center justify-center gap-4">
      <div className="absolute right-0 top-0 z-20 h-[720px] w-screen bg-black/60" />
      <Image src={"/53410604317_3d4e87bc6c.jpg"} alt="img" className="object-cover" fill />
      <div className="z-20 hero flex w-[720px] flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-center text-5xl font-bold">
          Empowering through
          <br /> Code Education
        </h1>
        <p className="text-center text-xl opacity-60">
          We believe in the power of coding to transform lives. Join us in our
          mission to bring coding education to underserved communities and
          empower the next generation of tech innovators.
        </p>
        <Button className="bg-yellow-500" variant={"default"} size={"lg"}>
          Get Involved
        </Button>
      </div>
    </div>
  );
};

export default Hero;
