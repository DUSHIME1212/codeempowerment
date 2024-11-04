import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative min-h-96 w-full">
        <div className="absolute w-full h-96 left-1/2 top-0 z-20 -translate-x-1/2  bg-black bg-opacity-50" />
        <Image
          src="/53410604317_3d4e87bc6c.jpg"
          objectFit="cover"
          alt="Page Background"
          fill
        />
      </div>
      h1
    </div>
  );
};

export default Page;
