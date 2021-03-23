import React, { useState } from 'react';
import '../../style/slider.css'
import '../../style/color.css'
import '../../style/fonts.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }


    return (
        <div className='slider'>
            <FaArrowAltCircleLeft className='left-arrow tRP' onClick={prevSlide} />
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <div className="slide__wrapper">
                                <div className="slide__preview">
                                    <img className="slide__preview_img" src={slide.image} alt="" />
                                </div>
                                <div className="slide_content bcgB">
                                    <div className="slide_title">
                                        <a href='#' className="slide__name fCG">{slide.title}</a>
                                        <div className="slide_rating">
                                            {slide.rating}
                                        </div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="slide__description">
                                        <div className="slide_filters">
                                            <div className="slide_filters_left tG fCG">
                                                <div className="decr_elem">Год</div>
                                                <div className="decr_elem">Жанр</div>
                                                <div className="decr_elem">Режиссер</div>
                                            </div>
                                            <div className="slide_filters_right fCG">
                                                <div className="decr_elem">{slide.year}</div>
                                                <div className="decr_elem">{slide.genre}</div>
                                                <div className="decr_elem">{slide.author}</div>
                                            </div>
                                        </div>
                                        <div className="slide_review">
                                            <div className="slide_review_title">Обзор</div>
                                            <div className="slide_review_text ">{slide.descr}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
            <FaArrowAltCircleRight className='right-arrow tRP' onClick={nextSlide} />
        </div >
    );
};

export default Slider;
