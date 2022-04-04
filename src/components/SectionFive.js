import React from 'react'
import proj from '../images/proj.png'

function SectionFive() {
  return (
    <div className='h-[100vh] flex text-white poppins' id='secFive'>
      
      {/* Latest Project */}
      <div className="contOne flex-[50%] flex flex-col justify-center px-10">

          <h3 className='roboto font-extrabold tracking-widest'>PORTFOLIO</h3>

          <div className="latest-wrap rounded-md overflow-hidden h-52 flex justify-center items-center w-full bg-[#718BFF]">

            <img src={proj} alt="latest-proj-image" className='w-1/2' />

          </div>

          <p className="about-project text-justify py-5 text-slate-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ab tempora culpa sit aliquid earum iusto, voluptates, officiis temporibus nesciunt odit atque quis eius suscipit aspernatur asperiores maiores dolores odio.
          </p>
          
          <div className="tech-used text-white font-bold">
            <button className='shadow-xl p-1 rounded-md mr-1'>ReactJS</button>
            <button className='shadow-xl p-1 rounded-md mr-1'>TailwindCSS</button>
            <button className='shadow-xl p-1 rounded-md mr-1'>Framer Motion</button>
          </div>

      </div>

      {/* All Projects */}
      <div className="contTwo flex-[50%]">
        
      </div>
    </div>
  )
}

export default SectionFive