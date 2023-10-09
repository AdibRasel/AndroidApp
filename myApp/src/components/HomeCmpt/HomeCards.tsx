import React from 'react';
import {
    IonTitle,
    IonToolbar
} from '@ionic/react';

import Carousel from 'react-bootstrap/Carousel';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


import Avata1 from "../../assets/img/sample/avatar/avatar1.jpg"
import Avata2 from "../../assets/img/sample/avatar/avatar2.jpg"
import Avata3 from "../../assets/img/sample/avatar/avatar3.jpg"
import Avata4 from "../../assets/img/sample/avatar/avatar4.jpg"
import Avata5 from "../../assets/img/sample/avatar/avatar5.jpg"
import Avata6 from "../../assets/img/sample/avatar/avatar6.jpg"
import Avata7 from "../../assets/img/sample/avatar/avatar7.jpg"
import Avata8 from "../../assets/img/sample/avatar/avatar8.jpg"
import Avata9 from "../../assets/img/sample/avatar/avatar9.jpg"
import Avata10 from "../../assets/img/sample/avatar/avatar10.jpg"



const HomeCards = () => {


    return (
        <div className='HomeCardsBoxs'>






            {/* title start  */}
            <div className="HomeTransactionsHeading">
                <span className='HomeTransactionsHeadingTitle'>Card</span>
                <span className='HomeTransactionsHeadingView'>View All</span>
            </div>
            {/* title end  */}




            {/* <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className="HomeCarouselItem1">
                        <span className="HomeCarouselItemSpan">BALANCE</span>
                        <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                        <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                        <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                        <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                        <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                    </div>
                </Carousel.Item>



                <Carousel.Item>
                    <div className="HomeCarouselItem2">
                        <span className="HomeCarouselItemSpan">BALANCE</span>
                        <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                        <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                        <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                        <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                        <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="HomeCarouselItem3">
                        <span className="HomeCarouselItemSpan">BALANCE</span>
                        <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                        <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                        <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                        <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                        <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="HomeCarouselItem4">
                        <span className="HomeCarouselItemSpan">BALANCE</span>
                        <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                        <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                        <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                        <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                        <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                    </div>
                </Carousel.Item>

            </Carousel> */}








            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // '@0.00': {
                    //     slidesPerView: 1,
                    //     spaceBetween: 1,
                    // },
                    // '@0.75': {
                    //     slidesPerView: 2,
                    //     spaceBetween: 2,
                    // },
                    // '@1.00': {
                    //     slidesPerView: 3,
                    //     spaceBetween: 4,
                    // },
                    // '@1.50': {
                    //     slidesPerView: 4,
                    //     spaceBetween: 5,
                    // },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >



                <SwiperSlide className='HomeCarouselItem1'>
                    <span className="HomeCarouselItemSpan">BALANCE</span>
                    <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                    <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                    <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                    <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                    <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                </SwiperSlide>



                <SwiperSlide className='HomeCarouselItem2'>
                    <span className="HomeCarouselItemSpan">BALANCE</span>
                    <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                    <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                    <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                    <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                    <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                </SwiperSlide>



                <SwiperSlide className='HomeCarouselItem3'>
                    <span className="HomeCarouselItemSpan">BALANCE</span>
                    <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                    <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                    <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                    <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                    <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                </SwiperSlide>



                <SwiperSlide className='HomeCarouselItem4'>
                    <span className="HomeCarouselItemSpan">BALANCE</span>
                    <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                    <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                    <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                    <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                    <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                </SwiperSlide>



                <SwiperSlide className='HomeCarouselItem1'>
                    <span className="HomeCarouselItemSpan">BALANCE</span>
                    <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                    <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                    <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                    <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                    <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                </SwiperSlide>



                <SwiperSlide className='HomeCarouselItem2'>
                    <span className="HomeCarouselItemSpan">BALANCE</span>
                    <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                    <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                    <h2 className='HomeCarouselItemh3'>*** *** 9950</h2>

                    <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                    <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                </SwiperSlide>



                <SwiperSlide className='HomeCarouselItem4'>
                    <span className="HomeCarouselItemSpan">BALANCE</span>
                    <h2 className='HomeCarouselItemh2'>$ 1,256,90</h2>

                    <span className="HomeCarouselItemSpan">CARD NUMBER</span>
                    <h2 className='HomeCarouselItemh2'>*** *** 9950</h2>

                    <span className="HomeCarouselItemSpan">EXPIRY CCV</span>
                    <h2 className='HomeCarouselItemh2'>12/25 9950</h2>
                </SwiperSlide>

            </Swiper>













        </div>
    )
}

export default HomeCards