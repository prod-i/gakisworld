import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AppstoreOutlined, MenuOutlined, HeartOutlined,CrownOutlined, EyeOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import RateStyles from '../../../style/ant/Rate.css'
import '../../../style/catalog/catalogList.css'
import '../../../style/color.css'
import '../../../style/fonts.css'


const CatalogList = (props) => {
    const [hoverInfo, setHoverInfo] = useState(false);
    const [rtlLine, setRtlLine] = useState(false);
    const rtlSwith = () => {
        return rtlLine ? setRtlLine(false) : setRtlLine(true)
    }
    const ShowInfo = (e) => {
        setHoverInfo(true)
        CheckHover(e)
    }
    const HidenInfo = (e) => {
        setHoverInfo(false)
        CheckHover(e)
    }
    const CheckHover = (e) => {
        return hoverInfo ? e.target.classList.add('op') : e.target.classList.remove('op')
    }
    return (
        <div className="catalog_body">
            <div className="container">
                <div className="catalog_filtres">
                    <div className="title_name">
                        <span className="filters_catalog selector_s">
                            <select>
                                <option>По рейтингу</option>
                                <option>По названию</option>
                                <option>По длительности</option>
                            </select>
                        </span>
                    </div>
                    <div className="rtl" onClick={rtlSwith}>
                        {rtlLine ? <AppstoreOutlined /> : <MenuOutlined />}
                    </div>
                </div>
                <div className="catalog__cards">
                    {!rtlLine
                        ? props.catalogList.catalogList.list.map((card, key) => {
                            return (
                                <NavLink exact to={'/serials/' + card.id} className='catalog_card_block tW' key={key}>
                                    <img src={card.imageMin} alt="" className="catalog__card_block_img" />
                                    <div className="catalog_title_block fCG op" onMouseOver={ShowInfo} onMouseOut={HidenInfo}>{card.title}</div>
                                </NavLink>
                            );
                        })
                        : props.catalogList.catalogList.list.map((card, key) => {
                            return (
                                <div className='catalog_card_line tW' key={key}>
                                    <NavLink exact to={'/serials/' + card.id} className='catalog_card_img_wrapper' key={key}>
                                        <CrownOutlined className={'premium'} twoToneColor={'#fff'}/>
                                        <img src={card.imageLarge} alt="" className="catalog__card_line_img" />
                                    </NavLink>
                                    <div className="catalog__card_line_info">
                                        <div className="catalog_header_line">
                                        <NavLink exact to={'/serials/' + card.id} className='tW' key={key}>
                                            <div className="catalog_title_line fCG">{card.title}</div>
                                        </NavLink>
                                            <div className="catalog_icons_line tR">
                                                <EyeOutlined /><HeartOutlined /><CrownOutlined />
                                            </div>
                                        </div>  
                                        <div className="rating">
                                            <Rate disabled defaultValue={2} className={RateStyles} count={10} value={card.rating}/>
                                        </div>
                                        <div className="catalog_card_info">
                                            <div className="catalog_detail tG fCG">
                                                <div className="catalog_detail_elem"><div className="catalog_details_left tD">Год                    </div><div className="catalog_details_right tW">{card.years}</div></div>
                                                <div className="catalog_detail_elem"><div className="catalog_details_left tD">Жанр                   </div><div className="catalog_details_right tW">{card.genre}</div></div>
                                                <div className="catalog_detail_elem"><div className="catalog_details_left tD">Режиссер               </div><div className="catalog_details_right tW">{card.director}</div></div>
                                                <div className="catalog_detail_elem"><div className="catalog_details_left tD">Возрастное ограничение </div><div className="catalog_details_right tW">{card.AgeRating}</div></div>
                                                <div className="catalog_detail_elem"><div className="catalog_details_left tD">Студия                 </div><div className="catalog_details_right tW">{card.studio}</div></div>
                                                <div className="catalog_detail_elem"><div className="catalog_details_left tD">Тип                    </div><div className="catalog_details_right tW">{card.type}</div></div>
                                                <div className="catalog_detail_elem"><div className="catalog_details_left tD">{card.seasons ? 'Сезонов' : 'Эпизодов'}   </div><div className="catalog_details_right tW">{card.seasons ? card.seasons : card.episodes}</div></div>
                                            </div>
                                            <div className="catalog_descr">
                                                <div className="catalog_descr_title tD fCG">Обзор</div>
                                                <div className="catalog_descr_content tW">{card.descr}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CatalogList
