import SectionHeader from "../../../components/SectionHeader/SectionHeader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useAxios from "../../../Hooks/useAxios";

const Review = () => {
    const [axiosApi] = useAxios()
    const [review, setReview] = useState([])
    useEffect(() => {
        axiosApi('/review')
            .then(res => setReview(res.data))
    }, []);

    console.log(review);
    return (
        <section className="pb-24 max-w-screen-lg mx-auto">
            <SectionHeader subName={'What Our Clients Say'} name={'TESTIMONIALS'}></SectionHeader>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {review.map(rd => <SwiperSlide key={rd._id}>
                        <div className="text-center py-10 w-1/2 mx-auto">
                            <Rating className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={rd.rating}
                                readOnly
                            />
                            <p>{rd.details}</p>
                            <h3 className="text-[#BB8506] uppercase text-2xl">{rd.name}</h3>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;