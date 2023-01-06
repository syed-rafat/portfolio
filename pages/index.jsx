import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

const inter = Inter({ subsets: ["latin"] });

//portfolio page for web developer

let client = createClient({
  projectId: "ovfw6pap",
  dataset: "production",
  apiVersion: "2022-12-29",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Home({ portfolio }) {
  return (
    <div>
      <Head>
        <title>Syed Rafat</title>
        <meta
          name="description"
          content="Syed Rafat's Full Stack Web Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-text bg-gradient-to-b from-mainbg via-slate-700 to-gray-200">
      <div className="">
        {/* Navbar */}
        <Navbar />
        
        <div className="relative text-xl font-eurostile">

          {/* Hero section */}

          <Hero />
          <About />
          
          {/* Project section */}

          <section className="relative m-12">
            <h1 className="text-center text-4xl text-accent">Projects</h1>
            <div className="px-4 py-12 transition-all duration-300 text-accent">
              <div className="flex flex-wrap -mx-2">
                {portfolio.map((project) => (

                  <div key={project.title} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        className="rounded-t-lg"
                        src={urlFor(project.image).url()}
                        alt={project.title}
                      />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {project.title}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-14 overflow-hidden">
                        {project.description}
                      </p>
                      <a
                        href={project.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        View Project
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Contact section */}



          {/* Tech stack section */}



          <section className="text-center text-2xl">
            <h1>My Tech Stack</h1>
            <div className="flex">
              <img src="/logos_react.svg" alt="tech" className="" />
              {/* <img src="/vscode-icons_file-type-css.svg" alt="tech" className="w-[100%]" />
              <img src="/vscode-icons_file-type-html.svg" alt="tech" className="w-[100%]" /> */}
              <img src="/logos_git-icon.svg" alt="tech" className="w-[7rem]" />
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const portfolio = await client.fetch(
    `*[_type == "portfolio"]{title, description, image, link}`
  );

  return {
    props: {
      portfolio,
    },
    revalidate: 5000,
  };
}
