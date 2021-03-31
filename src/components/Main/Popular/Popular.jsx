import React from 'react'
import '../../../style/popular.css'
import '../../../style/color.css'
import '../../../style/fonts.css'


const Popular = (props) => {
    const list = props.list;

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
                        return (
                                <div className="popular_card bcgB" key={index}>
                                    <img src={list.image} alt="" className="popular__card_img" />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Popular
