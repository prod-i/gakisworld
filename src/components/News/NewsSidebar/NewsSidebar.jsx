import React from 'react'
import img from '../../../assets/img/serials/6m.jpg'
import img1 from '../../../assets/img/serials/7m.jpg'
import img2 from '../../../assets/img/serials/8m.jpg'
import img3 from '../../../assets/img/serials/9m.jpg'
import img4 from '../../../assets/img/serials/10m.jpg'
import img5 from '../../../assets/img/serials/11m.jpg'
import img6 from '../../../assets/img/serials/12m.jpg'

const NewsSidebar = (props) => {
    return (
        <div className="news_sideBar">
            <div className="news_sideBar_el news_important">
            <div className="news_sideBar_title">Важно</div>
                <div className="news_sideBar_item">
                    <img src={img} alt="" className="news_sideBar_item_img" />
                    <div className="news_sideBar_item_content">
                        <div className="news_sideBar_item_title">«Цестус: Римский боец» — второй трейлер CG-аниме про гладиатора-боксёра</div>
                    </div>
                </div>
                <div className="news_sideBar_item">
                    <img src={img4} alt="" className="news_sideBar_item_img" />
                    <div className="news_sideBar_item_content">
                        <div className="news_sideBar_item_title">Робот Геттер арк» — новый тизер, сэйю и дата выхода нового аниме культового франчайза</div>
                    </div>
                </div>
                <div className="news_sideBar_item">
                    <img src={img2} alt="" className="news_sideBar_item_img" />
                    <div className="news_sideBar_item_content">
                        <div className="news_sideBar_item_title">Этот вампир постоянно умирает» — трейлер и другие подробности комедийного аниме о слабом вампире</div>
                    </div>
                </div>
                <div className="news_sideBar_item">
                    <img src={img3} alt="" className="news_sideBar_item_img" />
                    <div className="news_sideBar_item_content">
                        <div className="news_sideBar_item_title">«Цестус: Римский боец» — второй трейлер CG-аниме про гладиатора-боксёра</div>
                    </div>
                </div>
            </div>
            <div className="news_sideBar_el news_last">
            <div className="news_sideBar_title">Популярное</div>
                <div className="news_sideBar_item">
                    <img src={img1} alt="" className="news_sideBar_item_img" />
                    <div className="news_sideBar_item_content">
                        <div className="news_sideBar_item_title">«Цестус: Римский боец» — второй трейлер CG-аниме про гладиатора-боксёра</div>
                    </div>
                </div>
            </div>
            <div className="news_sideBar_el news_our">
            <div className="news_sideBar_title">Наши нововсти</div>
                <div className="news_sideBar_item">
                    <img src={img5} alt="" className="news_sideBar_item_img" />
                    <div className="news_sideBar_item_content">
                        <div className="news_sideBar_item_title">«Цестус: Римский боец» — второй трейлер CG-аниме про гладиатора-боксёра</div>
                    </div>
                </div>
                <div className="news_sideBar_item">
                    <img src={img6} alt="" className="news_sideBar_item_img" />
                    <div className="news_sideBar_item_content">
                        <div className="news_sideBar_item_title">«Цестус: Римский боец» — второй трейлер CG-аниме про гладиатора-боксёра</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSidebar
