"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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

const Page = ({ params }: { params: { id: string } }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `https://o61h0ysy.api.sanity.io/v2024-11-05/data/query/production?query=*%5B_type+%3D%3D+%22post%22+%26%26+slug.current+%3D%3D+%22${params.id}%22%5D%5B0%5D`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch project");
        }

        const data = await response.json();
        console.log(data);

        if (!data.result) {
          notFound();
        }

        setProject(data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project:", error);
        notFound();
      }
    };

    void fetchProject();
  }, [params.id]);

  if (loading) {
    return (
      <div className="grid min-h-screen w-full place-items-center bg-darkblue">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  const markdownContent = project?.body
    ?.map((block) => {
      const text = block.children?.map((child) => child.text).join(" ");
      switch (block.style) {
        case "h1":
          return `# ${text}`;
        case "h2":
          return `## ${text}`;
        case "h3":
          return `### ${text}`;
        case "blockquote":
          return `> ${text}`;
        case "normal":
        default:
          return text;
      }
    })
    .join("\n\n");

  return (
    <div className="min-h-screen w-full bg-darkblue">
      <div className="relative min-h-96 w-full">
        <div className="absolute left-1/2 top-0 z-20 h-96 w-full -translate-x-1/2 bg-black bg-opacity-50" />
        <Image
          src={project?.mainImage?.asset?.url ?? "/53410604317_3d4e87bc6c.jpg"}
          alt={project?.mainImage?.alt ?? "Project Background"}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 text-white">
          <h1 className="w-full text-center text-5xl text-yellow-500">
            {project?.title}
          </h1>
          <p>By {project?.author?.name}</p>
        </div>
      </div>
      <section className="px-8 py-12 text-white">
        <article>
          <ReactMarkdown className="prose prose-invert max-w-none">
            {markdownContent}
          </ReactMarkdown>
        </article>
      </section>
    </div>
  );
};

export default Page;
