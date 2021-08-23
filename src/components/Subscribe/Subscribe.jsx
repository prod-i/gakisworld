import React from 'react';
import Footer from '../../common/Footer/Footer';
import '../../style/subscribe/subscribe.css'
import SubscribeCards from './SubscribeCards';


const Subscribe = (props) => {
    return (
        <div className="subscribe">
            <div className="subscribe_wrap">

                <SubscribeCards subList={props.subscribe.subList.list}/>
                
                <div className="subscribe_form_wrap bE">
                   
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Subscribe;