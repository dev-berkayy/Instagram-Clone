import React from 'react'
import resim1 from "./photos/resim1.jpg"
import { SlInfo } from "react-icons/sl";
import { FiMic } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import "./pages styles css/messages.css"
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
function Messages() {
   return (
      <div className='nav'>

         <div className='navbar'>

            <div className='contentnavleft'>
               <img src={resim1} alt="" />
               <p>berkay4yldrm <br />  <span>Active 4h Ago</span></p>
            </div>

            <div className='contentnavright'>
               <IoCallOutline />
               <HiOutlineVideoCamera />
               <SlInfo />
            </div>
         </div>


         <div className='chatboxs'>
            <div className='chatbox2'>
               <img src={resim1} alt="" />
               <p> 👩‍💻 Hello! Today we're going to talk about coding. Do you enjoy coding?</p>
            </div>
            <div className='chatbox'>
               <img src={resim1} alt="" />
               <p> 🙆  Hi! Yes, I find coding really fun. Which programming language do you usually use?</p>
            </div>
            <div className='chatbox'>
               <img src={resim1} alt="" />
               <p> ✅ I love Python too! <br /> Especially working on data analysis and AI projects.. !</p>
            </div>
            <div className='chatbox2'>
               <img src={resim1} alt="" />
               <p> 🤖 That's great! I work on data analysis as well. <br /> I often use libraries like Pandas and NumPy..</p>
            </div>
            <div className='chatbox2'>
               <img src={resim1} alt="" />
               <p> ✅ I think image recognition systems are really exciting. <br /> Deep learning algorithms can achieve impressive results.</p>
            </div>
            <div className='chatbox'>
               <img src={resim1} alt="" />
               <p> 🙆Absolutely! What do you think is one of the most exciting AI applications?.</p>
            </div>
            <div className='chatbox2'>
               <img src={resim1} alt="" />
               <p> 🤖 I think image recognition systems are really exciting. <br /> Deep learning algorithms can achieve impressive results.</p>
            </div>
            <div className='chatbox'>
               <img src={resim1} alt="" />
               <p>  👩‍💻 Yes, the advancements   in deep learning are truly remarkable. <br /> It's exciting to think about what AI will bring in the future, isn't it?.</p>
            </div>
            <div className='chatbox2'>
               <img src={resim1} alt="" />
               <p> 🙆 Definitely! I believe AI technologies will become even more widespread in the future and significantly change our lives..</p>
            </div>
         </div>
         <div className='inputbox3'>
            <input type="text" placeholder='😊 Message...' />
            <p className='inputboxemoji'><FiMic /> <AiOutlinePicture /> <LuHeart /></p>
         </div>

      </div>
   )
}

export default Messages