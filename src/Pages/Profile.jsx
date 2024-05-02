import React from 'react'
import "./pages styles css/Profile.css"

import resim4 from "../Components/ui/Sidebar/menuContent/resim1.jpg"
import { FiSettings } from "react-icons/fi";
import { TiThSmallOutline } from "react-icons/ti"
import { MdOutlinePhoto } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

function Home() {



   return (
      <div className='profilecontainer'>

         <div className='profile'>
            <img src={resim4} alt="" />
            <div className="buttonscontainer">
               <div className="firstbuttons">
                  <p>berkay4yldrm</p>
                  <button>Edit Profile</button>
                  <button>View Archive</button>
                  <p><FiSettings className='setting' /></p>
               </div>
               <div className="secondbuttons">
                  <p>2 posts</p>
                  <p> 470 Followers</p>
                  <p> 356 Following</p>
               </div>

               <div className='profile-descriptions'>
                  <p>Berkay yıldırım</p>
                  <p>Software Front-End</p>
                  <p> Web Site here  👉👉  <a href="https://berkayy.dev/">berkayy.dev</a></p>

               </div>

            </div>
         </div>

         <div className="highlights">
            <div>
               <img src={resim4} alt="" />
               <p>BY</p>
            </div>
            <div>
               <img src={resim4} alt="" />
               <p>BY</p>
            </div>
            <div>
               <img src={resim4} alt="" />
               <p>BY</p>
            </div>
         </div>


         <div className='portfolio-photos'>
            <div className="photosbuttons">
               <button> <TiThSmallOutline /> Posts</button>
               <button> <MdOutlinePhoto /> Saved</button>
               <button> <FaRegUser />  Tagged</button>
            </div>

            <div className='photosbox'>
               <img className='animate__backInDown' src={resim4} alt="" />
               <img src={resim4} alt="" />
            </div>
         </div>



      </div>

   )
}

export default Home