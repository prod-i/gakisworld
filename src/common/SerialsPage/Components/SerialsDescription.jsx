import React from 'react'
import StarRatings from 'react-star-ratings';

const SerialsDescription = (props) => {
    const item = props.item;
    return (
        <div className="titleSerialsPage">
                <div className="nameSerialsPage">{item.title}</div>
                <div className="serialsRating">
                    <StarRatings rating={item.rating} numberOfStars={10} starDimension={'30px'} starSpacing={'5px'} starRatedColor={'#FF7070'} starEmptyColor={'#999'} />
                    <div className='rating'>{item.rating}</div>
                </div>
                <div className="detailsSearislPage">
                    <div className="details_title tG">
                        <div className="details_item">Год</div>
                        <div className="details_item">Жанр</div>
                        <div className="details_item">Режиссер</div>
                        <div className="details_item">Студия</div>
                        <div className="details_item">Возрастные ограничения</div>
                    </div>
                    <div className="details_right tW">
                        <div className="details_item">{item.years}</div>
                        <div className="details_item">{item.genre}</div>
                        <div className="details_item">{item.director}</div>
                        <div className="details_item">{item.studio}</div>
                        <div className="details_item">{item.AgeRating}</div>
                    </div>
                </div>
                <div className="descrSearialsPage tW">{item.descr}</div>
            </div>
    )
}

export default SerialsDescription
