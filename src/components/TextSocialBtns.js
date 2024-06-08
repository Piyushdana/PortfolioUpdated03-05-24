import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip,faPaperPlane,faPenRuler , faArrowUpRightFromSquare,faUser} from '@fortawesome/free-solid-svg-icons' 
import { faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
export default function TextSocialBtns() {
  return (
    <div className='-mt-20 flex flex-col  md:gap-[13rem] gap-[13rem]'>    
            <div className='Name' data-aos="slide-right" data-aos-delay="0.8000" data-aos-duration="2000">
                <h1>Hii Myself Piyush Dana <br/> ~Web Developer</h1>
            </div>

            <div className='socialButtons'>
  
                {/* Here We can add The teh text visibility on hover of button in both ways through css also
                and through using state also */}
                <Link to="https://www.linkedin.com/in/piyushdana"  rel="noopener noreferrer" className='buttons b1'>
                    <span className='btnText'>LinedIn <FontAwesomeIcon  icon={faArrowUpRightFromSquare}/></span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>

                </Link>

                {/* https://acrobat.adobe.com/id/urn:aaid:sc:AP:3dbb3358-9d4b-4f1f-ad5c-f05c0028fb1d */}
                <Link to="./PiyushCV.pdf" className='buttons b2'  rel="noopener noreferrer"  target="_blank">
                    <span className='btnText'>Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>  </span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPaperclip} />
                    </div>
                </Link>

                <Link to="/projects" className='buttons b3'     >
                    <span className='btnText'>Projects <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>   </span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPenRuler}  />
                    </div>
                </Link>
 
                <Link to="mailto:piyushdana11@gmail.com"    className='buttons b4' >
                    <span className='btnText'>Connect   <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>   </span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPaperPlane}  />
                    </div>
                </Link>

                <Link to="https://github.com/Piyushdana"   className='buttons b5' >
                    <span className='btnText'>Github   <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>   </span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faGithub}  />
                    </div>
                </Link>
        
            </div> 
         </div>
  )
}
