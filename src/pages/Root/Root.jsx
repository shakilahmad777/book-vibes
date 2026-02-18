import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Header/NavBar'
import { Toaster } from 'react-hot-toast'

export default function Root() {
  return (
    <div className='mx-5 md:mx-20 max-w-auto'>
        <NavBar></NavBar>
        <div><Toaster position="top-right"/></div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
