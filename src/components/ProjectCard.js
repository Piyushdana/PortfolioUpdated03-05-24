import React from 'react'
import { Link } from 'react-router-dom'




// Import project card and projects also  
export default function ProjectCard({project}) {
  return (   

    <>
         <div className='' >
             <div id={project.id} className=' text-start   shadow-lg shadow- hover:rotate-1 mx-auto my-10 rounded-3xl border p-5 bg-[#141515a4] w-64  text-black '>
                <img className='rounded-3xl shadow-lg w-60' src={project.image} alt={project.title} />
                <div id='text' className=' text-[#807e81e0] mx-2 my-4 '>
                    <h3 className=' px-2 bg-[#00000041] text-white rounded-lg p-1  text-sm '>{project.title}</h3> 
                    <p className='my-3  text-sm  px-1 leading-4'>{project.description}</p>
                </div>
                <Link className='bg-black mx-2 text-white text-sm px-6 py-1 rounded-lg ' to={project.link}>Open</Link>
             </div>              
         </div>
    </>
    
  ) 
}
