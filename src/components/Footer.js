import React from 'react'
import LetsConnect from './LetsConnect'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div id='footer' className='flex flex-col w-full gap-10 items-center justify-between p-16 sm:p-28 md:p-36 xl:p-40  bg-[#1B1B1B] '>
      
      <h1 className=' text-[#dfd3c3] text-[9vw] font-display'>LET'S  CHAT</h1>
      <LetsConnect/>

      <div className='flex  flex-col-reverse w-full items-center sm:flex-row sm:justify-between gap-2'>
        <h1>@Piyush dana2024</h1>

        <ul className='flex space-x-5 underline'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="https://knowme.tiiny.site/" target='_black'>Resume</Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer
