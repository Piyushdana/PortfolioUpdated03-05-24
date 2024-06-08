// import './Project.css'// import AllProjects from '../../src/data/AllProjects';
// import SearchBar from '../components/SearchBar';
// import LetsConnect from '../components/LetsConnect';

import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { db } from '../firebaseConfig';
import { collection, getDocs} from "firebase/firestore";
import GlowingHead from '../components/GlowingHead';

const Projects = () => {
  // Importing Projects from Firebase 
  const userCollectionRef  = collection(db,"project");

  const [projects,setProject] =  useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // using useeffect to fetch the projects from firebase
  useEffect(()=>{
    const getProject = async ()=>{
      try{
        const data =  await getDocs(userCollectionRef);
        console.log(data);
        setProject(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
      } catch (err) {
        setError("Failed to fetch data. Please check your internet connection.");
        setLoading(false);
      }
    };
    getProject();
  },[]);
  // console.log(projects);
  return (
    <>
      <section className=' flex text-white flex-col items-center pt-14 overflow-x-hidden overflow-y-auto bg-[#131418]'>
      {/* Head  */}
       <GlowingHead name = "Projects"/>

        {/* Projects displayed */}
        <div className=' grid space-x-4 items-center sm:grid-cols-2 sm:gap-7 md:grid-cols-3 2xl:grid-cols-5  xl:grid-cols-4  text-white'>
            {/* Mapped projects in projectCard*/}
            {projects.map((project)=>(
              <ProjectCard key={project.id}   project={project}/> 
            ))}
          <h3 className='py-5 md:py-0'> more to come in future...</h3>
        </div>
          
        <Footer/>
      </section>
  </>
  )
}

export default Projects
