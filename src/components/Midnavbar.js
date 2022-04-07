import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import {FiMenu,FiX} from 'react-icons/fi'
import logo from '../images/logo.png'
import logowhite from '../images/logowhite.png'
import { Link,animateScroll as scroll  } from "react-scroll";




function Midnavbar() {
  const { ref:stickyNavRef, inView:showIsvisible } = useInView();
  const [toggle, setToggle] = useState(false)



  return (
    <div ref={stickyNavRef} className={`${showIsvisible ? 'sticky top-0' : ''} midnav text-md text-xl text-white flex z-40 ease-in bg-[#292C35] shadow-lg`}
    >   
        <div className={`logo py-3 w-full flex justify-between items-center md:justify-center md:w-3/12`}

        >
            <img src={logo} alt="Logo" onClick={() => scroll.scrollToTop()} className="h-12 ml-20 md:ml-0"/>
            <div onClick={() => setToggle(true)} className="btn-open p-2 mr-12 md:hidden ">
              <FiMenu className='text-blue-300 hover:text-blue-100 text-2xl block md:hidden scale-150 '/>
            </div>
        </div>
        <nav className={`${toggle ? 'transform-none ease-in duration-300 pb-4 md:pb-0': '-translate-y-[100vh] ease-out duration-300'} midlink flex md:justify-around md:flex-row md:h-24 md:static bg-[#718BFF] md:bg-[#292C35] w-screen fixed top-0 h-[58vh] -translate-y-[100vh] md:transform-none  poppins flex-col items-center justify-end shadow-md z-50 rounded-lg`} >

            <div onClick={() =>setToggle(false)} className="btn-close flex justify-around items-center md:hidden w-full h-[8vh] text-center hover:shadow-md">
              {/*Logo*/}

              <img src={logowhite} alt="Logo" onClick={() => scroll.scrollToTop()} className="h-12"/>
              <FiX className=" cursor-pointer text-3xl" />
            </div>

            <Link 
            to="secHello"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={600}
            offset={-5}
            className='cursor-pointer p-4 hover:shadow-md hover:rounded-lg w-full text-center flex flex-col items-center'>
              <p>About</p>
                <span className="hidden h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#2ff3ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ff3ff]"></span>
              </span> 
            </Link>

            
              <Link 
              to="secThree" 
              activeClass="active"
              smooth={true}
              spy={true}
              duration={600}
              offset={-50}
              className='cursor-pointer p-4 hover:shadow-md hover:rounded-lg w-full text-center flex flex-col items-center'>
                <p>Mastery</p>
                <span className="hidden h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#2ff3ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ff3ff]"></span>
              </span> 
              </Link>


              <Link 
              to="secFour"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={600}
              offset={-50} 
              className='cursor-pointer p-4 hover:shadow-md hover:rounded-lg w-full text-center
              flex flex-col items-center'>
                <p>Timeline</p>
                <span className="hidden h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#2ff3ff] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ff3ff]"></span>
                </span> 
              </Link>

            <Link 
            to="secFive"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={600}
            offset={0}  
            className='cursor-pointer p-4 hover:shadow-md hover:rounded-lg w-full text-center flex flex-col items-center'>
              <p>Projects</p>
                <span className="hidden h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#2ff3ff] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ff3ff]"></span>
                </span> 
            </Link>

            <Link 
            to="secSix"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={600}
            offset={-40}  
            className='cursor-pointer p-4 hover:shadow-md hover:rounded-lg w-full text-center flex flex-col items-center'>
              <p>Solution</p>
                <span className="hidden h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#2ff3ff] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ff3ff]"></span>
                </span> 
            </Link>

        </nav>
    </div>
  )
}

export default Midnavbar