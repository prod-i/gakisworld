import React from 'react'
import PlayerModal from '../PlayerModal';
import { Modal } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';

// картинки
import img from '../../../assets/img/serials/15b.jpg';
import img1 from '../../../assets/img/serials/16b.jpg';
import img2 from '../../../assets/img/serials/17b.jpg';
import img3 from '../../../assets/img/serials/18b.jpg';
import img4 from '../../../assets/img/serials/19b.jpg';
import img5 from '../../../assets/img/serials/20b.jpg';


const SeriesCards = () => {
    const [visible, setVisible] = React.useState(false);

    const hadleVisible = () => {
        setVisible(!visible)
    }

    return (
        <div className="cardsSeries">
            <Swiper
                slidesPerView={5.5}
                spaceBetween={10}
                className={'cardsSeries'}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="cardSeries" onClick={hadleVisible}>
                    <div className="cardSeries_title bcgE">1 серия</div>
                    <img src={img} alt="" className="cardSerisImage" />
                </SwiperSlide>
                <SwiperSlide className="cardSeries" onClick={hadleVisible}>
                    <div className="cardSeries_title bcgE">2 серия</div>
                    <img src={img1} alt="" className="cardSerisImage" />
                </SwiperSlide>
                <SwiperSlide className="cardSeries" onClick={hadleVisible}>
                    <div className="cardSeries_title bcgE">3 серия</div>
                    <img src={img2} alt="" className="cardSerisImage" />
                </SwiperSlide>
                <SwiperSlide className="cardSeries" onClick={hadleVisible}>
                    <div className="cardSeries_title bcgE">4 серия</div>
                    <img src={img3} alt="" className="cardSerisImage" />
                </SwiperSlide>
                <SwiperSlide className="cardSeries" onClick={hadleVisible}>
                    <div className="cardSeries_title bcgE">5 серия</div>
                    <img src={img4} alt="" className="cardSerisImage" />
                </SwiperSlide>
                <SwiperSlide className="cardSeries" onClick={hadleVisible}>
                    <div className="cardSeries_title bcgE">6 серия</div>
                    <img src={img5} alt="" className="cardSerisImage" />
                </SwiperSlide>
            </Swiper>




            <Modal
                width='60%'
                title={false}
                footer={false}
                visible={visible}
                onCancel={hadleVisible}
                bodyStyle={{ background: 'rgb(29, 29, 29)', margin: '-10px 0' }}
            >

                <PlayerModal />

            </Modal>
        </div>
    )
}

export default SeriesCards
