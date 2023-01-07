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
import Footer from "../components/footer";
import Projects from "../components/Projects";

const inter = Inter({ subsets: ["latin"] });

//portfolio page for web developer

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
      <div className="text-text">
        <img
          src="mountain.png"
          className="absolute top-0 sm:w-[100vw] w-[100vw] h-[100vh] object-cover overflow-hidden"
        />
        {/* Navbar */}
        <Navbar />

        <div className="relative text-xl font-eurostile">
          {/* Hero section */}

          <Hero />
          <About />

          {/* Project section */}

          <Projects portfolio={portfolio} />
          
          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const portfolio = await client.fetch(
    `*[_type == "portfolio"]{title, description, image1, image2, image3, link}`
  );

  return {
    props: {
      portfolio,
    },
    revalidate: 5000,
  };
}
