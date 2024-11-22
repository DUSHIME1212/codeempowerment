"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { projects_query } from "~/sanity/lib/queries";
import ReactMarkdown from 'react-markdown';

interface Project {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage: {
    asset: {
      _ref: string;
      url: string;
    };
    alt: string;
  };
  author: {
    _id: string;
    name: string;
  };
  categories: Array<{
    _id: string;
    title: string;
  }>;
  body: Array<{
    _type: string;
    style: string;
    children: Array<{
      _type: string;
      text: string;
    }>;
  }>;
}

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Project[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://o61h0ysy.api.sanity.io/v2024-11-05/data/query/production?query=*%5B_type+%3D%3D+%22post%22%5D+%7C+order%28publishedAt+desc%29+%7B%0A++title%2C%0A++slug+%7B%0A++++current%0A++%7D%2C%0A++publishedAt%2C%0A++mainImage+%7B%0A++++asset+-%3E+%7B%0A++++++_ref%2C%0A++++++url%0A++++%7D%2C%0A++++alt%0A++%7D%2C%0A++author+-%3E+%7B%0A++++_id%2C%0A++++name%0A++%7D%2C%0A++categories%5B%5D+-%3E+%7B%0A++++_id%2C%0A++++title%0A++%7D%2C%0A++body%5B%5D+%7B%0A++++_type%2C%0A++++style%2C%0A++++children%5B%5D+%7B%0A++++++_type%2C%0A++++++text%0A++++%7D%0A++%7D%0A%7D%0A&perspective=previewDrafts",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const projectsData: { result: Project[] } = await response.json();
        setData(projectsData.result);
        setLoading(false);
        console.log(projectsData.result);
        
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching data:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };

    void fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full">
      <div className="relative min-h-96 w-full">
        <div className="absolute left-1/2 top-0 z-20 h-96 w-full -translate-x-1/2 bg-black bg-opacity-50" />
        <Image
          src="/53410604317_3d4e87bc6c.jpg"
          alt="Page Background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-2 text-white">
          <h1 className="w-full text-center text-5xl text-yellow-500">
            Projects
          </h1>
          <p>Explore our innovative projects</p>
        </div>
      </div>
      {!loading ? (
        <div className="my-8 grid h-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-32">
          {data?.map((project, index) => (
            <div key={index} className="rounded-lg bg-white p-4 border-2 border-black flex flex-col gap-4 min-h-96 shadow-md">
              <h2 className="text-2xl">{project.title}</h2>
              <p>{project.author.name}</p>
              <div className="min-h-32 w-full relative">
                <Image src={project.mainImage.asset.url} alt={project.mainImage.alt} fill style={{ objectFit: "cover" }} />
              </div>
              <>
                <ReactMarkdown className={"line-clamp-2"}>
                  {project.body?.map((block) => block.children?.map((child) => child.text).join(" ")).join("\n")}
                </ReactMarkdown>
              </>
              <Button variant={"link"} className="w-full px-0 items-start justify-start" asChild>
                <Link href={`/projects/${project.slug.current}`}>See more content</Link>
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid size-full min-h-96 place-items-center">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Page;
