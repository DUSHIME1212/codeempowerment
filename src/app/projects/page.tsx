import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Project 1: Code Empowerment Initiative",
    description:
      "This project aims to provide coding education and resources to underserved communities, empowering individuals with the skills they need to thrive in the digital age. Our goal is to bridge the digital divide and create a more inclusive and equitable tech industry.",
    image: "/project1.jpg",
    link: "/projects/project1",
  },
  {
    id: 2,
    title: "Project 2: Environmental Sustainability Platform",
    description:
      "This project focuses on developing a web-based platform that promotes environmental sustainability by providing resources, tools, and community engagement opportunities for individuals and organizations. Our mission is to inspire collective action and drive positive change for a healthier planet.",
    image: "/project2.jpg",
    link: "/projects/project2",
  },
  {
    id: 3,
    title: "Project 3: Accessible Technology for All",
    description:
      "This project seeks to design and develop assistive technologies that improve the lives of people with disabilities. Our team is committed to creating innovative solutions that promote inclusivity, accessibility, and social equity, ensuring that everyone has equal access to technology and its benefits.",
    image: "/project3.jpg",
    link: "/projects/project3",
  },
  {
    id: 4,
    title: "Project 4: Disaster Response and Recovery System",
    description:
      "This project involves the development of a comprehensive system that enables effective disaster response and recovery efforts. Our platform will provide critical resources, information, and support to affected communities, helping to minimize the impact of disasters and promote resilience.",
    image: "/project4.jpg",
    link: "/projects/project4",
  },
  {
    id: 5,
    title: "Project 5: Education for Social Impact",
    description:
      "This project focuses on creating educational programs and resources that promote social impact and civic engagement. Our goal is to inspire a new generation of leaders and change-makers who are equipped to address the complex challenges facing our world today.",
    image: "/project5.jpg",
    link: "/projects/project5",
  },
];

const Page = () => {
  return (
    <div className="mih-h-screen w-full">
      <div className="relative min-h-96 w-full">
        <div className="absolute left-1/2 top-0 z-20 h-96 w-full -translate-x-1/2 bg-black bg-opacity-50" />
        <Image
          src="/53410604317_3d4e87bc6c.jpg"
          objectFit="cover"
          alt="Page Background"
          fill
        />
        <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-2 text-white">
          <h1 className="w-full text-center text-5xl text-yellow-500">
            Projects
          </h1>
          <p>Explore our innovative projects</p>
        </div>
      </div>
      <div className="mt-8 grid h-full w-full grid-cols-3 grid-rows-2 gap-4 px-32">
        {projects.map((item, index) => (
          <div
            key={index}
            className="min-h-72 w-full rounded-lg bg-white p-4 shadow-md"
          >
            <div className="relative rounded-xl h-56 w-full">
              <Image
                src="/53410604317_3d4e87bc6c.jpg"
                alt="alt"
                fill
                objectFit="cover"
              />
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <h1 className="line-clamp-1 text-2xl">{item.title.slice(11)}</h1>
              <p className="line-clamp-4">{item.description}</p>
            </div>
            <Button className="w-full my-4" asChild>
              <Link href={item.link}> Learn more</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
