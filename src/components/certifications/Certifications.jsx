import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper'
import big from '../../assets/big-data.jpg'
import scrum from '../../assets/metodologias-agiles.jpg'
import fullstack from '../../assets/full-stack.jpg'
import "swiper/css";
import "swiper/css/pagination"; 
import "swiper/css/navigation"

const data = [{image: fullstack}, {image: scrum}, {image: big}]


const Certifications = () => {
  return (
    <section id='certifications'>
        <h4 className='text-light'>Certificaciones oficiales</h4>
        <h2 className="text-light">Certificaciones</h2> 
        <Swiper 
           modules={[Navigation, Pagination, ]}
           navigation={true}
           spaceBetween={50}
           slidesPerView={1}           
           pagination={{ type: "fraction", clickable: true }}
           scrollbar={{ draggable: true }}
           className='container certifications__container'
        >
            {
             data.map(({image},i) => {
                 return (
                     <SwiperSlide key={i} >
                         <div className="">
                        <article  className="certification__item">
                            <div className='certification__item-image'>
                            <img src={image} alt="cert" className='certification__item-image'/>
                            </div>
                        </article>
                        </div>
                     </SwiperSlide>
                 )
             }) 
            }
        </Swiper>      
  </section>
  )
}

export default Certifications