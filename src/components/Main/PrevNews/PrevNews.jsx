import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../style/main/prevNews.css';



const PrevNews = (props) => {
    const list = props.list;
    const size = () => {
        if (props.width <= 480) {
            return 1
        } else if(props.width <= 768){
            return 2
        } else {
            return 4
        }
    }
    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }

    return (
        <div className={props.prevNewsVis ? "prevNews bB" : "prevNews bB vis"}>

            <div className="container">
                <div className="block_title fCG">
                    <NavLink exact to={'/news'} className='title_name t'>Новости</NavLink>
                    <NavLink exact to={'/news'} className='title_more fCG tRP'>Перейти к новостям</NavLink>
                </div>

                <div className="prevNews__cards">
                    {list.map((posts, key) => {
                        if (list.length-size() <= key) {
                            return (
                            <NavLink to={'/news/'+ posts.id} className=" prevNews__card bE" key={key}>
                                    <div className="prevNews__card_image">
                                        <img src={posts.imgM} alt="" className="prevNews__card_img" />
                                    </div>
                                    <div className="prevNews__card_title fCG t">{posts.title}</div>
                                    <div className="prevNews__card_decr tA fCG">
                                        {/* <div className="prevNews__card_data">{posts.date}</div> */}
                                        <div className="prevNews__card_author">{posts.author}</div>
                                    </div>
                            </NavLink>
                            )
                        } else { return null }
                    }
                    ).reverse()}
                </div>
                
            </div>
        </div>
    )
}

export default PrevNews
