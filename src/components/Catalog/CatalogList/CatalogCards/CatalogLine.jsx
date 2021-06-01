import React from 'react'
import { Rate }    from 'antd';
import { NavLink } from 'react-router-dom';
import { HeartOutlined, CrownOutlined, EyeOutlined } from '@ant-design/icons';

const CatalogLine = ({card, key}) => {
    return (
        <div className='catalog_card_line t' key={key}>
{/* Превью -----------------------------*/}
            <NavLink exact to={'/serials/' + card.id} className='catalog_card_img_wrapper' key={key}>
                <CrownOutlined className={'premium'} twoToneColor={'#fff'} />
                <img src={card.imageLarge} alt="" className="catalog__card_line_img" />
            </NavLink>

            <div className="catalog__card_line_info">
{/* Шапка (название, опции) -----------*/}
                <div className="catalog_header_line">
                    <NavLink exact to={'/serials/' + card.id} className='t' key={key}>
                        <div className="catalog_title_line fCG t">{card.title}</div>
                    </NavLink>
                    <div className="catalog_icons_line tR">
                        <EyeOutlined /><HeartOutlined /><CrownOutlined />
                    </div>
                </div>
{/* Рейтинг ---------------------------*/}
                <div className="catalog_rating">
                    <Rate disabled defaultValue={2} count={10} value={card.rating} />
                </div>

                <div className="catalog_card_info">
{/* Фильтры ---------------------------*/}
                    <div className="catalog_detail fCG">
                        <div className="catalog_detail_elem"><div className="catalog_details_left tA">Год                    </div><div className="catalog_details_right t">{card.years}</div></div>
                        <div className="catalog_detail_elem"><div className="catalog_details_left tA">Жанр                   </div><div className="catalog_details_right t">{card.genre}</div></div>
                        <div className="catalog_detail_elem"><div className="catalog_details_left tA">Режиссер               </div><div className="catalog_details_right t">{card.director}</div></div>
                        <div className="catalog_detail_elem"><div className="catalog_details_left tA">Возрастное ограничение </div><div className="catalog_details_right t">{card.AgeRating}</div></div>
                        <div className="catalog_detail_elem"><div className="catalog_details_left tA">Студия                 </div><div className="catalog_details_right t">{card.studio}</div></div>
                        <div className="catalog_detail_elem"><div className="catalog_details_left tA">Тип                    </div><div className="catalog_details_right t">{card.type}</div></div>
                        <div className="catalog_detail_elem"><div className="catalog_details_left tA">{card.seasons ? 'Сезонов' : 'Эпизодов'}   </div><div className="catalog_details_right t">{card.seasons ? card.seasons : card.episodes}</div></div>
                    </div>
{/* Описание --------------------------*/}
                    <div className="catalog_descr">
                        <div className="catalog_descr_title tA fCG">Обзор</div>
                        <div className="catalog_descr_content t">{card.descr}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CatalogLine
