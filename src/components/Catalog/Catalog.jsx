import React from 'react';
import '../../style/catalog.css'
import '../../style/color.css'
import '../../style/fonts.css'
import Recommend from './Recommend/Recommend';
import Search from './Search/Search';

const Catalog = (props)=> {
        return(
            <div className="catalog">
                <Recommend />

                <Search />
            </div>
        );
};

export default Catalog;