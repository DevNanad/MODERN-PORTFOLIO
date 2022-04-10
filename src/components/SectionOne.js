import React from "react";
import me from "../images/me.png";
import {motion} from 'framer-motion'
import {HiOutlineArrowDown} from 'react-icons/hi'

function SectionOne() {
  return (
    <div className="sectionOne roboto text-white grid grid-cols-2 md:grid-cols-3">
      <div className="myname relative text-8xl md:text-7xl flex lg:items-center lg:justify-end">
        <motion.div className="fullname overflow-hidden lg:p-5 lg:pb-10 lg:translate-x-20 lg:-translate-y-20 "
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5}}
        >
          <p className="uppercase invisible lg:visible lg:normal-case">Menard</p>
          <p className="uppercase tracking-widest text-left pl-16 md:text-center visible lg:invisible lg:uppercase lg:hidden">M  E</p>
          <p className="uppercase tracking-widest text-left pl-16 md:text-center visible lg:invisible lg:uppercase lg:hidden">N  A</p>
          <p className="uppercase tracking-widest text-left pl-16 mb-20 md:text-center visible lg:invisible lg:uppercase lg:hidden">R  D</p>
          <p className="translate-x-10 hidden lg:block">Pajares.</p>
        </motion.div>
      </div>
      <div className="me-design z-20 relative">
        <motion.img src={me} alt="Me" className=" h-11/12 translate-y-32 -translate-x-3 scale-150 md:transform-none "
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5}}
         />
        <motion.div className="circle-big circle hidden md:inline-block md:absolute md:bottom-0"
        initial={{y: 200, opacity: 0}}
        animate={{y: 50, x: -20, opacity: 1}}
        transition={{delay: 0.8, type: 'tween'}}></motion.div>
        <motion.div className="circle-small circle hidden sm:inline-block absolute bottom-0 right-0"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, type: 'tween'}}></motion.div>
      </div>
      <motion.div className="little-info hidden md:flex md:self-end lg:self-center flex-col leading-5 px-7 font-semibold tracking-widest relative invisible md:visible md:pb-32"
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 2}}
      >
        <h6 className="text-sm paintedblue sm:text-xs">Web Developer</h6>
        <h4 className="pt-4 pb-5 sm:pt-2 font-medium sm:text-sm lg:pr-36">
          Based in Philippines, I'm an aspiring full-stack developer.
        </h4>
        <h4 className="paintedblue underline underline-offset-2 decoration-2 text-md flex gap-5 items-center">My Story <HiOutlineArrowDown className="arrowdown animate-bounce text-3xl" /> </h4>

        <div className="triangle flex self-end z-40 ">
          <svg
            width="40"
            height="43"
            viewBox="0 0 71 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.690807 72.7528L9.18553 0.879212L69.7042 40.5713L0.690807 72.7528Z"
              fill="#1B1A1A"
              stroke="#2FF3FF"
              
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionOne;
