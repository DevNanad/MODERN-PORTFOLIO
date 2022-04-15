import React from 'react'
import logo from '../images/logo.png'
import {motion} from 'framer-motion'
import { Link} from "react-scroll";

function Navbar() {
  return (
    <nav className='flex justify-around overflow-hidden items-center pt-8 pl-5 text-white'>

        <motion.div className="logo w-14"
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ delay: 0.2, type: 'tween'}}
        >
            <img src={logo} alt="logo" />

        </motion.div>

        <motion.ul className='nav-item roboto flex justify-between items-center gap-5 md:gap-20 px-4 md:px-10 tracking-widest text-sm md:text-base z-20'
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{type: 'spring', stiffness: 30, delay: 0.5}}
        >
            <Link 
            className='cursor-pointer'
            to="secFive"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={600}
            offset={0}  
            >Projects.</Link>

            <Link 
            activeClass='active'
            className='cursor-pointer'
            to="secHello" 
            smooth={true}
            spy={true}
            duration={600}
            offset={-5}
            >Say Hello.</Link>
        </motion.ul>
        
    </nav>
  )
}

export default Navbar