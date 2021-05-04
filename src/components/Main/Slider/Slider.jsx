import React                           from 'react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide         } from 'swiper/react';
import { NavLink                     } from 'react-router-dom';
import { Rate                        } from 'antd';
import 'swiper/swiper-bundle.css'
import '../../../style/main/slider.css'
SwiperCore.use([EffectCoverflow]);


const Slider = (props) => {
    return (
        <div className={props.sliderVis ? 'slider swiper-container' : 'slider none'}>
            <Swiper
                className        ={'swiper-wrapper'}
                slidesPerView    ={1.1}
                centeredSlides   ={true}
                loop             ={true}
                effect           ='coverflow'
                coverflowEffect  ={{
                    rotate       : 15,
                    depth        : 200,
                    stretch      : 390,
                    slideShadows : false,
                }}
                onSwiper         ={(swiper) => console.log(swiper)}
                onSlideChange    ={() => console.log('slide change')}
            >
                {props.slides.map((slide, key) => {
                    return (
                        <SwiperSlide className={'slide swiper-slide'} key={key}>
                            <div className="slide__wrapper">
                                {/* PRIVIEW */}
                                <NavLink exact to={'/serials/' + slide.id} className='slide__preview tW'><img className="slide__preview_img" src={slide.imageLarge} alt="" /></NavLink>
                                {/* CONTENT */}
                                <div className="slide_content bcgB">
                                    <div className="slide_title">
                                        <NavLink exact to={'/serials/' + slide.id} className='slide__name fCG'>{slide.title}</NavLink>
                                        <div className="slide_rating">
                                            <Rate disabled defaultValue={2} count={10} value={slide.rating}/>
                                        </div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="slide__description">
                                        <div className="slide_filters tG fCG">
                                            <div className="detail_elem"><div className="details_left tD">Год      </div><div className="details_right tW">{slide.years}</div></div>
                                            <div className="detail_elem"><div className="details_left tD">Жанр     </div><div className="details_right tW">{slide.genre}</div></div>
                                            <div className="detail_elem"><div className="details_left tD">Режиссер </div><div className="details_right tW">{slide.director}</div></div>
                                            <div className="detail_elem"><div className="details_left tD">Студия   </div><div className="details_right tW">{slide.studio}</div></div>
                                            <div className="detail_elem"><div className="details_left tD">Тип      </div><div className="details_right tW">{slide.type}</div></div>
                                            <div className="detail_elem"><div className="details_left tD">{slide.seasons ? 'Сезонов' : 'Эпизодов'}   </div><div className="details_right tW">{slide.seasons ? slide.seasons : slide.episodes}</div></div>
                                        </div>
                                        <div className="slide_review">
                                            <div className="slide_review_title tG">Обзор        </div>
                                            <div className="slide_review_text  tW">{slide.descr}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* /CONTENT */}
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    );
}

export default Slider;
