import React from 'react'
import '../../../style/main/prevNews.css'
import '../../../style/color.css'
import '../../../style/fonts.css'
import { NavLink } from 'react-router-dom'

const PrevNews = (props) => {
    const posts = props.posts;

    if (!Array.isArray(posts) || posts.length <= 0) {
        return null
    }
    
    return (
        <div className={props.prevNewsVis ? "prevNews bcg" : "prevNews bcg vis"}>
            <div className="container">
                <div className="block_title fCG">
                    <div className="title_name">Новости</div>
                    <NavLink exact to={'/news'} className='title_more fCG tRP'>Перейти к новостям</NavLink>
                </div>
                <div className="prevNews__cards">
                    {posts.map((posts, index) => {
                        return (
                                <div className="prevNews__card bcgB" key={index}>
                                    <div className="prevNews__card_image">
                                        <img src={posts.image} alt="" className="prevNews__card_img" />
                                    </div>
                                    <div className="prevNews__card_title">{posts.title}</div>
                                    <div className="prevNews__card_decr tD fCG">
                                        <div className="prevNews__card_data">{posts.date}</div>
                                        <div className="prevNews__card_author">{posts.author}</div>
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
