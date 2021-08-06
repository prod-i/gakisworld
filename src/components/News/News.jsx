import React from 'react';
import NewsSlider from './NewsSlider/NewsSlider';
import NewsList from './NewsList/NewsList';
import NewsSidebar from './NewsSidebar/NewsSidebar';
import Footer from '../../common/Footer/Footer';
import '../../style/news/news.css'
import '../../style/news/newsModal.css'


const News = (props) => {
    return (
        <div className={props.news.newsVis ? "news" : 'none'}>

            <NewsSlider  news={props.news} postId={props.postId} />

            <div className="news_content">

                <NewsList    news={props.news} ChangeSearchValue={props.ChangeSearchValue}/>

                <NewsSidebar news={props.news} />

            </div>

            <Footer />

        </div>
    );
};

export default News;