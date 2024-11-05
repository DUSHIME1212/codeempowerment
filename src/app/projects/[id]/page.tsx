
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { projects } from "~/lib/exportableutils";

const Page = ({ params }: { params: { id: string } }) => {
  const page = params.id;

  
  const res = projects.find((item) => item.title === page);

  if(res){
    console.log("kkmk")
  }
  else{
    console.log("not thing found");
    
  }
  console.log(res);

  return (
    <div className="min-h-screen bg-darkblue w-full">
      <div className="relative min-h-96 w-full">
        <div className="absolute w-full h-96 left-1/2 top-0 z-20 -translate-x-1/2  bg-black bg-opacity-50" />
        <Image
          src="/53410604317_3d4e87bc6c.jpg"
          objectFit="cover"
          alt="Page Background"
          fill
        />
        <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-2 text-white">
          <h1 className="w-full text-center text-5xl text-yellow-500">
            {page}
          </h1>
          <p>Explore our innovative projects</p>
        </div>
      </div>
      <section className="px-8  py-12 text-white">
      <p className="text-white"></p>
      </section>
    </div>
  );
};

export default Page;
