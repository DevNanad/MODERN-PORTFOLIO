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
    <div className=" SectionThree pb-20 md:pb-0 flex text-xl text-white md:h-[150vh] flex-col md:flex-row" id="secThree">

      {/*Presently Section*/}
      <div
        ref={stickyRef}
        className={`${showIsvisible ? 'md:sticky top-0' : ''} headings flex-[40%] flex flex-col justify-center py-20 md:pt-20 h-[100vh]`}
      >
        <h1 className="text-2xl px-10 leading-5 pb-2  md:text-4xl md:pl-10 md:leading-8 md:pb-5 nunito monospace font-semibold">
          Presently conquering fluency in MERN stack
        </h1>
        <p className="text-gray-300 px-10 text-sm poppins leading-5 italic md:pl-0 md:text-lg md:border-b-[5px] border-white md:ml-10 md:pb-3">
          consist with four powerful and modern technologies
        </p>
      </div>

      {/*I Know Section*/}
      <div className="i-know text-zinc-800 flex-[60%] px-5 py-10 md:mt-10 md:h-[140vh] md:transform-none md:shadow-none md:pr-10 md:mr-3 md:pl-20 bg-white rounded-[3.5rem] ">
        <h1 className="techstacks md:pt-[6rem] py-6 md:pb-5 md:text-center applysys md:tracking-[1rem] paintedblue uppercase font-bold text-xl">/Current Tech Stack</h1>

        {/* MERN SECTION */}

        <h3 className="text-right pt-[1rem] pb-[.5rem] font-bold md:pt-16 helvetica">MERN STACK/</h3>

        <div className="flex justify-end gap-5 md:gap-0 md:grid md:grid-cols-4">
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <DiMongodb className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Mongo DB
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <SiExpress className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Express JS
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <DiReact className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>React JS
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <SiNodedotjs className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Node JS
          </button>
        </div>

        {/* UX/UI SECTION */}

        <h3 className="text-right pt-[1rem] pb-[.5rem] font-bold md:pt-16 helvetica">UX | UI/</h3>
        <div className="flex justify-end gap-5 md:gap-0 md:grid md:grid-cols-4">
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <SiHtml5 className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>HTML5
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <DiCss3 className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>CSS3
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <SiTailwindcss className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Tailwind Css
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <SiFigma className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Figma
          </button>
          
        </div>

        {/* DATABASE SECTION */}

        <h3 className="text-right pt-[1rem] pb-[.5rem] font-bold md:pt-16 helvetica">Database/</h3>
        <div className="flex justify-end gap-5 md:gap-0 md:grid md:grid-cols-4">
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <SiMysql className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>MySQL DB
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <DiMongodb className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Mongo DB
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <SiFirebase className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Firebase
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem] ">
            <SiMicrosoftaccess className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Access DB
          </button>
        </div>

        {/* VERSION CONTROL SECTION */}

        <h3 className="text-right pt-[1rem] pb-[.5rem] font-bold md:pt-16 helvetica">Version Control/</h3>
        <div className="flex justify-end gap-5 md:gap-0">
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem]  mr-3">
            <FaGitAlt className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Git
          </button>
          <button className="shadow-lg text-sm rounded-md md:w-[4.8rem] md:h-[4.8rem]  md:mr-10">
            <SiGithub className="inline md:text-2xl mr-3 md:block md:text-center md:w-full"/>Github
          </button>
        </div>


      </div>
    </div>
  );
}

export default SectionThree;
