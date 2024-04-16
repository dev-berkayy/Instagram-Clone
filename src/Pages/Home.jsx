import React from 'react'
import "./pages styles css/home.css"
import MySwiper from './Swiper'
import resim1 from "./photos/resim1.jpg"
import { LuSend } from "react-icons/lu";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { RiChat3Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";


import { HiOutlineDotsHorizontal } from "react-icons/hi";

function Home() {
  return (
    <div className='homecontainer'>

      <div className='homecontainercontent1'>
        <p>For you <span>Following</span></p>
        <div className='swipercontainer'>
          <MySwiper />
        </div>

        <div className='homeposts'>
          <div className='postleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <span> 45m</span></p>
            </div>
            <p><HiOutlineDotsHorizontal className='dotss' /></p>
         </div>
          
          <div className='postimage'> 
          <img src={resim1} alt="" />
          </div>
          <div className='postbuttons'>

          <div className="leftbuttons">
          <button > <FaRegHeart /></button>
          <button ><RiChat3Line /></button>
          <button  className='sendbutton'><LuSend /></button>
          
          </div>
            <button className='savebutton'><BsBookmark /></button>

          </div>
          <div className='homepostdescription'>
          <h3>liked by berkay4yldrm and others   </h3>
          <h3>📌 one of the best Luxury car</h3>
          <h4>RS7 ABT Luxury Edition 1 of the 250.  Time to conquer the earth.</h4>
          <button className='commentbutton'>View all 14 comments</button>
          </div>
          <div className='homeposts'>
          <div className='postleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <span> 45m</span></p>
            </div>
            <p><HiOutlineDotsHorizontal className='dotss' /></p>
         </div>
          
          <div className='postimage'> 
          <img src={resim1} alt="" />
          </div>
          <div className='postbuttons'>

          <div className="leftbuttons">
          <button > <FaRegHeart /></button>
          <button ><RiChat3Line /></button>
          <button  className='sendbutton'><LuSend /></button>
          
          </div>
            <button className='savebutton'><BsBookmark /></button>

          </div>
          <div className='homepostdescription'>
          <h3>liked by berkay4yldrm and others   </h3>
          <h3>📌 one of the best Luxury car</h3>
          <h4>RS7 ABT Luxury Edition 1 of the 250.  Time to conquer the earth.</h4>
          <button className='commentbutton'>View all 14 comments</button>
          </div>
          <div className='homeposts'>
          <div className='postleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <span> 45m</span></p>
            </div>
            <p><HiOutlineDotsHorizontal className='dotss' /></p>
         </div>
          
          <div className='postimage'> 
          <img src={resim1} alt="" />
          </div>
          <div className='postbuttons'>

          <div className="leftbuttons">
          <button > <FaRegHeart /></button>
          <button ><RiChat3Line /></button>
          <button  className='sendbutton'><LuSend /></button>
          
          </div>
            <button className='savebutton'><BsBookmark /></button>

          </div>
          <div className='homepostdescription'>
          <h3>liked by berkay4yldrm and others   </h3>
          <h3>📌 one of the best Luxury car</h3>
          <h4>RS7 ABT Luxury Edition 1 of the 250.  Time to conquer the earth.</h4>
          <button className='commentbutton'>View all 14 comments</button>
          </div>

       
        
      </div>

      <div className='homecontainercontent2'>
        <div className='myprofile'>
          <div>
          <img src={resim1} alt="" />
          <p>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></p>
          </div>
          <button>switch</button>
        </div>


        <div className='homecontainerusers'>
          <div style={{marginTop: "20px" ,cursor:"pointer"}}>
        <p>Suggested for you </p>
        <button style={{cursor:"pointer"}}>See All</button>
        </div>

            <div className='rightcontent'>

          <div className='rightcontentuserrs'>
            <div style={{display:"flex", gap:"12px"}}>
            <img src={resim1} alt="" />
              <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
             </div>
             <button style={{color:" #20a2f6", marginTop:"5px" ,cursor: "pointer"}}>Follow</button>
          </div>

          <div className='rightcontentuserrs'>
            <div style={{display:"flex", gap:"12px"}}>
            <img src={resim1} alt="" />
              <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
             </div>
             <button style={{color:" #20a2f6", marginTop:"5px" ,cursor: "pointer"}}>Follow</button>
          </div>

          <div className='rightcontentuserrs'>
            <div style={{display:"flex", gap:"12px"}}>
            <img src={resim1} alt="" />
              <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
             </div>
             <button style={{color:" #20a2f6", marginTop:"5px" ,cursor: "pointer" }}>Follow</button>
          </div>


          <div className='rightcontentuserrs'>
            <div style={{display:"flex", gap:"12px"}}>
            <img src={resim1} alt="" />
              <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
             </div>
    <button style={{color:" #20a2f6", marginTop:"5px" ,cursor: "pointer"}}>Follow</button>

          </div>
          <div className='rightcontentuserrs'>
            <div style={{display:"flex", gap:"12px"}}>
            <img src={resim1} alt="" />
              <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
             </div>
    <button style={{color:" #20a2f6", marginTop:"5px" ,cursor: "pointer"}}>Follow</button>

          </div>
   
            </div>

        </div>
      </div>

    </div>
  )
}

export default Home
