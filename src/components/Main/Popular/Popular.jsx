import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';
import '../../../style/popular.css'
import '../../../style/color.css'
import '../../../style/fonts.css'


const Popular = (props) => {
    const [hoverInfo, setHoverInfo] = useState(false);
    const list = props.list;
    const ref = React.createRef();
    const HidenInfo = (e) => {
        setHoverInfo(false)
        CheckHover(e)
    }
    const ShowInfo = (e) => {
        setHoverInfo(true)
        CheckHover(e)
    }
    const CheckHover = (e) => {
        if(hoverInfo){
            e.target.classList.add('op')
        } else {
            e.target.classList.remove('op')
        }
    }

    if (!Array.isArray(list) || list.length <= 0) {
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
                    {list.map((list, index) => {
                        if (list.popular) {
                            return (
                                <div className="popular_card bcgB" key={index}>
                                    <img src={list.imageMin} alt="" className="popular__card_img" />
                                    <div className="popular_hover fCG op" ref={ref} onMouseOver={ShowInfo} onMouseOut={HidenInfo}>
                                        <>{list.title}</>
                                        <br />
                                        <>
                                           <StarRatings rating={list.rating} numberOfStars={10} starDimension={'13px'} starSpacing={'1px'} starRatedColor={'#FF7070'} starEmptyColor={'#fff'} />   
                                           <span className='rating'>{list.rating}</span>
                                        </>
                                    </div>
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
