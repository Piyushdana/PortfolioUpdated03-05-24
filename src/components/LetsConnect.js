import "./LetsConnect.css";
import emoji1 from "../assets/emoji1.png";
import emoji2 from "../assets/emoji2.png";
import { useState } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
export default function LetsConnect() {
  const [isHovered, setIsHovered] = useState();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>

      <img  className={`${isHovered ? "w-52" : "w-36" } emoji -mb-[5rem]`}  onClick={handleHover}  src={isHovered ? emoji2 : emoji1} onMouseEnter={handleHover} onMouseLeave={handleLeave} alt="emoji"  />

      <div className="card mb-[5rem]">
        <Link to="https://www.instagram.com/piyush___dana__30" className="social-link1">         
            <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to="piyushdana11@gmail.com" className="social-link2">
        <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link to="https://www.linkedin.com/in/piyushdana" className="social-link3">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>

        <Link to="https://wa.me/+916359271563" className="social-link4">
        <FontAwesomeIcon icon={faWhatsapp} />
             
        </Link>
        
      </div>

      
    </>

    // <>
    //     <div className=" flex flex-col space-y-14 w-40 items-center justify-between xl:mt-3    ">
    //         <div className="ConnectBtnMain">
    //             <button className="mainBtn w-80">
    //             <img  className={`${isHovered ? "w-52" : "w-36" } emoji`}  onClick={handleHover}  src={isHovered ? emoji2 : emoji1} onMouseEnter={handleHover} onMouseLeave={handleLeave}  />
    //             {/* <img  className="w-40"  src={emoji1} onMouseEnter={handleHover} onMouseLeave={handleLeave}  /> */}

    //             {/* <svg  fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //                     <path d="M15.75 5.125a3.125 3.125 0 1 1 .754 2.035l-8.397 3.9a3.124 3.124 0 0 1 0 1.88l8.397 3.9a3.125 3.125 0 1 1-.61 1.095l-8.397-3.9a3.125 3.125 0 1 1 0-4.07l8.397-3.9a3.125 3.125 0 0 1-.144-.94Z"></path>
    //                 </svg> */}
    //             </button>

    //             <button className="twitter-button button transition duration-100 ease-in-out transform bg-blue-500 hover:bg-blue-700 ">
    //             <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 height="30"
    //                 width="30"
    //             >
    //                 <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
    //             </svg>
    //             </button>

    //             <button className="reddit-button button transition duration-200 ease-in-out transform bg-orange-500 hover:bg-orange-700">
    //             <svg
    //                 width="30"
    //                 height="30"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //             >
    //                 <path d="M9.708 12a1.039 1.039 0 0 0-1.037 1.037c0 .574.465 1.05 1.037 1.04a1.04 1.04 0 0 0 0-2.077Zm2.304 4.559c.394 0 1.754-.048 2.47-.764a.29.29 0 0 0 0-.383.266.266 0 0 0-.382 0c-.442.454-1.408.61-2.088.61-.681 0-1.635-.156-2.089-.61a.266.266 0 0 0-.382 0 .266.266 0 0 0 0 .383c.705.704 2.065.763 2.471.763Zm1.24-3.509a1.04 1.04 0 0 0 1.039 1.037c.572 0 1.037-.476 1.037-1.037a1.039 1.039 0 0 0-2.075 0Z"></path>
    //                 <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.785-1.456c-.394 0-.753.155-1.015.406-1.001-.716-2.375-1.181-3.901-1.241l.667-3.127 2.173.466a1.038 1.038 0 1 0 1.037-1.087 1.037 1.037 0 0 0-.93.585l-2.422-.512a.254.254 0 0 0-.264.106.232.232 0 0 0-.035.096l-.74 3.485c-1.55.048-2.947.513-3.963 1.24a1.466 1.466 0 0 0-1.927-.082 1.454 1.454 0 0 0 .318 2.457 2.542 2.542 0 0 0-.037.441c0 2.244 2.614 4.07 5.836 4.07 3.222 0 5.835-1.813 5.835-4.07a2.73 2.73 0 0 0-.036-.44c.502-.227.86-.74.86-1.337 0-.813-.656-1.456-1.456-1.456Z"></path>
    //             </svg>
    //             </button>

    //             <button className="messenger-button button transition duration-300 ease-in-out transform bg-blue-800 hover:bg-blue-900 ">
    //             <svg
    //                 width="30"
    //                 height="30"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //             >
    //                 <path d="M2 11.7C2 6.126 6.366 2 12 2s10 4.126 10 9.7c0 5.574-4.366 9.7-10 9.7-1.012 0-1.982-.134-2.895-.384a.799.799 0 0 0-.534.038l-1.985.877a.8.8 0 0 1-1.122-.707l-.055-1.779a.799.799 0 0 0-.269-.57C3.195 17.135 2 14.615 2 11.7Zm6.932-1.824-2.937 4.66c-.281.448.268.952.689.633l3.156-2.395a.6.6 0 0 1 .723-.003l2.336 1.753a1.501 1.501 0 0 0 2.169-.4l2.937-4.66c.283-.448-.267-.952-.689-.633l-3.156 2.395a.6.6 0 0 1-.723.003l-2.336-1.754a1.5 1.5 0 0 0-2.169.4v.001Z"></path>
    //             </svg>
    //             </button>

    //             <button className="pinterest-button button transition duration-400 ease-in-out transform bg-red-500 hover:bg-red-700 ">
    //             <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 height="30"
    //                 width="30"
    //             >
    //                 <path d="M12.48 2.4a9.6 9.6 0 0 0-3.498 18.543c-.084-.76-.16-1.927.033-2.757.175-.75 1.125-4.772 1.125-4.772s-.287-.575-.287-1.424c0-1.336.774-2.332 1.738-2.332.818 0 1.214.614 1.214 1.352 0 .824-.524 2.055-.795 3.196-.226.955.48 1.735 1.422 1.735 1.706 0 3.018-1.8 3.018-4.397 0-2.298-1.653-3.904-4.01-3.904-2.732 0-4.335 2.048-4.335 4.165 0 .825.318 1.71.714 2.191a.288.288 0 0 1 .067.276c-.073.302-.235.955-.266 1.088-.042.176-.14.213-.322.129-1.2-.558-1.949-2.311-1.949-3.72 0-3.028 2.201-5.808 6.344-5.808 3.33 0 5.918 2.372 5.918 5.544 0 3.308-2.087 5.971-4.981 5.971-.974 0-1.888-.505-2.201-1.103l-.598 2.283c-.217.834-.803 1.879-1.194 2.516A9.6 9.6 0 1 0 12.48 2.4Z"></path>
    //             </svg>
    //             </button>

    //             <button className="whatsapp-button button transition duration-700 ease-in-out transform bg-green-500 hover:bg-green-700 ">
    //            <a href="/piyush">
    //             <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     height="30"
    //                     width="30"
    //                 >
    //                     <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"></path>
    //                 </svg>
    //             </a>
    //             </button>

    //         </div>
    //     <div className='text-white   ml-2 tracking-wide '>
    //        <h3 id="connectText " className="text-lg -mt-20" >Get in touch! <span className="text-sm">By Clicking me😉</span></h3>
    //     </div>
    //     </div>
    // </>
  );
}
