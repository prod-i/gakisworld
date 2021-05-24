import React from 'react'

const NewsModalPage = (props) => {
    return (
        <div className="news_modal tW fCG">
            <div className="news_modal_title">{props.title}</div>
            <div className="news_modal_body">
                <img src={props.img} alt="" className="news_modal_img" />
                <div className="news_modal_content fCG">{props.text}</div>
                <img src={props.img} alt="" className="news_modal_img" />
            </div>
            <div className="news_modal_options"></div>
        </div>
    )
}

export default NewsModalPage
