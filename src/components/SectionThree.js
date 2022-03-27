import React from "react";
import { useInView } from "react-intersection-observer";
import { DiMongodb, DiReact } from "react-icons/di"
import { SiExpress,SiNodedotjs } from "react-icons/si"

function SectionThree() {
  const { ref:stickyRef, inView:showIsvisible } = useInView();

  return (
    <div className=" SectionThree flex text-xl text-white h-[100vh] md:h-[200vh] flex-col md:flex-row">
      <div
        ref={stickyRef}
        className={`${showIsvisible ? 'md:sticky top-0' : ''} headings flex-[50%] flex flex-col justify-center h-[100vh] items-center`}
      >
        <h1 className="text-2xl pl-5 leading-5 pb-2  md:text-4xl md:pl-20 md:leading-8 md:pb-5 nunito font-semibold">
          Presently conquering fluency in MERN stack
        </h1>
        <p className="pl-5 text-sm poppins leading-5 italic md:pl-20 md:text-lg">
          consist with four powerful and modern technologies
        </p>
      </div>
      <div className="i-know  p-3 flex-[50%] md:h-[200vh] -skew-y-6 md:transform-none shadow-lg md:shadow-none -z-10">
        <h1>I KNOW</h1>
        <h3 className="text-right font-bold">MERN Stack</h3>
        <div className="flex justify-end gap-5 text-lg">
          <button className="bg-gray-400 rounded-md p-1">
            <DiMongodb className="inline mr-3"/>Mongo DB
          </button>
          <button className="bg-gray-400 rounded-md p-2">
            <SiExpress className="inline mr-3"/>Express JS
          </button>
          <button className="bg-gray-400 rounded-md p-2">
            <DiReact className="inline mr-3"/>React JS
          </button>
          <button className="bg-gray-400 rounded-md p-2">
            <SiNodedotjs className="inline mr-3"/>Node JS
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
