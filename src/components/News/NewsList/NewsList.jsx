import React from 'react'
import { Select } from 'antd';
import { NavLink } from 'react-router-dom';
const { Option } = Select;

const NewsList = (props) => {
    const newsList = props.news.newsList;

    return (
        <div className={newsList.newsListVis ? "news_list" : 'none'}>
            <div className="news_list_header">
                <div className="news_filtres">
                    <Select placeholder='Фильтр' size='large' bordered={false} className={'news_select'} allowClear>
                        <Option className={'news_select_options fCG'} bordered={false} value={1}>1</Option>
                        <Option className={'news_select_options fCG'} bordered={false} value={2}>2</Option>
                        <Option className={'news_select_options fCG'} bordered={false} value={3}>3</Option>
                    </Select>
                </div>
                <div className="news_search">
                    <input type="text" className="news_list_search fCG bB tW" placeholder='Поиск по новостям' />
                </div>
            </div>
            <div className="news_list_body">
                {newsList.list.map((item, key) => {
                    return (
                        <NavLink to={'/news/'+ item.id} className="news_card_line bB" key={key}>
                            <div className="news_card_top">
                                <img src={item.imgM} alt="" className="news_card_img" />
                            </div>
                            <div className="news_card_bottom">
                                <div className="news_card_head">
                                    <div className="news_card_title fCG t">{item.title}</div>
                                </div>
                                <div className="news_card_descr tA">{item.descr}</div>
                                <div className="news_card_date tA">{item.author} {item.date}</div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    )
}

export default NewsList
