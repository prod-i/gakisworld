import React from 'react';
import '../../style/main.css'
import '../../style/color.css'
import '../../style/fonts.css'
import Slider from '../../common/Slider/Slider';
import Banner from '../../common/Banner/Banner';
import ContinueView from './ContinueView/ContinueView';
import PrevNews from './PrevNews/PrevNews';
import Popular from './Popular/Popular';
import Footer from '../../common/Footer/Footer';

const Main = (props)=> {
    debugger
        return(
            <div className='main'>
                <Slider slides={props.sliderData.slides}/>

                <Banner />

                <ContinueView />

                <PrevNews />

                <Popular />
            </div>
        );
};

export default Main;