import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Navbar from "../components/Navbar";

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
          <section className="relative h-[90vh]">
            <div className="p-16 m-16 mt-0 ml-2">
              <div className="flex m-auto flex-row flex-nowrap self-center p-16 pt-52 md:flex-wrap md:p-0 md:m-0">
                {/* Hero text */}
                <div className="relative md:order-2">
                  <div className="w-[70%] md:w-full">
                    <h2 className="text-3xl text-title font-bold py-3">
                      Full Stack Web Developer
                    </h2>
                    {/* <h1 className="text-7xl font-bold py-3">Syed Rafat</h1> */}
                    <img src="/name.svg" alt="name" className="w-[100%]" />
                    <p className="py-3">
                      Building various complex web applications with Next.js,
                      React.js Tailwind, Django, Django Restframework
                    </p>
                    <Link href="/contact">
                      <button className="mt-5 bg-gradient-to-r from-gradient_from to-gradient_to border-mainbg text-mainbg font-semibold  py-3 px-5 rounded-lg md:mx-auto">
                        Contact Me
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Hero image */}
                <div className="relative m-0 p-0 pt-5 xl:ml-24 xl:bottom-34 xl:pt-0 md:order-1">
                  {/* rounded image */}
                  <Image
                    src={"/pro.png"}
                    alt="profile pic"
                    width={400}
                    height={400}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* About me section */}
          <section className="h-[36rem] m-12 px-6 py-12">
            <h1 className="text-4xl text-accent pb-12 text-center">
              About me
            </h1>
            <p className=" text-accent py-4 px-4 relative leading-relaxed w-[80%] m-auto shadow text-xl border-l-4 border-gradient_from">
              Hi, my name is Syed Rafat and I am a full stack developer with
              a strong understanding of modern web development technologies. I
              have experience building complex web applications using Next.js
              for server-side rendering and optimized performance, React.js for
              building reusable UI components, and Tailwind for rapid
              prototyping and styling. On the backend, I have used Django and
              Django Restframework to build robust APIs and handle database
              management. I have a strong understanding of RESTful API design
              and have experience implementing authentication and authorization
              using JSON Web Tokens. I have also used SQL and PostgreSQL for
              database management. I have worked with linux system in the cloud and hosted on AWS and Azure.
              I am currently looking for a full-time
              remote position as a full stack developer.
            </p>
          </section>
          {/* Tech stack section */}

          <section className="text-center text-2xl">
            <h1>My Tech Stack</h1>
            <div></div>
          </section>
          {/* Project section */}
          <section className="relative m-12">
            <h1 className="text-center text-4xl text-accent">Projects</h1>
            <div className="px-4 py-12 transition-all duration-300">
              <div className="flex flex-wrap -mx-2">
                {portfolio.map((project) => (
                  <div
                    className="px-2 w-full sm:w-1/2 lg:w-1/3 group"
                    key={project.title}
                  >
                    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <img
                        className="w-full h-64 object-cover"
                        src={urlFor(project.image).url()}
                        alt={project.title}
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {project.title}
                        </div>
                        {/* Hide description, only show when hovering over card */}

                        <p className="text-gray-700 text-base hidden group-hover:block">
                          {project.description}
                        </p>
                      </div>
                      <div className="px-6 py-4">
                        <Link
                          href={project.link}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Contact section */}
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
