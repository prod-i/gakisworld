import React        from 'react';
import Slider       from './Slider/Slider';
import Banner       from '../../common/Banner/Banner';
import ContinueView from './ContinueView/ContinueView';
import PrevNews     from './PrevNews/PrevNews';
import Popular      from './Popular/Popular';
import '../../style/main.css'
import '../../style/color.css'
import '../../style/fonts.css'

const Main = (props)=> {
        return(
            <div className='main'>
                <Slider 
                    slides          ={props.slider.sliderData.slides}
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
                    list            ={props.popular.popularList.list}
                    popularVis      ={props.popular.popularVis}
                />
            </div>
        );
};

export default Main;