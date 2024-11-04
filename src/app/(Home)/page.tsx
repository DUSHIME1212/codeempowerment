import React from "react";
import Hero from "./_components/Hero";
import Gallery from "./_components/Gallery";
import About from "./_components/About";
import Offer from "./_components/Offer";
import Campains from "./_components/Campains";
import Partners from "./_components/Partners";

const page = () => {
  return (
    <div>
      <Hero />
      <About />

      <Offer />
      <Partners />
      <Campains />
    </div>
  );
};

export default page;
