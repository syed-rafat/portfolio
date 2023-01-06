import React from "react";

const About = () => {
  return (
    <>
      {/* About me section */}
      <section className="h-auto px-18 py-12 sm:m-0 bg-gradient_from sm:px-0">
        <h1 className="text-4xl text-black pb-12 text-center font-bold opacity-80">About me</h1>
        <div className="px-[10rem] pb-[15rem]">
          <p className=" text-black py-4 px-4 relative leading-relaxed w-[80%] m-auto shadow text-xl border-l-4 border-l-mainbg border-gradient_from">
            Hi, I am a full stack developer with a
            strong understanding of modern web development technologies. I have
            experience building complex web applications using Next.js for
            server-side rendering and optimized performance, React.js for
            building reusable UI components, and Tailwind for rapid prototyping
            and styling. On the backend, I have used Django and Django
            Restframework to build robust APIs and handle database management. I
            have a strong understanding of RESTful API design and have
            experience implementing authentication and authorization using JSON
            Web Tokens. I have also used SQL and PostgreSQL for database
            management. I have worked with linux system in the cloud and hosted
            on AWS and Azure. I am currently looking for a full-time remote
            position as a full stack developer.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-white h-[80vh]">
        <div className="w-[75%] mx-auto  -top-40 bg-white rounded-3xl relative shadow-md">
          <div className="flex flex-nowrap flex-row font-eurostile">
            <div className="h-[40rem] w-[30rem] text-mainbg text-center text-3xl p-[5rem] m-0 flex flex-col">
              <div className="">
                <img
                  src="/front-end.png"
                  className="h-[4rem] w-auto mx-auto mb-7"
                />
              </div>
              <h2 className="font-bold pb-[5rem]">Frontend</h2>
              <ul className="flex flex-col text-xl font-mona-sans ">
                <li>Html5</li>
                <li>Javascript</li>
                <li>CSS3</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Taiilwind</li>
              </ul>
            </div>
            <div className="h-[40rem] w-[30rem] text-mainbg text-center text-3xl p-[5rem] border-x border-x-gray-300">
            <img
                  src="/server.png"
                  className="h-[4rem] w-auto mx-auto mb-7"
                />
              <h2 className="font-bold pb-[5rem]">Backend</h2>
              <ul className="flex flex-col text-xl font-mona-sans">
                <li>Python</li>
                <li>Django</li>
                <li>Django Rest Framework</li>
                <li>PostgreSQL</li>
                <li>SQL</li>
                <li>AWS, Azure, Vercel</li>
              </ul>
            </div>
            <div className="h-[40rem] w-[30rem] text-mainbg text-center text-3xl p-[5rem]">
            <img
                  src="/computer.png"
                  className="h-[4rem] w-auto mx-auto mb-7"
                />
              <h2 className="font-bold pb-[5rem]">Others</h2>
              <ul className="flex flex-col text-xl font-mona-sans">
                <li>Git</li>
                <li>Bash</li>
                <li>Data Science</li>
                <li>MATLAB, R</li>
                <li>Linux System</li>
                <li> QGIS, ArcGIS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
