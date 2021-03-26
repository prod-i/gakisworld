import React from 'react'
import '../../../style/prevNews.css'
import '../../../style/color.css'
import '../../../style/fonts.css'

const PrevNews = (props) => {
    const posts = props.posts;

    if (!Array.isArray(posts) || posts.length <= 0) {
        return null
    }
    return (
        <div class={props.prevNewsVis ? "prevNews bcgB" : "prevNews bcgB vis"}>
            <div class="container">
                <div class="block_title fCG">
                    <div class="title_name">Новости</div>
                    <div class="title_more tRP">Перейти к новостям</div>
                </div>
                <div class="prevNews__cards">
                    {posts.map((posts, index) => {
                        return (
                                <div class="prevNews__card bcgE" key={index}>
                                    <div class="prevNews__card_image">
                                        <img src={posts.image} alt="" class="prevNews__card_img" />
                                    </div>
                                    <div class="prevNews__card_title">{posts.title}</div>
                                    <div class="prevNews__card_decr tD fCG">
                                        <div class="prevNews__card_data">{posts.date}</div>
                                        <div class="prevNews__card_author">{posts.author}</div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default PrevNews
