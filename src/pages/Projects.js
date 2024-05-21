import React, { useEffect, useState } from 'react'
import './Project.css'
import ProjectCard from '../components/ProjectCard'
import AllProjects from '../../src/data/AllProjects';
import SearchBar from '../components/SearchBar';
import LetsConnect from '../components/LetsConnect';
import Footer from '../components/Footer'
import { db } from '../firebaseConfig';
import { collection, getDocs} from "firebase/firestore";

 



const Projects = () => {
  const userCollectionRef  = collection(db,"project");
  const [projects,setProject] =  useState([]);

  useEffect(()=>{

    const getProject = async ()=>{
        const data =  await getDocs(userCollectionRef);
        console.log(data);
        setProject(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }

    getProject();
  },[]);

  console.log(projects);

  return (

    <>

      <section className=' flex text-white flex-col items-center pt-14 overflow-x-hidden overflow-y-auto bg-[#131418]'>
      {/* <SearchBar/> */}

      <div className='backdrop-blur-lg border rounded-2xl px-5 py-2 flex flex-col items-center' >
      <div className='nav-glow -mt-[9.5px] bg-[#f2f2f2]  rounded-md w-[30px] h-[3px] shadow-shadow'></div>
      <h3 className='text-3xl '>Projects</h3>
      </div>
       
        <div className=' grid  space-x-4 items-center sm:grid-cols-2 sm:gap-7 md:grid-cols-3 2xl:grid-cols-5  xl:grid-cols-4  text-white'>
            
            {/* Mapped projects in projectCard*/}
            {projects.map((project)=>(
              <ProjectCard key={project.id}   project={project}/>
              
            ))}

        <h3> more to come in future...</h3>
        </div>
          
        <Footer/>
      </section>
  </>
  )
}

export default Projects
