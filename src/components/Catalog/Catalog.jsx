import React        from 'react';
import Novelty      from './Novelty/Novelty';
import Search       from './Search/Search';
import CatalogList  from './CatalogList/CatalogList';
import Footer       from '../../common/Footer/Footer';
import '../../style/catalog/catalog.css'

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