import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container"><Outlet />
      </div>
      
    </div>
  )
}

export default RootLayout
