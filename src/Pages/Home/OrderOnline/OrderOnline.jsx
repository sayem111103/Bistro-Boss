import React from 'react';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from 'swiper';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import backgroundImage from '../../../assets/home/chef-service.jpg'

const OrderOnline = () => {
    return (
        <section className='py-20 max-w-screen-lg mx-auto'>
            <SectionHeader subName={'From 11:00am to 10:00pm'} name={'ORDER ONLINE'}></SectionHeader>
            <div className='pb-20'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='py-12'> <img className='mx-auto w-full' src={slide1} alt={slide1} />
                        <p className='text-center -mt-12 text-2xl font-thin text-white uppercase'>Salad</p> </div></SwiperSlide>
                    <SwiperSlide><div className='py-12'> <img className='mx-auto w-full' src={slide2} alt={slide2} />
                        <p className='text-center -mt-12 text-2xl font-thin text-white uppercase'>pizzas</p> </div></SwiperSlide>
                    <SwiperSlide><div className='py-12'> <img className='mx-auto w-full' src={slide3} alt={slide3} />
                        <p className='text-center -mt-12 text-2xl font-thin text-white uppercase'>Soups</p> </div></SwiperSlide>
                    <SwiperSlide><div className='py-12'> <img className='mx-auto w-full' src={slide4} alt={slide4} />
                        <p className='text-center -mt-12 text-2xl font-thin text-white uppercase'>desserts</p> </div></SwiperSlide>
                    <SwiperSlide><div className='py-12'> <img className='mx-auto w-full' src={slide5} alt={slide5} />
                        <p className='text-center -mt-12 text-2xl font-thin text-white uppercase'>Salad</p> </div></SwiperSlide>
                </Swiper>
            </div>
            <div className='py-20' style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition:'center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                <div className='bg-white max-w-[70%] mx-auto p-10 text-center'>
                    <h3 className='text-2xl font-bold'>Bistro Boss</h3>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </section>
    );
};

export default OrderOnline;