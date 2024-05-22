import React from 'react'
import LetsConnect from './LetsConnect'
import { Link } from 'react-router-dom'
import FooterGif from './FooterGif'
function Footer() {
  return (
    <div id='footer' className='flex flex-col w-full gap-10 items-center justify-between p-16 sm:p-28 md:p-36 xl:p-40  bg-[#1B1B1B] '>
      
      <h1 className=' text-[#dfd3c3] text-[9vw] font-display'>LET'S  CHAT</h1>
      <LetsConnect/>

      <div className='flex  flex-col-reverse w-full items-center sm:flex-row sm:justify-between gap-2'>
        
        <div className='flex flex-col md:flex-row items-end'>
          <h1>@Piyush dana2024 </h1>
          <FooterGif/> 
        </div>
         

        <ul className='flex space-x-5 underline'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="https://acrobat.adobe.com/id/urn:aaid:sc:AP:3dbb3358-9d4b-4f1f-ad5c-f05c0028fb1d" target='_black'>Resume</Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer
