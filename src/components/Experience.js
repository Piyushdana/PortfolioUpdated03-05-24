import React from 'react'
import GlowingHead from './GlowingHead'

export default function Experience({Ex}) {
  return (
    <>

    
<div className="p-3 m-2 rounded-3xl border  border-[#ffffff33]">
<h1 className="text-4xl pb-5">Experience</h1>
        <div className='gap-2 grid grid-cols-1 md:grid-cols-2'> 
        <div className="p-5 rounded-3xl border border-[#ffffff33]  flex flex-col text-start">
        <span  className="text-center -mt-3 py-3">{Ex.Date}</span>


        <div className="flex  flex-col md:flex-row md:gap-5  py-3">
            <h1 className="text-lg">Organization :</h1>
            <span className="text-lg">{Ex.Organisation}</span>
        </div>

        <div className="flex flex-col md:flex-row md:gap-[5.5rem] py-3">
            <h1 className="text-lg">Role :</h1>
            <span className="text-lg flex-wrap">{Ex.Role}</span>
        </div>


        <div className="flex flex-col md:flex-row gap-1 md:gap-12 py-3">
            <h1 className="text-lg">Summary:</h1>
            <span className="text-lg flex-wrap">{Ex.Summary}</span>
            </div>


        <div className="flex  flex-col md:flex-row md:gap-12 py-3">
            <h1 className="text-lg">Learned:</h1>
            <span className="text-lg flex flex-wrap">
                {Ex.Learned}
            </span>
        </div>


        </div>
        </div>
</div>

</>
  )
}
