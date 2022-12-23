import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTimelineStore } from '../store/zustand'

export default function Dashboard() {
    const {logoutRequest} = useTimelineStore((state) => state)

  return (
    <div className='dasboard-container'>
        <nav className='bg-blue-300 h-10 flex justify-around items-center'>
            <h1>Dashboard</h1>
            <NavLink to="/admin/login" onClick={logoutRequest}>Logout</NavLink>
        </nav>
    </div>
  )
}
