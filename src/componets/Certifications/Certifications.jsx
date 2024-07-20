import React from 'react'
import './Certifications.css'
import {Data} from './Data.jsx'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
const Certifications = () => {
  return (
    <div className="certifications container section" id='certifications'>
         <h2 className="section__title">
            My certifications
        </h2>
        <Swiper
        className="certifications__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({id,img,title,desc})=>{
                return(
                    <SwiperSlide className="certifications__card" key={id}>
                        <img src={img} alt="" className="certifications__img" />
                        <h3 className="certifications__name">{title}</h3>
                        <p className="certifications__desc">
                            {desc}
                        </p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Certifications