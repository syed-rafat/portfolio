import React from "react";
import Link from "next/link";


const Navbar = () => {
    return (
        <section className="h-[10vh]">
        <nav className="pt-6 pl-28 h-[10vh] fixed z-20 bg-mainbg w-full lg:pl-0 lg:p-4">
          <ul className="relative flex flex-nowrap text-xl font-bold items-center mx-auto justify-between">
            <li className="px-14 lg:px-4">
              <Link href="/">Home</Link>
            </li>
            <li className="px-14 lgmin:fixed lgmin:right-[16rem] lgmin:pt-2 lg:px-2">
              <a href="#">Projects</a>
            </li>
            <li className="lgmin:px-14 lgmin:fixed lgmin:right-20 px-2">
              <button className="bg-gradient-to-r from-gradient_from to-gradient_to border-mainbg text-mainbg font-semibold  py-2 px-3 rounded-xl md:mx-auto"><a href="#">Contact</a></button>
            </li>
          </ul>
        </nav>
        </section>
    );
}

export default Navbar;