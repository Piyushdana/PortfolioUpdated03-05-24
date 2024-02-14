import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip,faPaperPlane,faPenRuler , faArrowUpRightFromSquare,faUser} from '@fortawesome/free-solid-svg-icons' 
import { faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const [isHovered, setIsHovered] = useState(false);
    return (
       <div className="container">
            <div className='profile' data-aos="slide-down" data-aos-delay="" data-aos-duration="1000">
                    <span>👋</span>
                
                    <a href="" className='about' >
                            <div><FontAwesomeIcon icon={faUser}/></div>
                            <span className='abtText'>About <FontAwesomeIcon className='abtArrowIcon' icon={faArrowUpRightFromSquare} style={{fontSize:"12px"}}/> </span>
                    </a>
                    
              
            </div>

            <div className='Name' data-aos="slide-right" data-aos-delay="0.8000" data-aos-duration="2000">
                <h1>Hii Myself Piyush Dana <br /> ~Web Developer</h1>
            </div>

            <div className='socialButtons'>

                {/* Here We can add The teh text visibility on hover of button in both ways through css also
                and through using state also */}

 
                    
                <Link to="https://www.linkedin.com/in/piyushdana" target="_blank" className='buttons b1'>


                    <span className='btnText' 
                        // style={{ 
                        //     opacity: isHovered ? 1 : 0, 
                        //     // marginTop: '16px'
                        // }}
                    >
                     LinedIn <FontAwesomeIcon  icon={faArrowUpRightFromSquare}/>
                    </span>

                    <div className='icon'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                </Link>

                <Link to="" className='buttons b2' target="_blank">
                    <span className='btnText'>Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>  </span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPaperclip} />
                    </div>
                </Link>

                <Link to="/projects" className='buttons b3'  >
                    <span className='btnText'>Projects <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>   </span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPenRuler}  />
                    </div>
                </Link>

                <Link to="mailto:piyushdana11@gmail.com" className='buttons b4' target="_blank">
                    <span className='btnText'>Connect   <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>   </span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPaperPlane}  />
                    </div>
                </Link>

                <Link to="https://github.com/Piyushdana" className='buttons b5' target="_blank">
                    <span className='btnText'>Github   <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>   </span>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faGithub}  />
                    </div>
                </Link>
                     

                     

                     
            </div>
       </div>

        
    )
}

export default Home;