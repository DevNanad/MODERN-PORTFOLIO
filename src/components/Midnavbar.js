import React, { useRef, useState,useCallback,useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {FiMenu,FiX} from 'react-icons/fi'
import logo from '../images/logo.png'




function Midnavbar() {
  const { ref:stickyNavRef, inView:showIsvisible } = useInView();
  const [toggle, setToggle] = useState(false)



  return (
    <div ref={stickyNavRef} className={`${showIsvisible ? 'sticky top-0' : ''} midnav text-md text-xl text-white flex z-40 ease-in bg-[#292C35]`}
    >   
        <div className={`logo py-3 w-full flex justify-between items-center md:hidden`}

        >
            <img src={logo} alt="Logo" className="h-12 ml-20"/>
            <div onClick={() => setToggle(true)} className="btn-open p-2 mr-12">
            <FiMenu className='text-blue-300 hover:text-blue-100 text-2xl block md:hidden scale-150 '/>
            </div>
        </div>
        <nav className={`${toggle ? 'transform-none ease-in duration-300 pb-4': '-translate-y-[100vh] ease-out duration-300'} flex md:justify-around md:flex-row md:h-20 md:static bg-[#718BFF] md:bg-[#292C35] w-screen fixed top-0 h-[58vh] -translate-y-[100vh] md:transform-none  poppins flex-col items-center justify-end shadow-md z-50 rounded-lg`} >

            <div onClick={() =>setToggle(false)} className="btn-close block md:hidden w-full h-[8vh] text-center hover:shadow-md">
              <FiX className=" cursor-pointer text-3xl w-full" />
            </div>
            <span className='p-4 hover:shadow-md hover:rounded-lg w-full text-center'>About</span>
            <span className='p-4 hover:shadow-md hover:rounded-lg w-full text-center'>Mastery</span>
            <span className='p-4 hover:shadow-md hover:rounded-lg w-full text-center'>Timeline</span>
            <span className='p-4 hover:shadow-md hover:rounded-lg w-full text-center'>Design</span>
            <span className='p-4 hover:shadow-md hover:rounded-lg w-full text-center'>Solution</span>
        </nav>
    </div>
  )
}

export default Midnavbar