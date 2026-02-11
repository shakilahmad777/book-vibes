import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Header/NavBar'

export default function Root() {
  return (
    <div className='mx-5 md:mx-10 max-w-auto'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
