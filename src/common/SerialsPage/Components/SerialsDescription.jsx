import React from 'react'
import StarRatings from 'react-star-ratings';

const SerialsDescription = () => {
    return (
        <div className="titleSerialsPage">
                <div className="nameSerialsPage">Токийский Гуль</div>
                <div className="serialsRating">
                    <StarRatings rating={7.6} numberOfStars={10} starDimension={'30px'} starSpacing={'5px'} starRatedColor={'#FF7070'} starEmptyColor={'#fff'} />
                    <div className='rating'> 7.6</div>
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
                        <div className="details_item">2019</div>
                        <div className="details_item">Демоны, Сверхъестественное</div>
                        <div className="details_item">Date Hayato, Ямасита Хироюки</div>
                        <div className="details_item">ufotable</div>
                        <div className="details_item">NC-17</div>
                    </div>
                </div>
                <div className="descrSearialsPage">
                События разворачиваются в выдуманной стране, где всё пропитано волшебством. 
                              В Королевстве магия является совершенно обычной вещью, 
                              без которой не могут обойтись местные жители. 
                              Все, кто владеет магическими способностями, входят в состав гильдий, 
                              которые давно стали основной составляющей обители. Люси – миловидная юная девушка, 
                              только начинающая путь юной волшебницы. Она мечтает вступить в гильдию «Хвост Феи», 
                              являющегося самым престижным и сильным на всей королевской территории.
                
                </div>
            </div>
    )
}

export default SerialsDescription
