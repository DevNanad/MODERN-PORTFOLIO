import React from 'react'
import proj from '../images/proj.png'

function SectionFive() {
  return (
    <div className='text-white  poppins relative top-0' id='secFive'>

      <h1 className='text-[4rem] text-center pt-28 pb-20 font-mono'>PROJECTS</h1>
      
      <div className="project-wrapper flex flex-col md:flex-row">

        {/* Latest Project */}
        <div className="contOne flex-[50%] flex flex-col justify-center px-5">

          <h1 className='text-[2rem] pb-10 text-center poppins font-semibold tracking-wider'>LATEST PROJECT</h1>
          <div className="latest-wrap rounded-md overflow-hidden h-52  flex justify-center items-center w-full bg-[#718BFF]">

              <img src={proj} alt="latest-proj-image" className='w-1/2 px-5' />

              <div className="tech-used text-white font-bold">
                <h3 className='pb-5 pl-1 roboto font-extrabold tracking-[.5rem]'>PORTFOLIO</h3>
                <button className='shadow-xl p-1 rounded-md mr-1 uppercase text-[.8rem] bg-[#121b24] my-1'>ReactJS</button>
                <button className='shadow-xl p-1 rounded-md mr-1 uppercase text-[.8rem] bg-[#121b24] my-1'>TailwindCSS</button>
                <button className='shadow-xl p-1 rounded-md mr-1 uppercase text-[.8rem] bg-[#121b24] my-1'>Framer Motion</button>
              </div>

          </div>

          <p className="about-project text-justify py-5 text-slate-200">
            My latest Portfolio currently under devevelopment, showcasing frontend ability.
          </p>

        </div>

        {/* All Projects */}
        <div className="contTwo flex-[50%] flex justify-center">
          <div class="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4 w-full px-5 rounded-xl overflow-hidden">
            <div className='bg-blue-300'>PROJECT 01</div>
            <div className='bg-yellow-300'>PROJECT 02</div>
            <div className='bg-red-300'> PROJECT 03</div>
            <div className='bg-violet-300'>PROJECT 04</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SectionFive