import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import img from './../../../assets/img/serials/19m.jpg'

const NewsSlider = (props) => {
    const newsList = props.newsList.newsList;
    return (
        <div className={newsList.newsListVis ? "news_slider" : "news_slider vis"}>
            <div className="news_slider_cards_wraper">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3.5}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {newsList.list.map((card, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <div className="news_slider_card">
                                    <img src={card.imgM} alt="" className='news_slider_card_img' />
                                    <div className="news_slider_descr">
                                        <div className="news_slider_card_title fCG">{card.title}</div>
                                        <div className="news_slider_card_descr fCG">{card.descr}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default NewsSlider
