import React from 'react'
import { NavLink } from 'react-router-dom';

const NewsSidebar = (props) => {
    const newsList = props.news.newsList;
    return (
        <div className={props.news.newsSidebar.newsSidebarVis ? "news_sideBar" : 'none'}>
            <div className="news_sideBar_el news_important">
                <div className="news_sideBar_title">Важно</div>
                {newsList.list.map((item, key) => {
                    if (item.important) {
                        return (
                            <NavLink to={"/news/" + item.id}  key={key}>
                                <div className="news_sideBar_item">
                                    <img src={item.imgM} alt="" className="news_sideBar_item_img" />
                                    <div className="news_sideBar_item_content">
                                        <div className="news_sideBar_item_title t">{item.title}</div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    } else {
                        return null;
                    }
                }).reverse()}
            </div>
            <div className="news_sideBar_el news_last">
                <div className="news_sideBar_title">Популярное</div>
                {newsList.list.map((item, key) => {
                    if (item.popular) {
                        return (
                            <NavLink to={"/news/" + item.id}  key={key}>
                                <div className="news_sideBar_item">
                                    <img src={item.imgM} alt="" className="news_sideBar_item_img" />
                                    <div className="news_sideBar_item_content">
                                        <div className="news_sideBar_item_title t">{item.title}</div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    } else {
                        return null;
                    }
                }).reverse()}
            </div>
            <div className="news_sideBar_el news_our">
                <div className="news_sideBar_title">Наши нововсти</div>
                {newsList.list.map((item, key) => {
                    if (item.about) {
                        return (
                            <NavLink to={"/news/" + item.id}  key={key}>
                                <div className="news_sideBar_item">
                                    <img src={item.imgM} alt="" className="news_sideBar_item_img" />
                                    <div className="news_sideBar_item_content">
                                        <div className="news_sideBar_item_title t">{item.title}</div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    } else {
                        return null;
                    }
                }).reverse()}
            </div>
        </div>
    )
}

export default NewsSidebar
