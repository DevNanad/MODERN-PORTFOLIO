import React, { useRef, useState,useCallback,useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {FiMenu,FiX} from 'react-icons/fi'
import logo from '../images/logo.png'




function Midnavbar() {
  const { ref:stickyNavRef, inView:showIsvisible } = useInView();
  const [toggle, setToggle] = useState(false)



  return (
    <div ref={stickyNavRef} className={`${stickyNavRef ? 'sticky top-0' : ''} midnav text-md text-xl text-white flex z-40`}
    >   
        <div className={`logo py-3 w-full flex justify-between items-center md:hidden`}

        >
            <img src={logo} alt="Logo" className="h-12 ml-20"/>
            <FiMenu onClick={() =>setToggle(true)} className='block md:hidden scale-150 mr-12 '/>
        </div>
        <nav className={`${toggle ? 'translate-x-0': ''} flex md:justify-around md:flex-row md:h-20 md:static bg-gray-800 w-screen fixed top-0 h-[50vh] translate-x-[100vw]  poppins flex-col items-center justify-end`} >

            <FiX onClick={() =>setToggle(false)} className="block md:hidden cursor-pointer" />
            <span className='p-4'>About</span>
            <span className='p-4'>Mastery</span>
            <span className='p-4'>Timeline</span>
            <span className='p-4'>Design</span>
            <span className='p-4'>Solution</span>
        </nav>
    </div>
  )
}

export default Midnavbar