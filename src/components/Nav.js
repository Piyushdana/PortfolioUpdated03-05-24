import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons' 
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div className=' -mt-2 profile' data-aos="slide-down" data-aos-delay="" data-aos-duration="1000">
                    <span>👋</span>     
                    <Link to="/about" className='about' >
                            <div><FontAwesomeIcon icon={faUser}/></div>
                            <span className='abtText'>About <FontAwesomeIcon className='abtArrowIcon' icon={faArrowUpRightFromSquare} style={{fontSize:"12px"}}/> </span>
                    </Link>
            </div>
  )
}
