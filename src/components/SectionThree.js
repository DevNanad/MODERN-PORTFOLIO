import React from "react";
import { useInView } from "react-intersection-observer";
import { DiMongodb, DiReact,DiCss3 } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa"
import { SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiFigma,
  SiMysql,
  SiFirebase,
  SiMicrosoftaccess,
  SiGithub } from "react-icons/si"

function SectionThree() {
  const { ref:stickyRef, inView:showIsvisible } = useInView();

  return (
    <div className=" SectionThree flex text-xl text-white h-[100vh] md:h-[150vh] flex-col md:flex-row">
      <div
        ref={stickyRef}
        className={`${showIsvisible ? 'md:sticky top-0' : ''} headings flex-[50%] flex flex-col justify-center h-[100vh] items-center`}
      >
        <h1 className="text-2xl pl-5 leading-5 pb-2  md:text-4xl md:pl-20 md:pr-7 md:leading-8 md:pb-5 nunito font-semibold">
          Presently conquering fluency in MERN stack
        </h1>
        <p className="pl-5 text-sm poppins leading-5 italic md:pl-20 md:pr-20 md:text-lg">
          consist with four powerful and modern technologies
        </p>
      </div>
      <div className="i-know  p-3 flex-[50%] md:h-full -skew-y-6 md:transform-none shadow-md shadow-indigo-50 md:shadow-none md:pr-10 ">
        <h1>I KNOW</h1>

        {/* MERN SECTION */}

        <h3 className="text-right font-bold md:pt-28">MERN Stack</h3>

        <div className="flex justify-end gap-5 text-lg md:grid md:grid-cols-4">
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <DiMongodb className="inline mr-3 md:block md:text-center md:w-full"/>Mongo DB
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiExpress className="inline mr-3 md:block md:text-center md:w-full"/>Express JS
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <DiReact className="inline mr-3 md:block md:text-center md:w-full"/>React JS
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiNodedotjs className="inline mr-3 md:block md:text-center md:w-full"/>Node JS
          </button>
        </div>

        {/* UX/UI SECTION */}

        <h3 className="text-right font-bold md:pt-28">UX / UI</h3>
        <div className="flex justify-end gap-5 text-lg md:grid md:grid-cols-4">
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiHtml5 className="inline mr-3 md:block md:text-center md:w-full"/>HTML5
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <DiCss3 className="inline mr-3 md:block md:text-center md:w-full"/>CSS3
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiTailwindcss className="inline mr-3 md:block md:text-center md:w-full"/>Tailwind Css
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiFigma className="inline mr-3 md:block md:text-center md:w-full"/>Figma
          </button>
          
        </div>

        {/* DATABASE SECTION */}

        <h3 className="text-right font-bold md:pt-28">Database</h3>
        <div className="flex justify-end gap-5 text-lg md:grid md:grid-cols-4">
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiMysql className="inline mr-3 md:block md:text-center md:w-full"/>MySQL DB
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <DiMongodb className="inline mr-3 md:block md:text-center md:w-full"/>Mongo DB
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiFirebase className="inline mr-3 md:block md:text-center md:w-full"/>Firebase
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiMicrosoftaccess className="inline mr-3 md:block md:text-center md:w-full"/>Access DB
          </button>
        </div>

        {/* VERSION CONTROL SECTION */}

        <h3 className="text-right font-bold md:pt-28">Version Control</h3>
        <div className="flex justify-end gap-5 text-lg">
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <FaGitAlt className="inline mr-3 md:block md:text-center md:w-full"/>Git
          </button>
          <button className="shadow-lg rounded-md p-2 md:w-28 md:h-28 md:rounded-full">
            <SiGithub className="inline mr-3 md:block md:text-center md:w-full"/>Github
          </button>
        </div>


      </div>
    </div>
  );
}

export default SectionThree;
