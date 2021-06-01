import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../style/main/prevNews.css';



const PrevNews = (props) => {
    const list = props.list;

    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }

    return (
        <div className={props.prevNewsVis ? "prevNews bB" : "prevNews bB vis"}>

            <div className="container">
                <div className="block_title fCG">
                    <div className="title_name t">Новости</div>
                    <NavLink exact to={'/news'} className='title_more fCG tRP'>Перейти к новостям</NavLink>
                </div>

                <div className="prevNews__cards">
                    {list.map((posts, key) => {
                        if (key < 4) {
                            return (
                                <div className="prevNews__card bE" key={key}>
                                    <div className="prevNews__card_image">
                                        <img src={posts.imgM} alt="" className="prevNews__card_img" />
                                    </div>
                                    <div className="prevNews__card_title fCG t">{posts.title}</div>
                                    <div className="prevNews__card_decr tA fCG">
                                        <div className="prevNews__card_data">{posts.date}</div>
                                        <div className="prevNews__card_author">{posts.author}</div>
                                    </div>
                                </div>
                            )
                        } else { return null }
                    }
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default PrevNews
