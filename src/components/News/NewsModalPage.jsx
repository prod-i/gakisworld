import React from 'react'

const NewsModalPage = (props) => {
    const item = props.item;
    return (
        <div className="news_modal tW fCG" key={props.key}>
            <div className="news_modal_title">{item.title}</div>
            <div className="news_modal_body">
                <img src={item.imgM} alt="" className="news_modal_img" />
                <div className="news_modal_content fCG">{item.descr}</div>
                <img src={item.imgM} alt="" className="news_modal_img" />
            </div>
            <div className="news_modal_options"></div>
        </div>
    )
}

export default NewsModalPage
