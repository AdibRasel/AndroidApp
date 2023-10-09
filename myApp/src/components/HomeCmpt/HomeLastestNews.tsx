import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import NewsImage1 from "../../assets/img/sample/photo/1.jpg"
import NewsImage2 from "../../assets/img/sample/photo/2.jpg"
import NewsImage3 from "../../assets/img/sample/photo/3.jpg"
import NewsImage4 from "../../assets/img/sample/photo/4.jpg"


const HomeLastestNews = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='HomeLastestNews'>


            {/* title start  */}
            <div className="HomeTransactionsHeading">
                <span className='HomeTransactionsHeadingTitle'>Lastest News</span>
                <span className='HomeTransactionsHeadingView'>View All</span>
            </div>
            {/* title end  */}





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
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                slidesPerView={2}
                

                
            >
                <SwiperSlide>
                    <div className="HomeLastestNewsBox">
                        <div className="HomeLastestNewsImage">
                            <img src={NewsImage1} alt="" />
                        </div>
                        <p>What will be the value of bitcoin in the next...</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="HomeLastestNewsBox">
                        <div className="HomeLastestNewsImage">
                            <img src={NewsImage2} alt="" />
                        </div>
                        <p>What will be the value of bitcoin in the next...</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="HomeLastestNewsBox">
                        <div className="HomeLastestNewsImage">
                            <img src={NewsImage3} alt="" />
                        </div>
                        <p>What will be the value of bitcoin in the next...</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="HomeLastestNewsBox">
                        <div className="HomeLastestNewsImage">
                            <img src={NewsImage4} alt="" />
                        </div>
                        <p>What will be the value of bitcoin in the next...</p>
                    </div>
                </SwiperSlide>



                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>


          




        </div>
    )
}

export default HomeLastestNews