import React from 'react';
import img from './../../assets/img/serials/19l.jpg'
import { Select } from 'antd';
import '../../style/news/news.css'
import '../../style/ant/select.css'
import '../../style/color.css'
import '../../style/fonts.css'
const { Option } = Select;

const News = (props) => {
    return (
        <div className="news">
            <div className="news_slider">
                <div className="news_slider_cards_wraper">
                    <div className="news_slider_card">
                        <img src={img} alt="" className='news_slider_card_img' />
                    </div>
                    <div className="news_slider_card">
                        <img src={img} alt="" className='news_slider_card_img' />
                    </div>
                    <div className="news_slider_card">
                        <img src={img} alt="" className='news_slider_card_img' />
                    </div>
                    <div className="news_slider_card">
                        <img src={img} alt="" className='news_slider_card_img' />
                    </div>
                    <div className="news_slider_card">
                        <img src={img} alt="" className='news_slider_card_img' />
                    </div>
                    <div className="news_slider_card">
                        <img src={img} alt="" className='news_slider_card_img' />
                    </div>
                    <div className="news_slider_card">
                        <img src={img} alt="" className='news_slider_card_img' />
                    </div>
                </div>
            </div>
            <div className="news_content container">
                <div className="news_list">
                    <div className="news_list_header">
                        <div className="news_filtres">
                            <Select placeholder='Фильтр' size='large' bordered={false} className={'news_select'} allowClear>
                                 <Option className={'news_select_options fCG'} bordered={false} value={1}>1</Option>
                                 <Option className={'news_select_options fCG'} bordered={false} value={2}>2</Option>
                                 <Option className={'news_select_options fCG'} bordered={false} value={3}>3</Option>
                            </Select>
                        </div>
                        <div className="news_search">123</div>
                    </div>
                    <div className="news_list_body bcgB">list</div>
                </div>
                <div className="news_sideBar">
                    <div className="news_sideBar_el news_important bcgB">Важно</div>
                    <div className="news_sideBar_el news_last bcgB">     Последние</div>
                    <div className="news_sideBar_el news_our bcgB">      Наши новости</div>
                </div>
            </div>
        </div>
    );
};

export default News;