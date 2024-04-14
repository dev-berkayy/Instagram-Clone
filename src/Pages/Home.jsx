import React from 'react'
import "./pages styles css/home.css"
import MySwiper from './Swiper'

function Home() {
  return (
    <div className='homecontainer'>

      <div className='homecontainercontent1'>
        <p>For you <span>Following</span></p>
        <div className='swipercontainer'>
          <MySwiper />
        </div>

        <div className='homeposts'>

        </div>

      </div>

      <div className='homecontainercontent2'>
        <div className='homecontainerusers'></div>
      </div>

    </div>
  )
}

export default Home