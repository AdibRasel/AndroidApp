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


const HomeSendMoney = () => {
    return (
        <div className='HomeSendMoney'>




            {/* title start  */}
            <div className="HomeTransactionsHeading">
                <span className='HomeTransactionsHeadingTitle'>Send Money</span>
                <span className='HomeTransactionsHeadingView'>Add New</span>
            </div>
            {/* title end  */}










            <Swiper
                slidesPerView={5}
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



                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata1} alt="" /> <br />
                    <h1>Justine</h1>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata2} alt="" /> <br />
                    <h1>Maria</h1>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata3} alt="" /> <br />
                    <h1>Pamela</h1>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata4} alt="" /> <br />
                    <h1>Neville</h1>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata5} alt="" /> <br />
                    <h1>Alex</h1>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata6} alt="" /> <br />
                    <h1>Stina</h1>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata7} alt="" /> <br />
                    <h1>Jurrien</h1>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata8} alt="" /> <br />
                    <h1>Elwin</h1>
                </SwiperSlide>


                
                <SwiperSlide className='HomeSendMoneySwiperSlider'>
                    <img src={Avata9} alt="" /> <br />
                    <h1>Alma</h1>
                </SwiperSlide>
            </Swiper>









        </div>
    )
}

export default HomeSendMoney