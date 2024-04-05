import React from 'react'
import "./menu.css"
import resim1 from "../menuContent/resim1.jpg"
import { IoMdClose } from "react-icons/io";

function SearchContent() {
    return (
        <div className='section'>
            <div className='content1'>
                <h1 className='title'>Search</h1>
                <div className='inputbox'>
                    <input type="text" placeholder='Search' />
                    <button className='x'>X</button>
                </div>

            </div>
            <div className='content2'>
                <div className='titles'>
                    <p className='recent-title'>Recent</p>
                    <button className='clearbutton'>Clear all</button>
                </div>
                <div className='user'>
                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>



                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>
                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>
                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>
                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>

                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>
                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>
                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>

                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>
                    <div className='userdetail'>
                        <img className='resim' src={resim1} />
                        <p className='username'>berkay4yldrm <br /> <span>Berkay Yıldırım - following</span> </p>
                        <button className='user-remove'><IoMdClose /></button>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default SearchContent