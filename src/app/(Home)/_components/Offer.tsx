import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";

const Offer = () => {
  return (
    <div className="flex min-h-[512px] w-full flex-col items-center justify-center gap-8 p-32">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-semibold">What We Offer</h1>
        <hr className="h-[2px] w-56 bg-yellow-500" />
        <p>Diverse support to fuel your fashion journey</p>
      </div>
      <div className="flex w-full flex-row gap-4">
        {[1, 2, 3].map((item, i) => (
          <div
            className="text-darkblue flex min-h-96 w-full flex-col gap-4 p-2"
            key={i}
          >
            <div className="relative h-72">
              <Image
                src={"/IMG_0048.JPG"}
                alt=""
                className="object-cover"
                fill
              />
            </div>
            <h1 className="text-3xl font-semibold">Skill Development</h1>
            <p>
              Gain hands-on, expert-led technical and business skills training
              and mentorship.
            </p>
            <Button className="bg-darkblue hover:text-darkblue text-yellow-500 hover:bg-yellow-500">
              Learn more
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
