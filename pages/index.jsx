import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

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
      <div className=" text-text bg-mainbg">

        {/* Navbar */}
        <Navbar />
        
        <div className="relative text-xl">

          {/* Hero section */}

          <Hero />

          {/* About me section */}
          <section className="h-auto m-12 px-6 py-12 sm:m-0 sm:px-0">
            <h1 className="text-4xl text-accent pb-12 text-center">About me</h1>
            <p className=" text-accent py-4 px-4 relative leading-relaxed w-[80%] m-auto shadow text-xl border-l-4 border-gradient_from">
              Hi, my name is Syed Rafat and I am a full stack developer with a
              strong understanding of modern web development technologies. I
              have experience building complex web applications using Next.js
              for server-side rendering and optimized performance, React.js for
              building reusable UI components, and Tailwind for rapid
              prototyping and styling. On the backend, I have used Django and
              Django Restframework to build robust APIs and handle database
              management. I have a strong understanding of RESTful API design
              and have experience implementing authentication and authorization
              using JSON Web Tokens. I have also used SQL and PostgreSQL for
              database management. I have worked with linux system in the cloud
              and hosted on AWS and Azure. I am currently looking for a
              full-time remote position as a full stack developer.
            </p>
          </section>

          
          {/* Project section */}


          <section className="relative m-12">
            <h1 className="text-center text-4xl text-accent">Projects</h1>
            <div className="px-4 py-12 transition-all duration-300 text-accent">
              <div className="flex flex-wrap -mx-2">
                {portfolio.map((project) => (
                  // <div
                  //   className="px-2 w-full sm:w-1/2 lg:w-1/3 group bg-gray-500"
                  //   key={project.title}
                  // >
                  //   <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-300">
                  //     <img
                  //       className="w-full h-64 object-cover"
                  //       src={urlFor(project.image).url()}
                  //       alt={project.title}
                  //     />
                  //     <div className="px-6 py-4">
                  //       <div className="font-bold text-xl mb-2">
                  //         {project.title}
                  //       </div>
                  //       {/* Hide description, only show when hovering over card */}

                  //       <p className="text-accent text-base transition-all duration-300 hidden group-hover:inline group-hover:text-accent">
                  //         {project.description}
                  //       </p>
                  //     </div>
                  //     <div className="px-6 py-4">
                  //       <Link
                  //         href={project.link}
                  //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  //       >
                  //         View Project
                  //       </Link>
                  //     </div>
                  //   </div>
                  // </div>

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
  };
}
