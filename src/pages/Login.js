import React from 'react'
import cat from "../images/cat.png";

export default function Login() {
  return (
    <div className='text-white bg-[#1B1D28] h-screen w-screen flex items-start justify-center font-sans'>
        <div className="login-container">
            <div className="glowing-cat-container flex flex-col items-center overflow-hidden ">
                <div className="catglow translate-y-[9rem]" ></div>
                <img src={cat} alt="sneaking cat" className='sneaking-cat w-40 translate-y-[4px]'/>
            </div>
            
            <div className="details-container w-[20rem] bg-[#21262D]/95 flex flex-col items-center px-6 py-4 rounded-2xl border-[1px] border-[#6E88F9]">

                <label>Username</label>

                <input type="text" placeholder='Username' className='bg-[#1B1D28] w-full px-3 py-2 rounded-md border-2 border-[#444C55] focus:outline-none focus:border-[#6E88F9]'/>

                <label className='mt-5'>Password</label>

                <input type="password" name="" id="" placeholder='Password' className='bg-[#1B1D28] w-full px-3 py-2 rounded-md border-2 border-[#444C55] focus:outline-none focus:border-[#6E88F9]'/>

                <button className='bg-[#6E88F9] w-full rounded-md mt-4 py-2 font-bold'>Sign in</button>

            </div>
        </div>
    </div>
  )
}
