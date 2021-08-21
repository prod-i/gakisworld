import React from 'react'
import NewsModalPage from '../NewsModalPage';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal } from 'antd';
import 'swiper/swiper-bundle.css';
import StImg from '../../../assets/icon/StImg.jpg'

const NewsSlider = (props) => {
    const newsList = props.news.newsList;
    console.log(props.width);
    const size = () => {
        if(props.width <= 480) {
            return 1.2
        } else if(props.width <= 600) {
            return 1.3
        } else if(props.width <= 768) {
            return 1.5
        } else if(props.width <= 1280) {
            return 2.15
        } else if(props.width <= 1280) {
            return 2.5
        } else {
            return 3.5
        }
    }
    const space = () => {
        if(props.width <= 480) {
            return 10
        } else {
            return 30
        }
    }
    const ModalWidth = () => {
        if(props.width <= 480) {
            return `100%`
        } else if(props.width <= 600){
            return `80%`
        } else {
            return '60%'
        }
    }
    return (
        <div className={props.news.newsSlider.newsSliderVis ? "news_slider" : "news_slider vis"}>
            <div className="news_slider_cards_wraper">
                <Swiper
                    spaceBetween={space()}
                    slidesPerView={size()}
                    onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {newsList.list.map((item, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <NavLink to={"/news/" + item.id} className='news_slider_card'>
                                    <div className="news_slider_card">
                                        <img src={item.imgM ? item.imgM : StImg} alt="" className='news_slider_card_img' />
                                        <div className="news_slider_descr">
                                            <div className="news_slider_descr_wrap">
                                                <div className="news_slider_card_title fCG">{item.title}</div>
                                                <div className="news_slider_card_descr fCG">{item.descr}</div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        );
                    }).reverse()}
                </Swiper>

                <Modal
                    width={ModalWidth()}
                    title={false}
                    footer={false}
                    visible={props.postId}
                    onCancel={() => window.location.hash = '#/news/'}
                    bodyStyle={{ background: 'rgb(23, 23, 23, 1)' }}
                >
                    {newsList.list.map((item, key) => {
                        if (item.id.toString() === props.postId) {
                            return (
                                <NewsModalPage item={item} key={key} />
                            )
                        } else { return null }
                    })}
                </Modal>

            </div>
        </div>
    )
}

export default NewsSlider
