import React from 'react'
import '../../../style/PrevNews.css'
import '../../../style/color.css'
import '../../../style/fonts.css'

const PrevNews = () => {
    return (
        <div class="prevNews bcgB">
            <div class="container">
                <div class="block_title fCG">
                    <div class="title_name">Новости</div>
                    <div class="title_more tRP">Перейти к новостям</div>
                </div>
                <div class="prevNews__cards">
                    <div class="prevNews__card bcgE">
                        <div class="prevNews__card_image"><img
                                src="https://wallpaperscave.ru/images/original/18/06-04/anime-tokyo-ghoul-54358.jpg"
                                alt="" class="prevNews__card_img" /></div>
                        <div class="prevNews__card_title">«Тебе, бессмертный» — сэйю аниме по манге создательницы «Формы
                            голоса»</div>
                        <div class="prevNews__card_decr tD fCG">
                            <div class="prevNews__card_data">01.01.2021</div>
                            <div class="prevNews__card_author">prodi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrevNews
