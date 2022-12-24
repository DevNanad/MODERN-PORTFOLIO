import React from 'react'
import {Link} from 'react-router-dom'
import notfound from '../images/404.svg'

export default function NotFound() {
  return (
    <div className='flex w-full h-screen items-center justify-center flex-col text-white'>
        <img src={notfound} alt="404" className='h-64'/>
        <h1 className='mb-5 text-[3rem] font-semibold'>Page Not Found</h1>
        <p className='text-blue-100'>We're sorry, the page you requested could not be found</p>
        <p className='text-blue-100' >Please go back to the homepage</p>
        <button className='bg-blue-400 rounded-full py-2 px-10 text-lg text-white font-extrabold mt-2 tracking-wider'>
            <Link to="/">GO HOME</Link>
        </button>
    </div>
  )
}
