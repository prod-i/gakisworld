import React from 'react'

const NewsSidebar = (props) => {
    return (
        <div className="news_sideBar">
            <div className="news_sideBar_el news_important bcgB">Важно</div>
            <div className="news_sideBar_el news_last bcgB">     Последние</div>
            <div className="news_sideBar_el news_our bcgB">      Наши новости</div>
        </div>
    )
}

export default NewsSidebar
