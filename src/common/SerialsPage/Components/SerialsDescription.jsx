import React from 'react'
import StarRatings from 'react-star-ratings';

const SerialsDescription = (props) => {
    const item = props.item;
    return (
        <div className="titleSerialsPage">
                <div className="nameSerialsPage">{item.title}</div>
                <div className="serialsRating">
                    <StarRatings rating={item.rating} numberOfStars={10} starDimension={'30px'} starSpacing={'5px'} starRatedColor={'#FF7070'} starEmptyColor={'#fff'} />
                    <div className='rating'>{item.rating}</div>
                </div>
                <div className="detailsSearislPage">
                    <div className="details_title tW">
                        <div className="details_item tD">Год</div>
                        <div className="details_item tD">Жанр</div>
                        <div className="details_item tD">Режиссер</div>
                        <div className="details_item tD">Студия</div>
                        <div className="details_item tD">Возрастные ограничения</div>
                    </div>
                    <div className="details_right tW">
                        <div className="details_item">{item.years}</div>
                        <div className="details_item">{item.genre}</div>
                        <div className="details_item">{item.director}</div>
                        <div className="details_item">{item.studio}</div>
                        <div className="details_item">{item.AgeRating}</div>
                    </div>
                </div>
                <div className="descrSearialsPage">{item.descr}</div>
            </div>
    )
}

export default SerialsDescription
