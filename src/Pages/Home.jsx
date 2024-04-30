import React, { useEffect, useState } from 'react'
import "./pages styles css/home.css"
import MySwiper from './Swiper'
import resim1 from "./photos/resim1.jpg"
import { LuSend } from "react-icons/lu";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { RiChat3Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";



function Home() {

  const [count, setCount] = useState(5699)
  const [isClick, setİsClick] = useState(false)
  const [postSendBox, setOpenSendBox] = useState("sendopenboxsvisible")
  const [PostCommentBox, setPostCommentBox] = useState("postcommentboxsvisible")

  const opencommentbox = () => {
    if (!isClick) {
      setPostCommentBox("postcommentboxs")
    } else {
      setPostCommentBox("postcommentboxsvisible")
    }

    setİsClick(!isClick)
  }

  const closecommentbox = () => {
    if (isClick) {
      setPostCommentBox("postcommentboxsvisible")
      setOpenSendBox("sendopenboxsvisible")
    }
  }

  useEffect(() => {
    if (PostCommentBox === "postcommentboxs") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [PostCommentBox])


  const counter = () => {
    if (!isClick) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }

    setİsClick(!isClick)
  }

  const opensendbox = () => {
    if (!isClick) {
      setOpenSendBox("sendopenboxs")
    } else {
      setOpenSendBox("sendopenboxsvisible")
    }

    setİsClick(!isClick)
  }

  useEffect(() => {
    if (postSendBox === "sendopenboxs") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

  }, [postSendBox])


  return (
    <div className='homecontainer'>

      <div className={postSendBox}>
        <div className='sendcontainer'>

          <div className='content13'><p>Share</p> <button onClick={closecommentbox}><MdClose /></button></div>
          <div className='content14'>
            <input type="text" placeholder='To:  Search' />
            <div className='sendusers'>
              <div>
              <div className='sendusersleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <br /> <span style={{ fontSize: "13px", color: "gray" }}>berkay4yldrm</span></p>
              </div>

              <div>
                <input type="checkbox" />
              </div>
              
              
            </div>
            <div>
              <div className='sendusersleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <br /> <span style={{ fontSize: "13px", color: "gray" }}>berkay4yldrm</span></p>
              </div>

              <div>
                <input type="checkbox" />
              </div>
              
              
            </div>
            <div>
              <div className='sendusersleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <br /> <span style={{ fontSize: "13px", color: "gray" }}>berkay4yldrm</span></p>
              </div>

              <div>
                <input type="checkbox" />
              </div>
              
              
            </div>
            <div>
              <div className='sendusersleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <br /> <span style={{ fontSize: "13px", color: "gray" }}>berkay4yldrm</span></p>
              </div>

              <div>
                <input type="checkbox" />
              </div>
              
              
            </div>
            <div>
              <div className='sendusersleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <br /> <span style={{ fontSize: "13px", color: "gray" }}>berkay4yldrm</span></p>
              </div>

              <div>
                <input type="checkbox" />
              </div>
              
              
            </div>
            <div>
              <div className='sendusersleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <br /> <span style={{ fontSize: "13px", color: "gray" }}>berkay4yldrm</span></p>
              </div>

              <div>
                <input type="checkbox" />
              </div>
              
              
            </div>
            <div>
              <div className='sendusersleftcontent'>
                <img src={resim1} alt="" />
                <p>berkay4yldrm <br /> <span style={{ fontSize: "13px", color: "gray" }}>berkay4yldrm</span></p>
              </div>

              <div>
                <input type="checkbox" />
              </div>
              
              
            </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className='homecontainercontent1'>
        <p>For you <span>Following</span></p>
        <div className='swipercontainer'>
          <MySwiper />
        </div>

        <div className={PostCommentBox} >
          <button className='commentboxclosebutton' onClick={closecommentbox}><IoClose /></button>


          <div className='maincomment'>

            <div className='content10'><img src={resim1} alt="" /></div>

            <div className='content11'>

              <div className='contenter1'>
                <div className='commentboxtop'>
                  <img src={resim1} alt="" /> <p>berkay4yldrm</p>
                </div>

                <div><HiOutlineDotsHorizontal style={{ fontSize: "22px", marginTop: "10px", cursor: "pointer" }} /></div>
              </div>

              <div className='contenter2'>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>
                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>


                <div className='comment'>
                  <div className='commentprofile'>
                    <img src={resim1} alt="" /> <p>berkay4yldrm <span style={{ fontSize: "14px", fontWeight: "400", color: "black" }}>Audi Sports</span></p>
                    <div style={{ position: "absolute", display: "flex", gap: "20px", marginTop: "20px" }}>
                      <p>8m</p>
                      <p>1 like</p>
                      <p>Reply</p>

                    </div>
                  </div>
                  <p><FaRegHeart style={{ fontSize: "14px", marginTop: "10px", cursor: "pointer" }} /></p>
                </div>


              </div>

            </div>


          </div>


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
            <button onClick={counter}> <FaRegHeart /> <p style={{ position: "absolute", marginTop: "-1px", fontSize: "14px" }}>{count} likes</p></button>
            <button onClick={opencommentbox}><RiChat3Line /></button>
            <button onClick={opensendbox} className='sendbutton'><LuSend /></button>

          </div>
          <button className='savebutton'><BsBookmark /></button>

        </div>
        <div className='homepostdescription'>
          <h3>liked by berkay4yldrm and others   </h3>
          <h3>📌 one of the best Luxury car</h3>
          <h4>RS7 ABT Luxury Edition 1 of the 250.  Time to conquer the earth.</h4>
          <button onClick={opencommentbox} className='commentbutton'>View all 14 comments</button>
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
  <button onClick={counter}> <FaRegHeart /> <p style={{ position: "absolute", marginTop: "-1px", fontSize: "14px" }}>{count} likes</p></button>
  <button onClick={opencommentbox}><RiChat3Line /></button>
  <button onClick={opensendbox} className='sendbutton'><LuSend /></button>

</div>
<button className='savebutton'><BsBookmark /></button>

</div>
<div className='homepostdescription'>
<h3>liked by berkay4yldrm and others   </h3>
<h3>📌 one of the best Luxury car</h3>
<h4>RS7 ABT Luxury Edition 1 of the 250.  Time to conquer the earth.</h4>
<button onClick={opencommentbox} className='commentbutton'>View all 14 comments</button>
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
  <button onClick={counter}> <FaRegHeart /> <p style={{ position: "absolute", marginTop: "-1px", fontSize: "14px" }}>{count} likes</p></button>
  <button onClick={opencommentbox}><RiChat3Line /></button>
  <button onClick={opensendbox} className='sendbutton'><LuSend /></button>

</div>
<button className='savebutton'><BsBookmark /></button>

</div>
<div className='homepostdescription'>
<h3>liked by berkay4yldrm and others   </h3>
<h3>📌 one of the best Luxury car</h3>
<h4>RS7 ABT Luxury Edition 1 of the 250.  Time to conquer the earth.</h4>
<button onClick={opencommentbox} className='commentbutton'>View all 14 comments</button>
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
  <button onClick={counter}> <FaRegHeart /> <p style={{ position: "absolute", marginTop: "-1px", fontSize: "14px" }}>{count} likes</p></button>
  <button onClick={opencommentbox}><RiChat3Line /></button>
  <button onClick={opensendbox} className='sendbutton'><LuSend /></button>

</div>
<button className='savebutton'><BsBookmark /></button>

</div>
<div className='homepostdescription'>
<h3>liked by berkay4yldrm and others   </h3>
<h3>📌 one of the best Luxury car</h3>
<h4>RS7 ABT Luxury Edition 1 of the 250.  Time to conquer the earth.</h4>
<button onClick={opencommentbox} className='commentbutton'>View all 14 comments</button>
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
          <div style={{ marginTop: "20px", cursor: "pointer" }}>
            <p>Suggested for you </p>
            <button style={{ cursor: "pointer" }}>See All</button>
          </div>

          <div className='rightcontent'>

            <div className='rightcontentuserrs'>
              <div style={{ display: "flex", gap: "12px" }}>
                <img src={resim1} alt="" />
                <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
              </div>
              <button style={{ color: " #20a2f6", marginTop: "5px", cursor: "pointer" }}>Follow</button>
            </div>

            <div className='rightcontentuserrs'>
              <div style={{ display: "flex", gap: "12px" }}>
                <img src={resim1} alt="" />
                <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
              </div>
              <button style={{ color: " #20a2f6", marginTop: "5px", cursor: "pointer" }}>Follow</button>
            </div>

            <div className='rightcontentuserrs'>
              <div style={{ display: "flex", gap: "12px" }}>
                <img src={resim1} alt="" />
                <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
              </div>
              <button style={{ color: " #20a2f6", marginTop: "5px", cursor: "pointer" }}>Follow</button>
            </div>


            <div className='rightcontentuserrs'>
              <div style={{ display: "flex", gap: "12px" }}>
                <img src={resim1} alt="" />
                <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
              </div>
              <button style={{ color: " #20a2f6", marginTop: "5px", cursor: "pointer" }}>Follow</button>

            </div>
            <div className='rightcontentuserrs'>
              <div style={{ display: "flex", gap: "12px" }}>
                <img src={resim1} alt="" />
                <h5>berkay4yldrm  <br /> <span>Berkay Yıldırım</span></h5>
              </div>
              <button style={{ color: " #20a2f6", marginTop: "5px", cursor: "pointer" }}>Follow</button>

            </div>

          </div>


        </div>
      </div>

    </div>
  )
}

export default Home