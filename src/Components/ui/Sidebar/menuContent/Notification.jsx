import React from 'react'
import "./notification.css"
import resim1 from "../menuContent/resim1.jpg"
import { GrNext } from "react-icons/gr";

function Notification() {
    return (
        <div className='notification-box'>

            <div className='content3'>
                <div className='notification-titles'>
                    <p className='notification-title' >Notifications</p>
                    <p className='filterbutton'> Filter</p>
                </div>
                <div className='request'>
                    <div className='request-content'>
                        <img src={resim1} alt="" />
                        <p>Follow requests <br /> <span style={{ color: " gray " }}> berkay4yldrm + others</span> </p>
                    </div>
                    <button>  <GrNext /> </button>
                </div>

            </div>
            <div className='content4'>
                <p className='this-week-title'>This week</p>

                <div className='content4-notification-box'>
                    <img className='left-img' src={resim1} alt="" />
                    <p className='description'>berkay4yldrm + berkay4yldrm and 3 others liked your comment: JavaScript React Context Api</p>
                    <img className='square' src={resim1} alt="" />
                </div>
                <div className='content4-notification-box'>
                    <img className='left-img' src={resim1} alt="" />
                    <p className='description'>berkay4yldrm + berkay4yldrm and 3 others liked your comment: JavaScript React Context Api</p>
                    <img className='square' src={resim1} alt="" />
                </div>
                <div className='content4-notification-box'>
                    <img className='left-img' src={resim1} alt="" />
                    <p className='description'>berkay4yldrm + berkay4yldrm and 3 others liked your comment: JavaScript React Context Api</p>
                    <img className='square' src={resim1} alt="" />
                </div>
                <div className='content4-notification-box'>
                    <img className='left-img' src={resim1} alt="" />
                    <p className='description'>berkay4yldrm  started <br /> following you. <span style={{ fontSize: "13px" }}> 2d</span> </p>
                    <button className='following-button'>Following</button>
                </div>

                <div className='content4-notification-box'>
                    <img className='left-img' src={resim1} alt="" />
                    <p className='description'>berkay4yldrm  started <br /> following you. <span style={{ fontSize: "13px" }}> 2d</span> </p>
                    <button className='following-button'>Following</button>
                </div>
                <div className='content4-notification-box'>
                    <img className='left-img' src={resim1} alt="" />
                    <p className='description'>berkay4yldrm + berkay4yldrm and 3 others liked your comment: JavaScript React Context Api</p>
                    <img className='square' src={resim1} alt="" />
                </div>
            </div>


            <div className='content4-notification-box'>
                <img className='left-img' src={resim1} alt="" />
                <p className='description'>berkay4yldrm  started <br /> following you. <span style={{ fontSize: "13px" }}> 2d</span> </p>
                <button className='following-button'>Following</button>
            </div>
            <div className='content4-notification-box'>
                <img className='left-img' src={resim1} alt="" />
                <p className='description'>berkay4yldrm + berkay4yldrm and 3 others liked your comment: JavaScript React Context Api</p>
                <img className='square' src={resim1} alt="" />
            </div>
            <div className='content4-notification-box'>
                <img className='left-img' src={resim1} alt="" />
                <p className='description'>berkay4yldrm + berkay4yldrm and 3 others liked your comment: JavaScript React Context Api</p>
                <img className='square' src={resim1} alt="" />
            </div>
            <div className='content4-notification-box'>
                <img className='left-img' src={resim1} alt="" />
                <p className='description'>berkay4yldrm  started <br /> following you. <span style={{ fontSize: "13px" }}> 2d</span> </p>
                <button className='following-button'>Following</button>
            </div>
            <div className='content4-notification-box'>
                <img className='left-img' src={resim1} alt="" />
                <p className='description'>berkay4yldrm  started <br /> following you. <span style={{ fontSize: "13px" }}> 2d</span> </p>
                <button className='following-button'>Following</button>
            </div>
            <div className='content4-notification-box'>
                <img className='left-img' src={resim1} alt="" />
                <p className='description'>berkay4yldrm + berkay4yldrm and 3 others liked your comment: JavaScript React Context Api</p>
                <img className='square' src={resim1} alt="" />
            </div>
        </div>
    )
}

export default Notification