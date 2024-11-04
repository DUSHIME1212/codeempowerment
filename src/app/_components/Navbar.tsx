"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "~/components/ui/button";
import { FiMenu } from "react-icons/fi";
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';

const Navbar = () => {

  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];
  
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = scrollPosition > 0 ? 'bg-white text-black' : 'bg-transparent text-white';

  return (
    <header className={`z-50 `}>

      <nav className={`fixed right-0 top-0 z-50 flex w-full flex-row items-center justify-between px-8 md:px-16 py-4 ${navbarStyle}`}>
        <Link href={"/"}>CodeEmpowerment</Link>

        <div className="flex flex-row items-center gap-4">
          <button
            className="md:hidden"
          >
            <FiMenu />
          </button>
          <div className="flex flex-row max-md:hidden items-center gap-4">
            {links.map((item, i) => (
              <Link
                key={i}
                className="duration-300 hover:text-yellow-500"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
            <Button className="bg-yellow-500">Explore now</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
