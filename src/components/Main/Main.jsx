import React        from 'react'                       ;
import Slider       from './Slider/Slider'             ;
import Banner       from '../../common/Banner/Banner'  ;
import ContinueView from './ContinueView/ContinueView' ;
import PrevNews     from './PrevNews/PrevNews'         ;
import Popular      from './Popular/Popular'           ;
import Footer       from '../../common/Footer/Footer'  ;
import '../../style/main/main.css'                     ;


const Main = (props)=> {
        return(
            <div className={props.mainVis ? 'main' : 'main none'}>
                <Slider 
                    slides          ={props.catalog.catalogList.list}
                    sliderVis       ={props.main.slider.sliderVis}
                    width           ={props.width}
                />

                <Banner 
                    bannerVis       ={props.main.banner.bannerVis}
                />

                <ContinueView 
                    list            ={props.main.continueView.list}
                    continueViewVis ={props.main.continueView.continueViewVis}
                />

                <PrevNews 
                    list            ={props.news.newsList.list}
                    prevNewsVis     ={props.main.prevNews.prevNewsVis}
                />

                <Popular 
                    list            ={props.catalog.catalogList.list}
                    popularVis      ={props.main.popular.popularVis}
                />

                <Footer />
            </div>
        );
};

export default Main;