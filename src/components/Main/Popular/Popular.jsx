import React        from 'react'
import StarRatings  from 'react-star-ratings';
import { NavLink }  from 'react-router-dom';
import '../../../style/main/popular.css'
import '../../../style/color.css'
import '../../../style/fonts.css'


const Popular = (props) => {
    const card = props.list;

    if (!Array.isArray(card) || card.length <= 0) {
        return null
    }

    return (
        <div className={props.popularVis ? "popular" : "popular vis"}>
            <div className="container">
                <div className="block_title fCG">
                    <div className="title_name">Популярное Аниме</div>
                    <div className="title_more tRP">Перейти к каталогу</div>
                </div>
                <div className="popular__cards">
                    {card.map((card, index) => {
                        if (card.popular) {
                            return (
                                <div className="popular_card bcgB" key={index}>
                                    <img src={card.imageMin} alt="" className="popular__card_img" />
                                    <NavLink exact to={'/serials/'+card.id} className='tW'>
                                        <div className="popular_hover fCG" >
                                            <>{card.title}</>
                                            <br />
                                            <>
                                            <StarRatings rating={card.rating} numberOfStars={10} starDimension={'13px'} starSpacing={'1px'} starRatedColor={'#FF7070'} starEmptyColor={'#fff'} />   
                                            <span className='rating'>{card.rating}</span>
                                            </>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        } else {
                            return null;
                        }
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Popular
