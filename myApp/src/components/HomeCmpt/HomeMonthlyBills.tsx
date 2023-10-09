import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import { MdCalendarMonth } from 'react-icons/md';
import { FaSms } from 'react-icons/fa';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { BsBadge4KFill, BsBadgeHdFill, BsAmd, BsFillTaxiFrontFill, BsFillPieChartFill, BsFillMotherboardFill } from 'react-icons/bs';




const HomeMonthlyBills = () => {
    return (
        <div className='HomeMonthlyBills'>



            {/* title start  */}
            <div className="HomeTransactionsHeading">
                <span className='HomeTransactionsHeadingTitle'>Monthly Bills</span>
                <span className='HomeTransactionsHeadingView'>View All</span>
            </div>
            {/* title end  */}







            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <BsBadge4KFill className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Subscription</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <BsBadgeHdFill className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Insurance</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <FaSms className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Insurance</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <FaHeadphonesSimple className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Insurance</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <BsFillPieChartFill className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Insurance</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <BsFillTaxiFrontFill className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Insurance</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <BsAmd className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Insurance</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <BsFillMotherboardFill className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Insurance</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="MoheMonthlyBillsBox">
                        <MdCalendarMonth className='MoheMonthlyBillsBoxIcon' />
                        <h2>$ 299</h2>
                        <span>Monthly Health Insurance</span>
                        <button className='btn btn-primary'>PLAY NOW</button>
                    </div>
                </SwiperSlide>
            </Swiper>











        </div>
    )
}

export default HomeMonthlyBills