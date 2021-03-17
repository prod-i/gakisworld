import React from 'react';
import '../../style/main.css'
import '../../style/color.css'
import '../../style/fonts.css'
import Slider from '../../common/Slider/Slider';
import { SliderData } from '../../common/Slider/SliderData';
import Banner from '../../common/Banner/Banner';

const Main = (props)=> {
        return(
            <div className='main'>
                <Slider slides={SliderData}/>

                <Banner />
            </div>
        );
};

export default Main;