import React from 'react'
import './Project.css'
import ProjectCard from '../components/ProjectCard'
import AllProjects from '../../src/data/AllProjects';
import SearchBar from '../components/SearchBar';
import LetsConnect from '../components/LetsConnect';






const Projects = () => {
  return (

    <>

      <section className=' flex flex-col items-center pt-32 overflow-x-hidden overflow-y-auto bg-[#131418]'>
      <SearchBar/>
        <div className=' grid  space-x-4  sm:grid-cols-2 sm:gap-7 md:grid-cols-3 2xl:grid-cols-5  xl:grid-cols-4  text-white'>
            {/* Mapped projects in projectCard*/}
            {AllProjects.map((project)=>(
              <ProjectCard key={project.id}   project={project}/>
            ))}
        </div>
      
        <LetsConnect />
      </section>
  </>
  )
}

export default Projects
