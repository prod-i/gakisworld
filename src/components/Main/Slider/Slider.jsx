import React                                                  from 'react';
import Swiper, { Navigation, EffectCoverflow }                from 'swiper';
// import      { RightCircleOutlined, LeftCircleOutlined }    from '@ant-design/icons';
import StarRatings                                            from 'react-star-ratings';
import 'swiper/swiper-bundle.css';
import '../../../style/slider.css'
import '../../../style/color.css'
import '../../../style/fonts.css'
import { NavLink } from 'react-router-dom';

class Slider extends React.Component {
    componentDidMount() {
        Swiper.use([Navigation, EffectCoverflow]);
        if (!Array.isArray(this.props.slides) || this.props.slides.length <= 0) return null
        this.swiper = new Swiper('.swiper-container', {
            effect          : 'coverflow',
            centeredSlides  : true,
            loop            : true,
            slidesPerView   : 1.1,
            coverflowEffect : {
                rotate      : 5,
                depth       : 200,
                stretch     : 390,
                slideShadows: false,
            },
            navigation      : {
                nextEl      : '.button-next',
                prevEl      : '.button-prev',
            },
        });
    }

    render() {
        return (
            <div className={this.props.sliderVis ? 'slider swiper-container' : 'slider'}>
                {/* <div class="button-prev tR"><LeftCircleOutlined /></div> */}
                <div className="swiper-wrapper">
                    {this.props.slides.map((slide, index) => {
                        return (
                            <div className={'slide swiper-slide'} key={index}>
                                <div className="slide__wrapper">
                                    {/* PRIVIEW */}
                                        <NavLink exact to={'/serials/'+slide.id} className='slide__preview tW'><img className="slide__preview_img" src={slide.imageLarge} alt="" /></NavLink>
                                    {/* CONTENT */}
                                    <div className="slide_content bcgB">
                                        <div className="slide_title">
                                            <NavLink exact to={'/serials/'+slide.id} className='slide__name fCG'>{slide.title}</NavLink>
                                            <div className="slide_rating">
                                            <StarRatings rating={slide.rating} numberOfStars={10} starDimension={'18px'} starSpacing={'2px'} starRatedColor={'#FF7070'} starEmptyColor={'#fff'} />
                                            </div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="slide__description">
                                            <div className="slide_filters tG fCG">
                                                <div className="detail_elem"><div className="details_left tD">Год      </div><div className="details_right tW">{slide.years     }</div></div>
                                                <div className="detail_elem"><div className="details_left tD">Жанр     </div><div className="details_right tW">{slide.genre     }</div></div>
                                                <div className="detail_elem"><div className="details_left tD">Режиссер </div><div className="details_right tW">{slide.director  }</div></div>
                                                <div className="detail_elem"><div className="details_left tD">Студия   </div><div className="details_right tW">{slide.studio    }</div></div>
                                                <div className="detail_elem"><div className="details_left tD">Тип      </div><div className="details_right tW">{slide.type      }</div></div>
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
                            </div>
                        )
                    })}
                </div>
                {/* <div class="button-next tR"><RightCircleOutlined /></div> */}
            </div >
        );
    }
};

export default Slider;
