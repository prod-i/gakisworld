import React from 'react'
import { Modal  } from 'antd';
import NewsModalPage from '../NewsModalPage';

const NewsSidebar = (props) => {
    const newsList = props.newsList.newsList;
    return (
        <div className="news_sideBar">
            <div className="news_sideBar_el news_important">
                <div className="news_sideBar_title">Важно</div>
                {newsList.list.map((card, key) => {
                    if (card.important) {
                        return (
                            <div className="news_sideBar_item" onClick={() => props.showModal(card.title, card.text, card.imgM)} key={key}>
                                <img src={card.imgM} alt="" className="news_sideBar_item_img" />
                                <div className="news_sideBar_item_content">
                                    <div className="news_sideBar_item_title">{card.title}</div>
                                </div>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="news_sideBar_el news_last">
                <div className="news_sideBar_title">Популярное</div>
                {newsList.list.map((card, key) => {
                    if (card.popular) {
                        return (
                            <div className="news_sideBar_item" onClick={() => props.showModal(card.title, card.text, card.imgM)} key={key}>
                                <img src={card.imgM} alt="" className="news_sideBar_item_img" />
                                <div className="news_sideBar_item_content">
                                    <div className="news_sideBar_item_title">{card.title}</div>
                                </div>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="news_sideBar_el news_our">
                <div className="news_sideBar_title">Наши нововсти</div>
                {newsList.list.map((card, key) => {
                    if (card.about) {
                        return (
                            <div className="news_sideBar_item" onClick={() => props.showModal(card.title, card.text, card.imgM)} key={key}>
                                <img src={card.imgM} alt="" className="news_sideBar_item_img" />
                                <div className="news_sideBar_item_content">
                                    <div className="news_sideBar_item_title">{card.title}</div>
                                </div>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
            <Modal
                    width    = '50%'
                    title    = {false}
                    footer   = {false}
                    visible  = {props.ModalVisible}
                    onCancel = {props.handleCancel}
                    bodyStyle= {{ background: 'rgb(33, 37, 41)', margin:'-40px 0'}}
                >
                   <NewsModalPage title={props.ModalTitle} img={props.ModalPicture} text={props.ModalContent}/>
                </Modal>
        </div>
    )
}

export default NewsSidebar
