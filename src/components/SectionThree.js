import React from "react";
import { useInView } from "react-intersection-observer";

function SectionThree() {
  const { ref:stickyRef, inView:showIsvisible } = useInView();

  return (
    <div className="flex text-xl text-white h-[130vh]">
      <div
        ref={stickyRef}
        className={`${showIsvisible ? "sticky bottom-0" : ""} headings flex-[50%] flex flex-col pt-28 md:pt-0 md:justify-center items-baseline h-[90vh]`}
      >
        <h1 className="text-2xl pl-5 leading-5 pb-2 md:text-4xl md:pl-20 md:leading-8 md:pb-5 nunito font-semibold">
          Presently conquering fluency in MERN stack
        </h1>
        <p className="pl-5 text-sm poppins leading-5 italic md:pl-20 md:text-lg">
          consist with four powerful and modern technologies
        </p>
      </div>
      <div className="i-know  p-3 flex-[50%] h-[90vh]"></div>
    </div>
  );
}

export default SectionThree;
