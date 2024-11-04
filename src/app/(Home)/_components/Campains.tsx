import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import { projects } from "~/lib/exportableutils";

const Campains = () => {
  return (
    <div className="flex w-full flex-col gap-8 py-8 px-32">
      <div className="grid place-items-center gap-2">
        <h1 className="text-3xl font-semibold">WE HELP AROUND THE WORLD</h1>
        <hr className="h-[2px] w-72 bg-yellow-500" />
        <p>Introduse Our Campains</p>
      </div>
      <div className="flex w-full flex-row gap-4">
        {projects.slice(0,3).map((item, i) => (
          <div key={i} className="min-h-96 p-2 flex flex-col gap-2 text-darkblue w-full">
            <div className="relative min-h-56 w-full">
              <Image
                src={"/IMG_0048.JPG"}
                alt=""
                className="object-cover"
                fill
              />
            </div>
            <h1 className="text-3xl font-semibold">Project Code {i+1}</h1>
            <h3 className="text-xl font-medium">{item.title.slice(11)} </h3>
            <p className="text-lg opacity-60 line-clamp-5">
              {
                item.description
              }
            </p>
            <Button className="bg-yellow-500 hover:text-white hover:bg-darkblue" asChild>
              <Link href={item.link}>Learn more</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campains;
