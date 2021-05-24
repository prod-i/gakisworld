import   React                 from 'react'
import   NewsModalPage              from '../NewsModalPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal               } from 'antd';
import 'swiper/swiper-bundle.css';

const NewsSlider = (props) => {
    const newsList = props.newsList.newsList;
    return (
        <div className={newsList.newsListVis ? "news_slider" : "news_slider vis"}>
            <div className="news_slider_cards_wraper">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3.5}
                    onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    {newsList.list.map((card, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <div className="news_slider_card" onClick={() => props.showModal(card.title, card.text, card.imgM)}>
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
                <Modal
                    width    = '50%'
                    title    = {false}
                    footer   = {false}
                    visible  = {props.ModalVisible}
                    onCancel = {props.handleCancel}
                    bodyStyle= {{ background: 'rgb(33, 37, 41)', margin:'-40px 0'}}
                >
                   <NewsModalPage title={props.ModalTitle} img={props.ModalPicture} text={props.ModalContent}/>
                </Modal>
            </div>
        </div>
    )
}

export default NewsSlider
