import React, { useEffect, useState } from 'react'
import introVideo from "./photos/video3.mp4"
import "./pages styles css/reels.css"
import { BsBookmarkDash } from "react-icons/bs";
import resim2 from "./photos/resim1.jpg"
import { BsChat } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import resim1 from "../Components/ui/Sidebar/menuContent/resim1.jpg"
import { MdClose } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";

function Reels1({ classId }) {
    const [isClick, setİsClick] = useState(false)
    const [Click, setClick] = useState(false)
    const [count, setCount] = useState(9644)
    const [CommentClass, setCommentClass] = useState("commentboxvisible")
    const [HeartClass, setHeartClass] = useState("")
    const [PlayButtonClass, setPlayButtonClass] = useState("videoplaybutton")
    const [sendReelsButton, setSendReelsButton] = useState("threedotbuttonvisible")
    const [Click2, setClick2] = useState(false)

    const playvideo = () => {
        const videos = document.querySelector(`.${classId}`)
        if (videos.paused) {
            videos.play()
            setPlayButtonClass("playbuttonvisible")
        } else {
            videos.pause()
            setPlayButtonClass("videoplaybutton")
        }
        setClick(!Click)
    }

    const UpdateCountHeart = () => {
        if (!isClick) {
            setHeartClass("red")
            setCount(count + 1)
        } else {
            setCount(count - 1)
            setHeartClass("")
        }
        setİsClick(!isClick)
    }

    const UpdateCountMessage = () => {
        if (!isClick) {
            setCommentClass("commentbox")
            setSendReelsButton("threedotbuttonvisible")
        } else {
            setSendReelsButton("threedotbuttonvisible")
            setCommentClass("commentboxvisible")

        }
        setİsClick(!isClick)
    }

    const CloseCommnet = () => {
        if (isClick) {
            setCommentClass("commentboxvisible")
        }
    }

    const CloseSend = () => {
        if (!Click2) {
            setSendReelsButton("threedotbuttonvisible")
        }
    }

    const openReelsbutton = () => {
        if (!Click) {
            setSendReelsButton("threedotbutton")
            setCommentClass("commentboxvisible")
        } else {
            setSendReelsButton("threedotbuttonvisible")
            setCommentClass("commentboxvisible")
        }
        setClick(!Click)
    }


    return (
        <div className='videoboxs'>
            <div className='navbarreels'>
                <p>For you  <span> Following</span></p>
            </div>

            <div className='videobox'>

                <div className='videocontent'>
                    <div className='video-description'>
                        <video className={classId} src={introVideo} loop  ></video>
                        <div className='videocontents'>
                            <div className='cont'>  <img src={resim1} alt="" />
                                <p>berkay4yldrm - <button>Follow</button> <br /></p> <br />
                            </div>
                            <p className='videeodescription'> Natural Life and Crazy pure sound 🔥🔥🔥</p>

                        </div>
                        <button onClick={playvideo} className={PlayButtonClass}> <IoPlayCircleOutline className='playbuton' /></button>
                    </div>

                    <div className='buttons'>
                        <button className={HeartClass} onClick={UpdateCountHeart}><BsHeart className='heart' /> <p>{count}</p></button>
                        <button onClick={UpdateCountMessage}><BsChat className='comment' /><p>14</p></button>
                        <button onClick={openReelsbutton}><BsSend /><p>{count}</p></button>
                        <button><BsBookmarkDash /></button>
                        <button><BsThreeDots /></button>
                    </div>
                    <div className={sendReelsButton}>
                        <div className='content8'>
                            <button onClick={CloseSend}><MdClose /></button>
                            <p>Share</p>
                        </div>
                        <div className='content9'>

                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                            <div className='flexdireciton'>
                                <img src={resim1} alt="" />
                                <p>berkay4yldrm <br /> <span>berkay4yldrm</span> </p>
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className='bluebutton'>
                            <button className='blue-send-button'>Send</button>
                        </div>
                    </div>

                    <div className={CommentClass} >
                        <div className='comment-content1'>
                            <button onClick={CloseCommnet}><MdClose /></button>
                            <h3>Comments</h3>
                        </div>

                        <div className='comment-content2'>
                            <p className='for'>For you <MdOutlineKeyboardArrowDown className='arr' /> </p>
                            <div className='content7'>
                                <div className='contenter'>
                                    <img src={resim1} alt="" />
                                    <p> <span>berkay4yldrm <span>9h</span></span> <br />Lorem ipsum dolor  sit amet consectetur,  <br /> adipisicing elit. Aspernatur, cum. 😂
                                        <br />
                                        <div className='flex'>
                                            <p>850 likes</p> <p> Reply</p> <p>See translation</p>
                                        </div>
                                    </p>
                                </div>
                                <div className='contenter'>
                                    <img src={resim1} alt="" />
                                    <p> <span>berkay4yldrm <span>9h</span></span> <br />Lorem ipsum dolor  sit amet consectetur,  <br /> adipisicing elit. Aspernatur, cum. 😂
                                        <br />
                                        <div className='flex'>
                                            <p>850 likes</p> <p> Reply</p> <p>See translation</p>
                                        </div>
                                    </p>
                                </div>
                                <div className='contenter'>
                                    <img src={resim1} alt="" />
                                    <p> <span>berkay4yldrm <span>9h</span></span> <br />Lorem ipsum dolor  sit amet consectetur,  <br /> adipisicing elit. Aspernatur, cum. 😂
                                        <br />
                                        <div className='flex'>
                                            <p>850 likes</p> <p> Reply</p> <p>See translation</p>
                                        </div>
                                    </p>
                                </div>
                                <div className='contenter'>
                                    <img src={resim1} alt="" />
                                    <p> <span>berkay4yldrm <span>9h</span></span> <br />Lorem ipsum dolor  sit amet consectetur,  <br /> adipisicing elit. Aspernatur, cum. 😂
                                        <br />
                                        <div className='flex'>
                                            <p>850 likes</p> <p> Reply</p> <p>See translation</p>
                                        </div>
                                    </p>
                                </div>
                                <div className='contenter'>
                                    <img src={resim1} alt="" />
                                    <p> <span>berkay4yldrm <span>9h</span></span> <br />Lorem ipsum dolor  sit amet consectetur,  <br /> adipisicing elit. Aspernatur, cum. 😂
                                        <br />
                                        <div className='flex'>
                                            <p>850 likes</p> <p> Reply</p> <p>See translation</p>
                                        </div>
                                    </p>
                                </div>
                                <div className='contenter'>
                                    <img src={resim1} alt="" />
                                    <p> <span>berkay4yldrm <span>9h</span></span> <br />Lorem ipsum dolor  sit amet consectetur,  <br /> adipisicing elit. Aspernatur, cum. 😂
                                        <br />
                                        <div className='flex'>
                                            <p>850 likes</p> <p> Reply</p> <p>See translation</p>
                                        </div>
                                    </p>
                                </div>
                                <div className='contenter'>
                                    <img src={resim1} alt="" />
                                    <p> <span>berkay4yldrm <span>9h</span></span> <br />Lorem ipsum dolor  sit amet consectetur,  <br /> adipisicing elit. Aspernatur, cum. 😂
                                        <br />
                                        <div className='flex'>
                                            <p>850 likes</p> <p> Reply</p> <p>See translation</p>
                                        </div>
                                    </p>
                                </div>

                            </div>
                            <div className='img-input'>
                                <img className='inputimgg' src={resim1} alt="" />
                                <input type="text" placeholder='Add a comment...' />
                                <p className='smile'>😊</p>
                            </div>

                        </div>


                    </div>

                </div>



            </div>




        </div>
    )
}

export default Reels1


