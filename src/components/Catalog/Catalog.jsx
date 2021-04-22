import React        from 'react';
import Footer       from '../../common/Footer/Footer';
import CatalogList  from './CatalogList/CatalogList';
import Novelty      from './Novelty/Novelty';
import Search       from './Search/Search';
import '../../style/catalog/catalog.css'
import '../../style/color.css'
import '../../style/fonts.css'

const Catalog = (props)=> {
        return(
            <div className="catalog">

                <Novelty novelty={props.novelty} catalogList={props.catalogList}/>

                <Search search={props.search}/>

                <CatalogList catalogList={props.catalogList}/>

                <Footer />
                
            </div>
        );
};

export default Catalog;