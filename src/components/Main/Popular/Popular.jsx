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
        <div class={props.popularVis ? "popular" : "popular vis"}>
            <div class="container">
                <div class="block_title fCG">
                    <div class="title_name">Популярное Аниме</div>
                    <div class="title_more tRP">Перейти к каталогу</div>
                </div>
                <div class="popular__cards">
                    {list.map((list, index) => {
                        return (
                                <div class="popular_card bcgB" key={index}>
                                    <img src={list.image} alt="" class="popular__card_img" />
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
