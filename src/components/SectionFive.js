import React from 'react'
import proj from '../images/proj.png'

function SectionFive() {
  return (
    <div className='text-white  poppins relative top-0' id='secFive'>

      <h1 className='projects text-[3.7rem] text-center pt-28 pb-20 font-mono '>PROJECTS</h1>
      
      <div className="project-wrapper flex flex-col gap-5 md:gap-5 lg:gap-0 lg:flex-row">

        {/* Latest Project */}
        <div className="contOne flex-[50%] flex flex-col justify-center px-5">

          <h1 className='text-[1.5rem] md:text-[2rem] pb-2 lg:text-center poppins font-semibold tracking-wider'>LATEST PROJECT</h1>
          <div className="latest-wrap rounded-md overflow-hidden flex justify-center items-center w-full bg-[#718BFF] p-5 border-b-2">

              <img src={proj} alt="latest-proj-img" className='w-1/2' />

              <div className="tech-used text-white font-bold">
                <h3 className='text-[.7rem] md:text-[1.5rem] pb-2 md:pb-4 pl-1 roboto font-extrabold tracking-[.5rem]'>PORTFOLIO</h3>
                <button className='shadow-xl p-1 rounded-md mr-1 uppercase text-[.6rem] md:text-[.8rem] bg-[#121b24] my-1'>ReactJS</button>
                <button className='shadow-xl p-1 rounded-md mr-1 uppercase text-[.6rem] md:text-[.8rem] bg-[#121b24] my-1'>TailwindCSS</button>
                <button className='shadow-xl p-1 rounded-md mr-1 uppercase text-[.6rem] md:text-[.8rem] bg-[#121b24] my-1'>Framer Motion</button>
              </div>

          </div>

        </div>

        {/* All Projects */}
        <div className="contTwo flex-[50%] flex justify-center">
          <div className="onsmalldev block md:hidden">
            <button className='bg-white text-[#121b24] font-semibold py-2 px-3 text-md rounded-2xl'>See all</button>
          </div>
          <div className="hidden md:grid md:grid-rows-2 md:grid-cols-2 md:grid-flow-col gap-4 w-full px-5 rounded-xl overflow-hidden">
            <div className='bg-blue-300 p-4'>
              <img src={proj} alt="latest-proj-img" className='w-1/2' />
            </div>
            <div className='bg-yellow-300 p-4'>
              <img src={proj} alt="latest-proj-img" className='w-1/2' />
            </div>
            <div className='bg-red-300 p-4'>
              <img src={proj} alt="latest-proj-img" className='w-1/2' />
            </div>
            <div className='bg-green-300 p-4'>
              <img src={proj} alt="latest-proj-img" className='w-1/2' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SectionFive