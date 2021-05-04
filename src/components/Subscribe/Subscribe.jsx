import React from 'react';
import '../../style/subscribe/subscribe.css'
import SubscribeCards from './SubscribeCards';


const Subscribe = (props) => {

    return (
        <div className="subscribe">
            <div className="subscribe_wrap">

                <SubscribeCards />
                
                <div className="subscribe_form_wrap bcg">
                    
                </div>

            </div>
        </div>
    );
};

export default Subscribe;