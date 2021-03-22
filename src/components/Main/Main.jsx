import React from 'react';
import '../../style/main.css'
import '../../style/color.css'
import '../../style/fonts.css'
import Slider from '../../common/Slider/Slider';
import Banner from '../../common/Banner/Banner';
import ContinueView from './ContinueView/ContinueView';

const Main = (props)=> {
    debugger
        return(
            <div className='main'>
                <Slider slides={props.sliderData.slides}/>

                <Banner />

                <ContinueView />
            </div>
        );
};

export default Main;