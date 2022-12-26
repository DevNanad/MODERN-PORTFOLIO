import React from 'react'
import { Navigate } from 'react-router-dom'
import { useTimelineStore } from '../store/zustand'

export default function ProLogin({children}) {
    const {token} = useTimelineStore((state) => state)

    return !token ? children : <Navigate to="/admin/dashboard"/>
}