import React from 'react';
import '../../style/catalog.css'
import '../../style/color.css'
import '../../style/fonts.css'
import Novelty from './Novelty/Novelty';
import Search from './Search/Search';

const Catalog = (props)=> {
    debugger
        return(
            <div className="catalog">
                <Novelty novelty={props.novelty}/>

                <Search search={props.search}/>
            </div>
        );
};

export default Catalog;