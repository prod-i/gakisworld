import React from 'react'
import { Select } from 'antd';
import { NavLink } from 'react-router-dom';
import StImg from '../../../assets/icon/StImg.jpg'
const { Option } = Select;

const NewsList = (props) => {
    const newsList = props.news.newsList;
    const searchValue = props.news.newsList.search;
    const filters = props.news.filters;

    return (
        <div className={newsList.newsListVis ? "news_list" : 'none'}>
            <div className="news_list_header">
                <div className="news_filtres">
                    <Select placeholder='Фильтр' size='large' bordered={false} className={'news_select'} allowClear>
                        {filters.sorting.map((value, key) => {
                            return <Option className={'news_select_options fCG'} bordered={false} value={value} key={key}>{value}</Option>
                        })}
                        
                    </Select>
                </div>
                <div className="news_search">
                    <input type="text" className="news_list_search fCG bB tW" placeholder='Поиск по новостям' value={searchValue} onChange={(e)=>props.ChangeSearchValue(e.target.value)}/>
                </div>
            </div>
            <div className="news_list_body">
                {newsList.list.map((item, key) => {
                    if (item.title.toUpperCase().includes(searchValue.toUpperCase())){
                        const date = new Date(item.date)
                        return (
                            <NavLink to={'/news/'+ item.id} className="news_card_line bB" key={key}>
                                <div className="news_card_top">
                                    <img src={item.imgM ? item.imgM : StImg} alt="" className="news_card_img" />
                                </div>
                                <div className="news_card_bottom">
                                    <div className="news_card_head">
                                        <div className="news_card_title fCG t">{item.title}</div>
                                    </div>
                                    <div className="news_card_descr tA">{item.descr}</div>
                                    <div className="news_card_date tA">
                                        {item.author} {date.getHours()<10?'0':''}{date.getHours()}:{date.getMinutes()<10?'0':''}{date.getMinutes()} {date.getFullYear()}.{date.getMonth()+1}.{date.getDate()} 
                                    </div>
                                </div>
                            </NavLink>
                        );
                    } else {
                        return null
                    }
                }).reverse()}
            </div>
        </div>
    )
}

export default NewsList
