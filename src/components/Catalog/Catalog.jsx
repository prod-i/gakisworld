import React from 'react';
import Banner from '../../common/Banner/Banner';
import '../../style/catalog.css'
import '../../style/color.css'
import '../../style/fonts.css'
import CatalogList from './CatalogList/CatalogList';
import Novelty from './Novelty/Novelty';
import Search from './Search/Search';

const Catalog = (props)=> {
        return(
            <div className="catalog">
                <Novelty novelty={props.novelty}/>

                <Search search={props.search}/>

                <CatalogList catalogList={props.catalogList}/>
            </div>
        );
};

export default Catalog;