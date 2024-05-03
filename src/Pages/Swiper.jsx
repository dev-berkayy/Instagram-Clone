import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import resim1 from "./photos/resim1.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./pages styles css/swiper.css"

export default function MySwiper() {
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(10);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        Array.from({ length: 15 }).map((_, index) => `Slide ${index + 1}`)
    );

    const prepend = () => {
        setSlides([
            `Slide ${prependNumber.current - 2}`,
            `Slide ${prependNumber.current - 1}`,
            ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    return (
        <>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={8}

                spaceBetween={0}
                pagination={{
                    type: 'fraction',
                }}
                initialSlide={1}
                navigation={true}
                virtual
            >
                {slides.map((slideContent, index) => (

                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        <div>
                            <img src={resim1} alt="" />
                            berkay4yldrm
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>


        </>
    );
}
