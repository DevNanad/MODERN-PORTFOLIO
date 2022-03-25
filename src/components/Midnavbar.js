import React, { useRef, useState,useCallback,useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {FiMenu} from 'react-icons/fi'
import logo from '../images/logo.png'




function Midnavbar() {
  const { ref:stickyNavRef, inView:showIsvisible } = useInView();


  return (
    <div ref={stickyNavRef} className={`${stickyNavRef ? 'sticky top-0' : ''} midnav text-md text-xl text-white flex z-40`}
    >   
        <div className={`logo py-3 w-full flex justify-between items-center md:hidden`}

        >
            <img src={logo} alt="Logo" className="h-12 ml-20"/>
            <FiMenu className='block md:hidden scale-150 mr-12 '/>
        </div>
        <nav className='md:flex md:justify-around bg-gray-800 w-full poppins hidden '>
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