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
                    slides          ={props.catalogList.catalogList.list}
                    sliderVis       ={props.slider.sliderVis}
                />

                <Banner 
                    bannerVis       ={props.banner.bannerVis}
                />

                <ContinueView 
                    list            ={props.continueView.viewList.list}
                    continueViewVis ={props.continueView.continueViewVis}
                />

                <PrevNews 
                    list            ={props.newsList.newsList.list}
                    prevNewsVis     ={props.prevNews.prevNewsVis}
                />

                <Popular 
                    list            ={props.catalogList.catalogList.list}
                    popularVis      ={props.popular.popularVis}
                />

                <Footer />
            </div>
        );
};

export default Main;