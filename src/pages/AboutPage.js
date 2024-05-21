import React from "react";
import ProfileImage from "../assets/Profile.jpeg";
import Profile2 from '../assets/Profile2try.jpeg'
import Test from "./testComponent";
import WavyBtn from "../components/wavyBtn";
import Footer from "../components/Footer";
function AboutPage() {
  return (
    <section className="bg-[#111111] text-[#ccc]  h-auto overflow-x-hidden">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 md:grid-rows-6 text-left  gap-2 p-2">
            {/* 1 */}
          <div className="border rounded-3xl border-[#ffffff33] px-5 py-8 bg-linear-gradient linear-gradient row-span-2 h-[29rem] flex flex-col justify-end gap-3">
            <div>
              <h1 className="-mt-36 sm:-mt-48 lg:-mt-48 xl:-mt-48 2xl:-mt-48 text-2xl sm:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">Hello World👋</h1>
            </div>
            <h1 className="font-light  sm:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem] 2xl:text-[2.5rem]  text-[2rem] leading-[1.1em]">About</h1>
            <p className="w-[17rem] sm:w-[28rem] lg:w-[28rem] xl:w-[28rem] 2xl:w-[28rem] leading-[1.5em] font-light tracking-normal text-[17px]">
              Hey there! Nice to meet you. I'm Piyush Dana, a web developer
              based in Ahmedabad, India 🇮🇳. with a passion for crafting
              user-friendly websites and applications. Building the Bridge
              Between Design and Development
            </p>
          </div>


          {/* 2 */}
          <div className=" grid grid-rows-2 overflow-hidden  border rounded-3xl border-[#ffffff33] row-span-4 h-[58rem] ">
               <div className="grid grid-rows-1 gap-5 px-5 py-8">
                  <h1 className="font-light text-[1.8rem] sm:text-[2.5rem] leading-[1.1em] mt-7">How It's Going so far</h1>
                  <p className="w-[18rem] mt-32 sm:w-[29rem] leading-[1.5em] font-light tracking-wide -translate-y-12 text-[17px]">I recently graduated with a Bachelor of Science in Information Technology (B.Sc. IT) from Amity University Jaipur,
                    Rajasthan, India. Throughout my education, I honed my skills in exploring new technologies and iterating on concepts I've gained valuable experience through two web development internships and numerous freelance projects.  
                    , where I help bring a client's vision to life.
                  </p>
                  <p className="-translate-y-8 w-[18rem] sm:w-[29rem] leading-[1.5em] font-light tracking-wide text-[17px]">I enjoy learning new tools, tech, and methods to make my development the best it can be.</p>
               </div>
                
                
                <div className=" rounded-br-3x sm:pl-9 ">
                    <img className="rounded-tl-3xl rounded-br-3xl translate-y-24 sm:translate-y-0 md:translate-y-0  lg:translate-y-0  xl:translate-y-0 2xl:translate-y-0"src={ProfileImage}alt="" />
                </div>
                
          </div>

          {/* 3 */}
          <div className="grid grid-rows-2 block overflow-hidden  border rounded-3xl border-[#ffffff33] row-span-4 h-[58rem] ">

              <div className="grid grid-rows-1 gap-5 px-5 py-8">
                  <h1 className="font-light text-[1.8rem] sm:text-[2.5rem] leading-[1.1em] -mt-3">Beyond The Code</h1>
                  <p className="w-[18rem]  sm:w-[29rem] leading-[1.5em] font-light tracking-wide -translate-y-24 text-[17px]">
                     When I'm not coding, you'll likely find me on the basketball 
                     court! As a national-level player and former captain of both my 
                     college and school teams, I bring a strong sense of teamwork and 
                     dedication to every project I undertake.
                  </p>
                  <p className="-translate-y-16 w-[18rem] sm:w-[29rem] leading-[1.5em] font-light tracking-wide text-[17px]">I enjoy learning new tools, tech, and methods to make my development the best it can be.</p>
               </div>
                
                
                <div className=" rounded-br-3x sm:pl-9 ">
                    <img className=" object-fill rounded-tl-3xl rounded-br-3xl translate-y-24 sm:translate-y-0 md:translate-y-0  lg:translate-y-0  xl:translate-y-0 2xl:translate-y-0"src={Profile2}alt="" />
                </div>



          </div>
         
          {/* 4 */}
          <div className=" text-black bg-my-gradient2 border justify-center flex flex-col p-3 rounded-3xl border-[#ffffff33] row-span-3 h-[28.5rem] ">
          <h1 className="font-light text-[2rem] sm:text-[2.5rem] leading-[1.1em] py-5">About</h1>
            <p className="w-[18rem] sm:w-[28rem] leading-[1.5em] font-light tracking-normal text-[17px]">
              Hey there! Nice to meet you. I'm Piyush Dana, a web developer
              based in Ahmedabad, India 🇮🇳. with a passion for crafting
              user-friendly websites and applications. Building the Bridge
              Between Design and Development
              
            </p>


            <WavyBtn/> 
             
          </div>

        </div>

       


      </div>

      <Footer/>

    </section>
  );
}

export default AboutPage;
