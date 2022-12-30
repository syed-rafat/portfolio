import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

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
  console.log(portfolio[0]);
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
        <section className="h-[10vh]">
        <nav className="pt-6 pl-28 h-[10vh] fixed z-20 bg-mainbg w-full">
          <ul className="flex">
            <li className="text-xl px-14">
              <a href="#">Home</a>
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
                    <button className="mt-5 bg-gradient-to-r from-gradient_from to-gradient_to border-mainbg text-mainbg font-semibold  py-3 px-5 rounded-lg md:mx-auto">
                      Contact Me
                    </button>
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
          <section className="h-[18rem]">
            <h1>About Me</h1>
          </section>
          {/* Tech stack section */}

          <section className="text-center text-2xl">
            <h1>My Tech Stack</h1>
            <div></div>
          </section>
          {/* Project section */}
          <section>
            <h1>My Projects</h1>
            {portfolio.map((project) => (
              <div key={project.title}>
                <a href="{project.link}">
                  <img
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    width={300}
                    height={300}
                  />
                  <h1>{project.title}</h1>
                </a>
                <p>{project.description}</p>
              </div>
            ))}
            {!portfolio[0].length > 0 && (
              <div>
                <div>¯\_(ツ)_/¯</div>
                <p>
                  Your data will show up here when youve configured everything
                  correctly
                </p>
              </div>
            )}
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
