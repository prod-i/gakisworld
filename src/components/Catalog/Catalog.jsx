import React        from 'react';
import Novelty      from './Novelty/Novelty';
import Search       from './Search/Search';
import CatalogList  from './CatalogList/CatalogList';
import Footer       from '../../common/Footer/Footer';
import '../../style/catalog/catalog.css'

const Catalog = (props)=> {
        return(
            <div className={props.catalog.catalogVis ? 'catalog' : 'none'}>

                <Novelty novelty={props.catalog.novelty} catalog={props.catalog}/>

                <Search search={props.search} ChangeSearchValue={props.ChangeSearchValue} Changefiltre={props.Changefiltre}/>

                <CatalogList catalog={props.catalog} searchInput={props.search.searchInput}/>

                <Footer />
                
            </div>
        );
};

export default Catalog;