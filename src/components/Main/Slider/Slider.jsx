import React from 'react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import { Rate } from 'antd';
import 'swiper/swiper-bundle.css';
import '../../../style/main/slider.css';


const Slider = (props) => {
    SwiperCore.use([EffectCoverflow]);
    console.log(window.screen.width, window.screen.height);
    const size = () => {
        if(props.width <= 480){
            return 50
        } else if(props.width <= 600) {
            return 100
        } else if(props.width <= 1200) {
            return 0
        } else {
            return 300
        }
    }
    return (
        <div className={props.sliderVis ? 'slider swiper-container' : 'slider none'}>

            <Swiper
                className={'swiper-wrapper'}
                slidesPerView={1.1}
                centeredSlides={true}
                loop={true}
                effect='coverflow'
                initialSlide={1}
                coverflowEffect={{
                    rotate: 15,
                    depth: 390,
                    stretch: size(),
                    slideShadows: false,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {props.slides.map((slide, key) => {
                    if (slide.MainSlider) {
                        return (
                            <SwiperSlide className={'slide swiper-slide'} key={key}>
                                <div className="slide__wrapper">
                                    {/* PRIVIEW */}
                                    <NavLink exact to={'/serials/' + slide.id} className='slide__preview t'><img className="slide__preview_img" src={slide.imageLarge} alt="" /></NavLink>
                                    {/* CONTENT */}
                                    <div className="slide_content bTr">
                                        <div className="slide_title">
                                            <NavLink exact to={'/serials/' + slide.id} className='slide__name fCG t'>{slide.title}</NavLink>
                                            <div className="slide_rating">
                                                <Rate disabled defaultValue={2} count={10} value={slide.rating} className='ratings'/>
                                            </div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="slide__description">
                                            <div className="slide_filters tG fCG">
                                                <div className="detail_elem"><div className="details_left tA">Год      </div><div className="details_right t">{slide.years}</div></div>
                                                <div className="detail_elem"><div className="details_left tA">Жанр     </div><div className="details_right t">{slide.genre}</div></div>
                                                <div className="detail_elem"><div className="details_left tA">Режиссер </div><div className="details_right t">{slide.director}</div></div>
                                                <div className="detail_elem"><div className="details_left tA">Студия   </div><div className="details_right t">{slide.studio}</div></div>
                                                <div className="detail_elem"><div className="details_left tA">Тип      </div><div className="details_right t">{slide.type}</div></div>
                                                <div className="detail_elem"><div className="details_left tA">{slide.seasons ? 'Сезонов' : 'Эпизодов'}   </div><div className="details_right t">{slide.seasons ? slide.seasons : slide.episodes}</div></div>
                                            </div>
                                            <div className="slide_review">
                                                {/* <div className="slide_review_title tG">Обзор        </div> */}
                                                <div className="slide_review_text  t">{slide.descr}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /CONTENT */}
                                </div>
                            </SwiperSlide>
                        )
                    } else {
                        return null
                    }
                }).reverse()}
            </Swiper>
        </div >
    );
}

export default Slider;
