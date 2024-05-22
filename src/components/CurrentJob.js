import React from 'react'

import './CurrentJob.css'

export default function CurrentJob({text1, text2}) {
  return (
    <>
        <div className='flex flex-col md:-mt-10   items-center'>
        {text1 && <h3 className='text-white border w-auto inline-block px-6 py-2 rounded-3xl'>{text1}</h3>}
            <h1  className="btn-shine font-bold tracking-wider">{text2}</h1>  
        </div>
    </>
      
   
  )
}
