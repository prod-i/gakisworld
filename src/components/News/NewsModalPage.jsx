import React from 'react'

const NewsModalPage = (props) => {
    const item = props.item;
    return (
        <div className="news_modal tW fCG" key={props.key}>
            <div className="news_modal_title">{item.title}</div>
            <div className="news_modal_body">
                <div className="ql-editor news_modal_content fCG" dangerouslySetInnerHTML={{ __html: item.text }}></div>
            </div>
            <div className="news_modal_options"></div>
        </div>
    )
}

export default NewsModalPage
