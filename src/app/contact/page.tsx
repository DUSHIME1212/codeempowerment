"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { GoogleTagManager } from "@next/third-parties/google";
import React, { useState } from "react";
import type { CarouselProps, RadioChangeEvent } from "antd";
import { Carousel, Radio } from "antd";
import MapComponent from "~/providers/MapComponent";
import Image from "next/image";

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const content = [
    {
      img: "/53410604317_3d4e87bc6c.jpg",
      title:"Greeen  House",
      descriptions: "lorem ",
    },
  ];

  return (
    <div className="grid min-h-screen place-items-center bg-darkblue text-white">
      <div className="relative min-h-96 w-full">
        <div className="absolute left-1/2 top-0 z-20 h-96 w-full -translate-x-1/2 bg-black bg-opacity-50" />

        <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-2 text-white">
          <h1 className="w-full text-center text-5xl text-yellow-500">
            Contact us
          </h1>
          <p>Share us your thoughts and feedback</p>
        </div>
        <Image
          src={"/53410604317_3d4e87bc6c.jpg"}
          className="object-cover"
          alt=""
          fill
        />
      </div>
      <div className="flex size-full min-h-screen flex-row bg-white">
        <div className="w-1/2">
          <Carousel autoplay className="size-full">
            <div className="relative size-full min-h-screen bg-darkblue">
              <Image
                src={content[0]?.img}
                alt=""
                fill
                className="object-cover"
              />
              <h1>{content[0]?.title}</h1>
              <p>{content[0]?.descriptions}</p>
            </div>
          </Carousel>
        </div>
        <div className="flex w-1/2 items-center justify-center bg-darkblue p-8 px-8">
          <div className="flex w-full flex-col gap-4">
            <h1 className="text-7xl">
              Got ideas? We&apos;ve got the skills. Let&apos;s team up.
            </h1>
            <p>Tell us more about yourself and what you&apos;re got in mind</p>
            <form action="" className="flex flex-col gap-4">
              <Input
                type="text"
                className="rounded-none border-b-2 border-white bg-transparent outline-none placeholder:text-white/70"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                placeholder="tell us your thoughts"
                cols={8}
                className="focus-visible:ring-none rounded-none border-b-2 border-white bg-transparent placeholder:text-white/70"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Textarea>
              <Button className="w-full bg-yellow-500 text-darkblue ring-yellow-500 transition duration-300 ease-in-out hover:bg-yellow-600 hover:ring-2">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <MapComponent></MapComponent>
    </div>
  );
};

export default page;
