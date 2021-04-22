import React from 'react'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rate } from 'antd';
import '../../../style/catalog/novelty.css'
import '../../../style/color.css'
import '../../../style/fonts.css'

const Novelty = (props) => {
    const list =  props.catalogList.catalogList.list;
    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }
    return (
        <div className={props.novelty.noveltyVis ? "best" : "best bcg none"}>
            <div className="best_container container">
                <div className="novelty">
                    <Swiper
                        className={"novelty_cards"}
                        spaceBetween={10}
                        slidesPerView={4}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {list.map((card, key) => {
                            return (
                                <SwiperSlide className="novelty_card" key={key}>
                                        <img src={card.imageLarge} alt="" className="novelty_img" />
                                        <div className="novelty_card_hover">
                                            <div className="novelty_card_title">{card.title}</div>
                                        </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                 <div className="best_title fCG">
                     <div className="best_title_wrap">Новинки</div>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Novelty
