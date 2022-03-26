import React, { useRef, useState,useCallback,useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {FiMenu,FiX} from 'react-icons/fi'
import logo from '../images/logo.png'




function Midnavbar() {
  const { ref:stickyNavRef, inView:showIsvisible } = useInView();
  const [toggle, setToggle] = useState(false)



  return (
    <div ref={stickyNavRef} className={`${stickyNavRef ? 'sticky top-0' : ''} midnav text-md text-xl text-white flex z-40 ease-in`}
    >   
        <div className={`logo py-3 w-full flex justify-between items-center md:hidden`}

        >
            <img src={logo} alt="Logo" className="h-12 ml-20"/>
            <div onClick={() => setToggle(true)} className="btn-open p-2 mr-12">
            <FiMenu className='text-blue-300 text-2xl block md:hidden scale-150 '/>
            </div>
        </div>
        <nav className={`${toggle ? 'transform-none ease-in duration-300 pb-4': ''} flex md:justify-around md:flex-row md:h-20 md:static bg-blue-300 w-screen fixed top-0 h-[60vh] translate-x-[100vw] md:transform-none  poppins flex-col items-center justify-end shadow-lg`} >

            <div className="btn-close w-full h-[10vh] text-center hover:shadow-md">
              <FiX onClick={() =>setToggle(false)} className={`${!toggle ? 'rotate-180' : ''} block md:hidden cursor-pointer text-3xl w-full ` } />
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