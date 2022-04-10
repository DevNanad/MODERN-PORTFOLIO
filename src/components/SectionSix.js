import React from 'react'
import messageme from '../images/man.png'

function SectionSix() {
  return (
    <div className='min-h-[100vh] bg-[#171717] flex justify-center items-center py-20 md:py-16 px-10 rounded-tr-[5rem]' id='secSix'>

        <div className="wrapper-message flex flex-col items-center md:justify-center md:gap-10 md:flex-row">

             <div className="img-message flex-[50%]">
                <img src={messageme} alt="message me vector" className='' />
            </div>

            <div className="text-message flex-[50%]">
                <h1 className='text-white text-center text-[2rem] pt-[3rem] md:pt-0 md:text-[2.5rem] poppins font-semibold'>/HIT ME UP</h1>

                <p className='py-5 text-white poppins'>You've come to the right place, hit it and lets start our agenda partner.</p>
                <button className='self-center bg-zinc-300 p-2 rounded-lg w-full poppins font-bold hover:bg-white text-zinc-900'>Hire Me</button>
            </div>

        </div>
    </div>
  )
}

export default SectionSix