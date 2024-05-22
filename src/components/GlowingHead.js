import React from 'react'

export default function GlowingHead({name}) {
  return (
    
      <div className='backdrop-blur-lg border rounded-2xl px-5 py-2 flex flex-col items-center' >
          <div className='nav-glow -mt-[9.5px] bg-[#f2f2f2]  rounded-md w-[30px] h-[3px] shadow-shadow'></div>
          <h3 className='text-3xl '>{name}</h3>
      </div>
     
  )
}
