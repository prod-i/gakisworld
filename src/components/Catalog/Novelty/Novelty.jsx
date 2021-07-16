import   React                 from 'react'            ;
import { Rate }                from 'antd'             ;
import { NavLink }             from 'react-router-dom' ;
import { Swiper, SwiperSlide } from 'swiper/react'     ;
import SwiperCore, { Scrollbar } from 'swiper/core'    ;
import '../../../style/catalog/novelty.css'            ;
SwiperCore.use([Scrollbar]);


const Novelty = (props) => {
    const list = props.catalog.catalogList.list;

    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }

    return (
        <div className={props.novelty.noveltyVis ? "best" : "best none"}>
            <div className="best_container container">
                <div className="novelty">

                    <Swiper
                        slidesPerView ={4}
                        spaceBetween  ={10}
                        scrollbar     ={true}
                        className     ={"novelty_cards"}
                        onSwiper      ={(swiper) => console.log(swiper)}
                        onSlideChange ={() => console.log('slide change')}
                    >

                        {list.map((card, key) => {
                            return (
                                <SwiperSlide className="novelty_card" key={key}>
                                    <NavLink exact to={'/serials/' + card.id} className='t'>
                                        {/* Фон */}
                                        <img src={card.imageLarge} alt="" className="novelty_img" />

                                        <div className="novelty_card_hover fCG">

                                            {/* Название и Рейтинг */}
                                            <div className="novelty_card_title tW">
                                                {card.title}
                                                <Rate disabled defaultValue={2} count={10} value={card.rating} className={'catalog_block_rating'} />
                                            </div>

                                            <div className="novelty_card_filtres tW">

                                                {/* Возрастной рейтинг */}
                                                <div className={'novelty_card_premium'}>{card.AgeRating}</div>

                                                {/* Фильтры */}
                                                <div className="novelty_card_filtre">
                                                    <div className="novelty_card_filtre_left tG">Жанр</div><div className="novelty_card_filtre_right">{card.genre}</div>
                                                </div>
                                                <div className="novelty_card_filtre">
                                                    <div className="novelty_card_filtre_left tG">Режессер</div><div className="novelty_card_filtre_right">{card.director}</div>
                                                </div>

                                                {/* Описание */}
                                                <div className="novelty_card_descr">
                                                    {card.descr}
                                                </div>
                                            </div>

                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            );
                        }).reverse()}

                    </Swiper>

                    <div className="best_title fCG">
                        <div className="best_title_wrap t">Новинки</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Novelty
