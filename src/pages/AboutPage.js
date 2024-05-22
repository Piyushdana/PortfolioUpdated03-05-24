import React, { useEffect, useState } from "react";
// import ProfileImage from "../assets/Profile.jpeg";
// import Profile2 from '../assets/Profile2try.jpeg'
// import Test from "./testComponent";
import WavyBtn from "../components/wavyBtn";
import Footer from "../components/Footer";
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

import Skills from "../components/Skills";
import Loading from "../components/Loading";
import Experience from "../components/Experience";
function AboutPage() {
  const [about, setAbout] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userCollectionRef2 = collection(db, 'About');
  const userCollectionRef3 = collection(db, 'Skills');
  const userCollectionRef4 = collection(db, 'Experience');

  useEffect(() => {
    const getAbout = async () => {
      try {
        const dataAbout = await getDocs(userCollectionRef2);
        const aboutData = dataAbout.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setAbout(aboutData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please check your internet connection.");
        setLoading(false);
      }
    };
    getAbout();
  });

  useEffect(() => {
    const getSkills = async () => {
      try {
        const dataSkills = await getDocs(userCollectionRef3);
        setSkills(dataSkills.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please check your internet connection.");
        setLoading(false);
      }
    };
    getSkills();
  });

  useEffect(()=>{
    const getExperience = async () => {
       try{
          const dataExperience =  await getDocs(userCollectionRef4);
          setExperience(dataExperience.docs.map((doc)=>({...doc.data(), id:doc.id})));
          setLoading(false)

       }catch (err) {
        setError("Failed to fetch data. Please check your internet connection.");
        setLoading(false);
      }
    };

    getExperience();
  })

  console.log(experience);

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <section className="bg-[#111111] text-[#ccc]  h-auto overflow-x-hidden">
      { loading ? <Loading/> : 
      <div>
        {/* About Details */}
         <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 md:grid-rows-6 text-left  gap-2 p-2">
            {/* 1 */}

          {about[0] &&(
           
          <div className="border rounded-3xl border-[#ffffff33] px-5 py-8 bg-linear-gradient linear-gradient row-span-2 h-[29rem] flex flex-col justify-end gap-3">
            <div>
              
              <h1 className="-mt-36 sm:-mt-48 lg:-mt-48 xl:-mt-48 2xl:-mt-48 text-2xl sm:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">{about[0].About1}👋</h1>
            </div>
            <h1 className="font-light  sm:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem] 2xl:text-[2.5rem]  text-[2rem] leading-[1.1em]">About</h1>
            <p className="w-[17rem] sm:w-[28rem] lg:w-[28rem] xl:w-[28rem] 2xl:w-[28rem] leading-[1.5em] font-light tracking-normal text-[17px]">
              {about[0].About1desc}
            </p>
          </div>
          )}

          {/* 2 */}
          {about[1] && (
            <div className=" grid grid-rows-2 overflow-hidden  border rounded-3xl border-[#ffffff33] row-span-4 h-[58rem] ">
                <div className="grid grid-rows-1 gap-5 px-5 py-8">
                    <h1 className="font-light text-[1.8rem] sm:text-[2.5rem] leading-[1.1em] mt-7">{about[1].About2}</h1>
                    <p className="w-[20rem] mt-28 sm:w-[29rem] leading-[1.5em] font-light tracking-wide -translate-y-12 text-[17px]"> {about[1].About2desc1}
                    </p>
                    <p className="-translate-y-8 w-[18rem] sm:w-[29rem] leading-[1.5em] font-light tracking-wide text-[17px]">{about[1].About2desc2}</p>
                </div>
                  
                  
                  <div className=" rounded-br-3x sm:pl-9 ">
                      <img className="rounded-tl-3xl rounded-br-3xl translate-y-24 sm:translate-y-0 md:translate-y-0  lg:translate-y-0  xl:translate-y-0 2xl:translate-y-0"src={about[1].About2img}alt="" />
                  </div>
                  
            </div>
          )}
          {/* 3 */}
          {about[2] &&(
          <div className="grid grid-rows-2  overflow-hidden  border rounded-3xl border-[#ffffff33] row-span-4 h-[58rem] ">

              <div className="grid grid-rows-1 gap-5 px-5 py-8">
                  <h1 className="font-light text-[1.8rem] sm:text-[2.5rem] leading-[1.1em] -mt-3">{about[2].About3}</h1>
                  <p className="w-[18rem]  sm:w-[29rem] leading-[1.5em] font-light tracking-wide -translate-y-24 text-[17px]">
                  {about[2].About3desc1}
                  </p>
                  <p className="-translate-y-16 w-[18rem] sm:w-[29rem] leading-[1.5em] font-light tracking-wide text-[17px]">{about[2].About3desc2}</p>
               </div>
                
                
                <div className=" rounded-br-3x sm:pl-9 ">
                    <img className=" object-fill rounded-tl-3xl rounded-br-3xl translate-y-24 sm:translate-y-0 md:translate-y-0  lg:translate-y-0  xl:translate-y-0 2xl:translate-y-0"src={about[2].About3img} alt="" />
                </div>



          </div>
          )}

          {/* 4 */}
          {about[3] && (
          <div className=" text-black bg-my-gradient2 border justify-center flex flex-col p-3 rounded-3xl border-[#ffffff33] row-span-3 h-[28.5rem] ">
          <h1 className="font-light text-[2rem] sm:text-[2.5rem] leading-[1.1em] py-5"> {about[3].About4}</h1>
            <p className="w-[18rem] sm:w-[28rem] leading-[1.5em] font-light tracking-normal text-[17px]">
               {about[3].About4desc}
              
            </p>


            <WavyBtn/> 
             
          </div>
          )}
        </div>

         </div>


          {/* Skills */}
        <div className="p-5 rounded-3xl border border-[#ffffff33] m-2">
            <h1 className="text-4xl pb-20">My Skills </h1>
            <marquee behavior="scroll" direction="left">
            <div className="flex  items-center space-x-5">
              {skills.map(skill => (
                <Skills key={skill.id} skills={skill} />
              ))}
            </div>
            </marquee>     
        </div>
          

        {/* Experience Section */}
        {experience.map(Ex=>(
          <Experience key={Ex.id} Ex={Ex}/> 
        ))}

       <Footer/>
      </div>}

    </section>
  );
}

export default AboutPage;
// https://vxxx.com/video-81255/