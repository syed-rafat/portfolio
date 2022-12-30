import React from "react";
import Link from "next/link";


const Navbar = () => {
    return (
        <section className="h-[10vh]">
        <nav className="pt-6 pl-28 h-[10vh] fixed z-20 bg-mainbg w-full">
          <ul className="flex">
            <li className="text-xl px-14">
              <Link href="/">Home</Link>
            </li>
            <li className="text-xl px-14 fixed right-[16rem] pt-2">
              <a href="#">Projects</a>
            </li>
            <li className="text-xl px-14">
              <button className="fixed right-20 bg-gradient-to-r from-gradient_from to-gradient_to border-mainbg text-mainbg font-semibold  py-2 px-3 rounded-xl md:mx-auto"><a href="#">Contact</a></button>
            </li>
          </ul>
        </nav>
        </section>
    );
}

export default Navbar;