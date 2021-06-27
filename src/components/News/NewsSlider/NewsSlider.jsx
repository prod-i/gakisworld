import React from 'react'
import NewsModalPage from '../NewsModalPage';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal } from 'antd';
import 'swiper/swiper-bundle.css';

const NewsSlider = (props) => {
    const newsList = props.news.newsList;
    return (
        <div className={props.news.newsSlider.newsSliderVis ? "news_slider" : "news_slider vis"}>
            <div className="news_slider_cards_wraper">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3.5}
                    onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {newsList.list.map((item, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <NavLink to={"/news/" + item.id} className='news_slider_card'>
                                    <div className="news_slider_card">
                                        <img src={item.imgM} alt="" className='news_slider_card_img' />
                                        <div className="news_slider_descr">
                                            <div className="news_slider_card_title fCG">{item.title}</div>
                                            <div className="news_slider_card_descr fCG">{item.descr}</div>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <Modal
                    width='50%'
                    title={false}
                    footer={false}
                    visible={props.postId}
                    onCancel={() => window.location.hash = '#/news/'}
                    bodyStyle={{ background: 'rgb(50, 50, 50, 0.4)', margin: '-40px 0' }}
                >
                    {newsList.list.map((item, key) => {
                        if (item.id.toString() === props.postId) {
                            return (
                                <NewsModalPage item={item} key={key}/>
                            )
                        } else { return null }
                    })}
                </Modal>

            </div>
        </div>
    )
}

export default NewsSlider
