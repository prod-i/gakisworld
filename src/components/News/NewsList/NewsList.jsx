import React      from 'react'
import { Select } from 'antd';
import { Modal  } from 'antd';
import NewsPage from '../NewsPage';
const  { Option } = Select;

const NewsList = (props) => {
    const newsList = props.newsList.newsList;

    return (
        <div className="news_list">
            <div className="news_list_header">
                <div className="news_filtres">
                    <Select placeholder='Фильтр' size='large' bordered={false} className={'news_select'} allowClear>
                        <Option className={'news_select_options fCG'} bordered={false} value={1}>1</Option>
                        <Option className={'news_select_options fCG'} bordered={false} value={2}>2</Option>
                        <Option className={'news_select_options fCG'} bordered={false} value={3}>3</Option>
                    </Select>
                </div>
                <div className="news_search">
                    <input type="text" className="news_list_search fCG bB tW" placeholder='Поиск по новостям'/>
                </div>
            </div>
            <div className="news_list_body">
                {newsList.list.map((card, key) => {
                    return (
                        <div className="news_card_line bcgB" key={key}>
                            <div className="news_card_top">
                                <img src={card.imgM} alt="" className="news_card_img" onClick={() => props.showModal(card.title, card.text, card.imgM)} />
                            </div>
                            <div className="news_card_bottom">
                                <div className="news_card_head">
                                    <div className="news_card_title fCG" onClick={() => props.showModal(card.title, card.text, card.imgM)}>{card.title}</div>
                                </div>
                                <div className="news_card_descr tD">{card.descr}</div>
                                <div className="news_card_date tD">{card.author} {card.date}</div>
                            </div>
                        </div>
                    );
                })}
                <Modal
                    width    = '50%'
                    title    = {false}
                    footer   = {false}
                    visible  = {props.ModalVisible}
                    onCancel = {props.handleCancel}
                    bodyStyle= {{ background: 'rgb(33, 37, 41)', margin:'-40px 0'}}
                >
                   <NewsPage title={props.ModalTitle} img={props.ModalPicture} text={props.ModalContent}/>
                </Modal>
            </div>
        </div>
    )
}

export default NewsList
