import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isNavVisible, setNavVis] = useState(true);
  const [previousScroll, setScroll] = useState(0);
  console.log(previousScroll);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isVisible = previousScroll > currentScroll;

      setNavVis(isVisible);
      setScroll(currentScroll);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScroll]);

  return (
    <section className="h-[10vh] font-eurostile text-white">
      <nav
        className={`${isNavVisible ? "bg-mainbg" : "bg-mainbg opacity-0"} ${
          previousScroll < 230 && "bg-opacity-0"
        } ${
          previousScroll > 250 && "shadow-2xl"
        } pt-[4vh] pl-28 h-[10vh] sm:h-20 fixed top-0 z-20 w-full lg:pl-0 lg:p-4 transition duration-500 ease-in-out`}
      >
        <ul className="relative flex flex-nowrap text-xl font-bold items-center mx-auto justify-between">
          <li className="px-14 lg:px-4 bg-slate-500 bg-opacity-20 rounded-3xl sm:ml-4">
            <Link href="/" className="flex">
              Home
            </Link>
          </li>
          <li className="px-14 lgmin:fixed lgmin:right-[16rem] lgmin:pt-2 lg:px-2">
            <a href="#">Projects</a>
          </li>
          <li className="lgmin:px-14 lgmin:fixed lgmin:right-20 px-2">
            <button className="bg-gradient-to-r from-gradient_from to-gradient_to border-mainbg text-mainbg font-semibold  py-2 px-3 rounded-xl md:mx-auto">
              <a href="#">Contact</a>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
