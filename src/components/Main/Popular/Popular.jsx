import React from 'react'
import '../../../style/popular.css'
import '../../../style/color.css'
import '../../../style/fonts.css'


const Popular = () => {
    return (
        <div class="popular">
            <div class="container">
                <div class="block_title fCG">
                    <div class="title_name">Популярное Аниме</div>
                    <div class="title_more tRP">Перейти к каталогу</div>
                </div>
                <div class="popular__cards">
                    <div class="popular_card bcgB">
                        <img src="./assets/img/gul.jpg" alt="" class="popular__card_img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular
