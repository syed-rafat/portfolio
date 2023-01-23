/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// import { urlFor } from "../pages";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

let client = createClient({
  projectId: "ovfw6pap",
  dataset: "production",
  apiVersion: "2022-12-29",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default function Projects({ portfolio }) {

  return (
    <section className="bg-white text-black">
      <div className="p-[8rem] font-semibold lg:p-10">
        <h1 className="text-center text-4xl text-mainbg font-bold font-eurostile">
          Projects
        </h1>

        {/* First Project - Oceanlog */}
        <div className="px-10 flex shadow-xl xl:flex-col sm:px-0">
          <div className="relative w-[60%] xl:w-[100%]">
            <h1 className="py-10">{portfolio[0].title}</h1>
            <div className="flex flex-col p-5 bg-slate-500 bg-opacity-20">
              {/* first image */}
              <img
                src={urlFor(portfolio[0].image1).url()}
                alt={portfolio[0].title}
                className="w-[100%] pb-10 hover:absolute hover:overflow-visible hover:w-[50vw] hover:h-[50vh] hover:z-50 hover:-top-10 hover:object-cover hover:object-center hover:transition-all hover:duration-1000"
              />

              {/* div for 2nd and 3rd image */}
              <div className="flex flex-row relative w-[100%]">
                <img
                  src={urlFor(portfolio[0].image2).url()}
                  alt={portfolio[0].title}
                  className="w-[50%] hover:absolute hover:overflow-visible hover:w-[50vw] hover:h-[50vh] hover:z-50 hover:-top-10 hover:object-cover hover:object-center hover:transition-all hover:duration-1000]"
                />
                <img
                  src={urlFor(portfolio[0].image3).url()}
                  alt={portfolio[0].title}
                  className="w-[50%] hover:absolute hover:overflow-visible hover:w-[50vw] hover:h-[50vh] hover:z-50 hover:-top-10 hover:-right-20 hover:object-cover hover:object-center hover:transition-all hover:duration-1000]"
                />
              </div>
            </div>
          </div>
          <div className="relative w-[40%] p-10 xl:w-[100%] 2xlmin:pt-40">
            <p className="text-lg font-thin py-4 font-mona-sans">
              From 2021(November)-Present, i am devoting all my skills to
              develop and maintain this fully scalable oceanography blogging
              website:
            </p>
              <ul className="font-thin font-mona-sans text-lg decoration list-disc">
                <li> Dynamic routes which are then server-side</li>
                rendered(SSR).
                <li>
                  {" "}
                  All data including dynamic routes are served via django rest
                  api
                </li>
                <li>which stores them in a relational database(PostgreSQL).</li>
                <li>
                  {" "}
                  Static site generation(SSG) is implemented in case of non
                  dynamic pages{" "}
                </li>
                <li>
                  {" "}
                  Rich text editor(CkEditor5) with custom image upload to
                  Cloudinary is implemented and handled by django rest api{" "}
                </li>
                <li> Global state management done with Zustand.</li>
                <li>
                  Token authentication, fully working login and registration
                  system
                </li>
                <li>
                  Successfully hosted and worked with Azure, AWS Elastic
                  Beanstalk and Vercel
                </li>
                <li>Responsive and beautiful design made with tailwind</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Render this component at build time by adding getStaticprops to the page which takes portfolio object passed from index
