import React from 'react'
import '../../style/serialsPage.css'
import '../../style/color.css'
import '../../style/fonts.css'
import StarRatings from 'react-star-ratings';


const SerialsPage = () => {
    return (
        <div className='serialsPage fCG'>
            <img className='serialsPageBacgImg' src="https://wallpaperscave.ru/images/original/18/09-03/anime-tokyo-ghoul-81295.jpg" alt="" />
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
                        <div className="details_item">Сотодзаки Харуо</div>
                        <div className="details_item">ufotable</div>
                        <div className="details_item">NC-17</div>
                    </div>
                </div>
                <div className="descrSearialsPage">
                С обычным студентом Кэном Канэки случается беда, парень попадает в больницу. Но на этом неприятности не заканчиваются: ему пересаживают органы гулей – существ, поедающих плоть людей. После злосчастной операции Канэки становится одним из чудовищ, пытается стать своим, но для людей он теперь изгой, обреченный на уничтожение.
                
                </div>
            </div>
            <div className="cardsSeries">
                <div className="cardSeries"></div>
                <div className="cardSeries"></div>
                <div className="cardSeries"></div>
                <div className="cardSeries"></div>
                <div className="cardSeries"></div>
                <div className="cardSeries"></div>
            </div>
        </div>
    )
}

export default SerialsPage
