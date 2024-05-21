import React from 'react'
import './WavyBtnCss.css';
import { Link } from 'react-router-dom';
export default function wavyBtn() {

  const scrollToFooter = () => {
    // Scroll to the Footer Contact section
    const footerContact = document.getElementById("footer");
    footerContact.scrollIntoView({ behavior: "smooth" });

     
  }


  return (
    <>
   <Link to="" onClick={scrollToFooter} className="btn-53 w-fit translate-y-7 border border-[#ffffff33]   ">
  <div className="original font-light ">Get in touch</div>
  <div className="letters font-light ">
    
    <span>L</span>
    <span>e</span>
    <span>t</span>
    <span>s</span>
    <span>-</span>
    <span>S</span>
    <span>t</span>
    <span>a</span>
    <span>r</span>
    <span>t</span>
    
  </div>
</Link>


   </>
  )
}
