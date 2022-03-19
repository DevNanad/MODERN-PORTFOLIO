import React from 'react'
import logo from '../images/logo.png'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <nav className='flex justify-around overflow-hidden items-center pt-8 pl-5 text-white'>

        <motion.div className="logo w-14"
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ delay: 0.2, type: 'tween'}}
        >
            <img src={logo} alt="Logo"
                initial={{  }}
            />
        </motion.div>

        <motion.ul className='roboto flex justify-between items-center gap-5 md:gap-20 px-4 md:px-10 tracking-widest text-sm md:text-base'
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{type: 'spring', stiffness: 30, delay: 0.5}}
        >
            <li><a href="#">Projects.</a></li>
            <li><a href="#">Say Hello.</a></li>
        </motion.ul>
        
    </nav>
  )
}

export default Navbar