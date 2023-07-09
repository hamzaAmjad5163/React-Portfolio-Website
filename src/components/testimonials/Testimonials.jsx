import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.png'
import AVATAR2 from '../../assets/avatar2.png'
import AVATAR3 from '../../assets/avatar3.png'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container'
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt='Avatar One'></img>
           
          </div>
          <h5 className='clients__name'>Fasih Ahmed</h5>
            <h3>HTML,CSS Designer</h3>
            <small className='clients__review'>
              I like your work, its good. 
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR2} alt='Avatar Two'></img>
           
          </div>
          <h5 className='clients__name'>Khuzaima Ayaz</h5>
          <h3>Machine Learning Engineer</h3>
            <small className='clients__review'>
              I like your work, its good. 
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR3} alt='Avatar Three'></img>
            
          </div>
          <h5 className='clients__name'>Ernest Achiever</h5>
          <h3>Figma specialist</h3>
            <small className='clients__review'>
              I like your work, its good. 
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
