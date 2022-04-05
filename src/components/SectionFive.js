import React from 'react'
import proj from '../images/proj.png'

function SectionFive() {
  return (
    <div className='h-[100vh] flex flex-col md:flex-row text-white  poppins' id='secFive'>
      
      {/* Latest Project */}
      <div className="contOne flex-[50%] flex flex-col justify-center px-5">

          
          <h1 className='text-[3rem] mt-20 pb-10 text-center poppins font-semibold tracking-wider'>LATEST PROJECT</h1>
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
      <div className="contTwo flex-[50%]">
        
      </div>
    </div>
  )
}

export default SectionFive