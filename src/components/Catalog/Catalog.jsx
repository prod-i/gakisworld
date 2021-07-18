import React        from 'react';
import Novelty      from './Novelty/Novelty';
import Search       from './Search/Search';
import CatalogList  from './CatalogList/CatalogList';
import Footer       from '../../common/Footer/Footer';
import '../../style/catalog/catalog.css'
import ScrollTop from '../../common/ScrollTop/ScrollTop';
import Preloader from '../../common/Preloader/Preloader';


const Catalog = (props)=> {
        const [check, setCheck] = React.useState(false);
        setTimeout(()=>setCheck(true), 500)
        if(check){
            return(
            
                <div className={props.catalog.catalogVis ? 'catalog' : 'none'}>
    
                    <Novelty novelty={props.catalog.novelty} catalog={props.catalog}/>
    
                    <Search search={props.search} ChangeSearchValue={props.ChangeSearchValue} Changefiltre={props.Changefiltre}/>
    
                    <CatalogList catalog={props.catalog} searchInput={props.search.searchInput}/>
    
                    <Footer />
    
                    <ScrollTop scrollTo={970}/>
                    
                    
                </div>
            );
        } else {
            return <Preloader check/>
        }
};

export default Catalog;