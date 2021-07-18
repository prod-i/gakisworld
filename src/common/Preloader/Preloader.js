import React from 'react';
import '../../style/preloader.css'


const Preloader = (props) => {

    return (
        <div class="preloader">
            <div class="preloader__row">
                <div class="preloader__item"></div>
                <div class="preloader__item"></div>
            </div>
        </div>
    );
};

export default Preloader;