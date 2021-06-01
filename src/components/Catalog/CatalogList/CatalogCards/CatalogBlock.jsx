import React from 'react'
import { Rate }    from 'antd';
import { NavLink } from 'react-router-dom';

const CatalogBlock = ({card, key}) => {
    return (
        <NavLink exact to={'/serials/' + card.id} className='catalog_card_block t' key={key}>

            <img src={card.imageMin} alt="" className="catalog__card_block_img" />

            <div className="catalog_block_hover fCG">
{/*  Возрастной рейтинг */}  <div className={'catalog_block_premium'}>{card.AgeRating}</div>
{/*  Название           */}  <div className="catalog_block_title">{card.title}</div>
{/*  Рейтинг            */}  <Rate disabled defaultValue={2} count={10} value={card.rating} className={'catalog_block_rating'} />
                             <div className="catalog_block_detail">
{/*  Год                */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tA">Год       </div><div className="catalog_block_details_right t">{card.years}</div></div>
{/*  Тип                */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tA">Тип       </div><div className="catalog_block_details_right t">{card.type}</div></div>
{/*  Жанр               */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tA">Жанр      </div><div className="catalog_block_details_right t">{card.genre}</div></div>
{/*  Режессер           */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tA">Режессер  </div><div className="catalog_block_details_right t">{card.director}</div></div>
{/*  Cезонов            */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tA">Сезонов   </div><div className="catalog_block_details_right t">{card.seasons ? card.seasons : '1'}</div></div>
                             </div>
            </div>
            
        </NavLink>
    )
}

export default CatalogBlock
