import React, { useState } from 'react'
import proj from '../images/proj.png'
import {motion} from 'framer-motion'

function SectionFive() {

  const [latestOpen, setLatestOpen] = useState(false)

  return (
    <div
      className="text-white  poppins relative top-0 pb-[4rem] md:pb-[9rem]"
      id="secFive"
    >
      <h1 className="projects text-[3.7rem] text-center pt-28 pb-20 font-mono ">
        /PROJECTS
      </h1>

      <div className="project-wrapper flex flex-col gap-5 md:gap-5 lg:gap-0 lg:flex-row">
        {/* Latest Project */}
        <div className="contOne flex-[50%] flex flex-col justify-center px-5">
          <h1 className="text-[1.5rem] md:text-[2rem] pb-2 lg:text-center poppins font-semibold tracking-wider">
            LATEST PROJECT
          </h1>
          <motion.div
            layout
            transition={{ layout: { duration: 1, type: "spring" } }}
            onClick={() => setLatestOpen(!latestOpen)}
            className={`${
              latestOpen
                ? "absolute top-[12rem] left-0 justify-center w-full flex flex-col rounded-md overflow-hidden"
                : ""
            } latest-wrap bg-[#718BFF]`}
          >
            <motion.div
              layout="position"
              className="rounded-md overflow-hidden flex justify-center items-center w-full bg-[#718BFF] p-5 border-b-2"
            >
              <motion.img src={proj} alt="latest-proj-img" className="w-1/2" />

              <motion.div className="tech-used text-white font-bold">
                <motion.h3 className="text-[.7rem] md:text-[1.5rem] pb-2 md:pb-4 pl-1 roboto font-extrabold tracking-[.5rem]">
                  PORTFOLIO
                </motion.h3>
                <motion.button className="shadow-xl p-1 mr-1 uppercase text-[.6rem] md:text-[.8rem] bg-[#121b24] my-1">
                  ReactJS
                </motion.button>
                <motion.button className="shadow-xl p-1 mr-1 uppercase text-[.6rem] md:text-[.8rem] bg-[#121b24] my-1">
                  TailwindCSS
                </motion.button>
                <motion.button className="shadow-xl p-1 mr-1 uppercase text-[.6rem] md:text-[.8rem] bg-[#121b24] my-1">
                  Framer Motion
                </motion.button>
              </motion.div>
            </motion.div>

            {latestOpen && (
              <motion.table initial={{opacity: 0}} animate={{opacity: 1}} className="w-full bg-white text-zinc-800">
                <tbody>
                  <tr>
                    <th className="w-1/2 text-left p-5">Development Period</th>
                    <td>1 month</td>
                  </tr>
                  <tr>
                    <th className="w-1/2 text-left p-5">Release Date</th>
                    <td>April 2022</td>
                  </tr>
                </tbody>
              </motion.table>
            )}
          </motion.div>
        </div>

        {/* All Projects */}
        <div className="contTwo flex-[50%] flex justify-center">
          <div className="onsmalldev block md:hidden">
            <button className="bg-white text-[#121b24] font-semibold py-2 px-3 text-md rounded-2xl">
              See all
            </button>
          </div>
          <div className="hidden md:grid md:grid-rows-2 md:grid-cols-2 md:grid-flow-col gap-4 w-full px-5 rounded-xl overflow-hidden">
            <div className="bg-blue-300 p-4">
              <img src={proj} alt="latest-proj-img" className="w-1/2" />
            </div>
            <div className="bg-yellow-300 p-4">
              <img src={proj} alt="latest-proj-img" className="w-1/2" />
            </div>
            <div className="bg-red-300 p-4">
              <img src={proj} alt="latest-proj-img" className="w-1/2" />
            </div>
            <div className="bg-green-300 p-4">
              <img src={proj} alt="latest-proj-img" className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive