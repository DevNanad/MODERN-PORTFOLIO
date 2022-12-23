import React from 'react'
import cat from "../images/cat.png";
import { useState } from 'react';
import { useTimelineStore } from '../store/zustand'
import { Navigate } from "react-router-dom";


export default function Login() {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const { token, loginRequest, isLoading, setError } = useTimelineStore((state) => state)


  const loginSubmit  = (e) => {
    e.preventDefault()

    loginRequest(username, password)
  
    //console.log(username, password);

    //console.log(token);

  }

 


  return (

    <div className='text-white bg-[#1B1D28] h-screen w-screen flex items-start justify-center font-sans'>
        <div className="login-container">
            <div className="glowing-cat-container flex flex-col items-center overflow-hidden ">
                <div className="catglow translate-y-[9rem]" ></div>
                <img src={cat} alt="sneaking cat" className='sneaking-cat w-40 translate-y-[4px]'/>
            </div>
            
            {token && (<Navigate to="/admin/dashboard" replace={true} />)}
            <form 
            onSubmit={loginSubmit}
            className="details-container w-[20rem] bg-[#21262D]/95 flex flex-col items-center px-6 py-4 rounded-2xl border-[1px] border-[#6E88F9]">

                <label>Username</label>

                <input 
                type="text" 
                placeholder='Username' 
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className='bg-[#1B1D28] w-full px-3 py-2 rounded-md border-2 border-[#444C55] focus:outline-none focus:border-[#6E88F9]'/>

                <label className='mt-5'>Password</label>

                <input 
                type="password" 
                name="" 
                id="" 
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                className='bg-[#1B1D28] w-full px-3 py-2 rounded-md border-2 border-[#444C55] focus:outline-none focus:border-[#6E88F9]'/>


                { isLoading ? <button 
                
                type="submit"
                className='bg-[#6E88F9] w-full rounded-md mt-4 py-2 font-bold'>Signing in...</button> : <button
                type="submit"
                className='bg-[#6E88F9] w-full rounded-md mt-4 py-2 font-bold'>Sign in</button> }
                

                { setError && <div className='text-red-400 text-sm p-1 text-center'>{setError}</div>}
                { token && <div className='text-red-400'>Logged in!</div>}
                { !token && <div className='text-red-400'>Not Logged in!</div>}

            </form>
        </div>
    </div>
  )
}
