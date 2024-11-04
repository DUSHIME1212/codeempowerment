import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const testimonials = [
  {
    image: "/test/Avatar.png",
    name: "John Doe",
    role: "CEO, Dropbox",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/test/Avatar.png",
    name: "Jane Smith",
    role: "CTO, Google Drive",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "/test/Avatar.png",
    name: "Alex Johnson",
    role: "Founder, Intercom",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: "/test/Avatar.png",
    name: "Emily Brown",
    role: "Product Manager, Jira",
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "/test/Avatar.png",
    name: "Michael Davis",
    role: "Developer, Notion",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    image: "/test/Avatar.png",
    name: "Sarah Taylor",
    role: "Marketing Manager, Slack",
    quote:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    image: "/testimonial7.png",
    name: "Kevin White",
    role: "Finance Manager, Stripe",
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    image: "/testimonial8.png",
    name: "Lisa Nguyen",
    role: "Operations Manager, Zapier",
    quote:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magna aliqua.",
  },
];

const Partners: React.FC = () => (
  <div className="px-72 py-16">
    <div className="grid w-full place-items-center gap-2 mb-8">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl font-semibold">Testimonials</h1>
        <hr className="h-[4px] my-2 w-72 bg-yellow-500" />
        <p>what other people say about us</p>
      </div>
    </div>
    <Carousel
      autoplay
      className="flex min-h-96 items-center justify-center rounded-3xl bg-darkblue"
    >
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className="relative flex h-full min-h-96 w-screen flex-col items-center justify-center gap-8"
        >
          <div className="absolute left-1/2 top-1/2 flex size-fit w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
            <div className="relative size-32">
              <Image
                src={`/test/Avatar-${i + 1}.png`}
                alt=""
                className="object-contain"
                fill
              />
            </div>
            <h1 className="z-50 min-w-56 text-center text-3xl font-semibold capitalize text-white">
              {testimonial.name}
            </h1>
            <p className="text-xl font-medium text-white">{testimonial.role}</p>
            <p className="text-center text-lg font-normal text-white">
              &quot;{testimonial.quote}&quot;
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Partners;
