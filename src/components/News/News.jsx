import React from 'react';
import '../../style/news/news.css'
import '../../style/ant/select.css'
import '../../style/color.css'
import '../../style/fonts.css'
import NewsSlider from './NewsSlider/NewsSlider';
import NewsList from './NewsList/NewsList';
import NewsSidebar from './NewsSidebar/NewsSidebar';
import Footer from '../../common/Footer/Footer';


const News = (props) => {
    return (
        <div className="news">

            <NewsSlider newsList={props.newsList}/>

            <div className="news_content">
                
            <NewsList newsList={props.newsList}/>

            <NewsSidebar />


            </div>

            <Footer />
        
        </div>
    );
};

export default News;