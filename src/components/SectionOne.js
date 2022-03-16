import React from "react";
import me from "../images/me.png";
import {motion} from 'framer-motion'

function SectionOne() {
  return (
    <div className="sectionOne roboto text-white grid grid-cols-3 ">
      <div className="myname text-7xl font-bold flex items-center justify-end">
        <motion.div className="fullname translate-x-20 -translate-y-24"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5}}
        >
          <p>Menard</p>
          <p className="translate-x-10">Pajares.</p>
        </motion.div>
      </div>
      <div className="me-design z-10 relative">
        <motion.img src={me} alt="Me" className="h-11/12"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5}}
         />
        <motion.div className="circle-big circle inline-block absolute bottom-0"
        initial={{y: 200, opacity: 0}}
        animate={{y: 50, x: -20, opacity: 1}}
        transition={{delay: 0.8, type: 'tween'}}></motion.div>
        <motion.div className="circle-small circle inline-block absolute bottom-0 right-0"
        initial={{y: 200, opacity: 0}}
        animate={{y: 0, x: 190, opacity: 1}}
        transition={{delay: 1, type: 'tween'}}></motion.div>
      </div>
      <motion.div className="little-info flex self-center flex-col leading-5 pl-5 font-semibold tracking-widest relative"
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 0.5}}
      >
        <h6 className="text-sm paintedblue">Web Developer</h6>
        <h4 className="pt-4 pb-6 font-medium">
          Based in Philippines, I'm an aspiring full-stack developer.
        </h4>
        <h4 className="paintedblue underline text-lg">My Story</h4>

        <div className="triangle flex self-end">
          <svg
            width="71"
            height="74"
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
