import React        from 'react';
import Slider       from './Slider/Slider';
import Banner       from '../../common/Banner/Banner';
import ContinueView from './ContinueView/ContinueView';
import PrevNews     from './PrevNews/PrevNews';
import Popular      from './Popular/Popular';
import '../../style/main/main.css'
import '../../style/color.css'
import '../../style/fonts.css'
import Footer from '../../common/Footer/Footer';

const Main = (props)=> {
        return(
            <div className='main'>
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
                    posts           ={props.prevNews.postsList.posts}
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