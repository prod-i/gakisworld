import   React        from 'react';
import   Catalog      from './Catalog';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

import {ChangeSearchValue} from '../../redux/Catalog/searchR'
import {Changefiltre} from '../../redux/Catalog/searchR'
import { getSerialsTC } from '../../redux/Catalog/catalogR';

class CatalogC extends React.Component {
    componentDidMount(){
        document.title = "Каталог"
        window.scrollTo(0, 0);
        this.props.getSerialsTC();
    }
    componentDidUpdate(prevProps){
        if(this.props.catalog.catalogList.list !== prevProps.catalog.catalogList.list)
        this.props.getSerialsTC();
    }
    
    render() {
        // console.log(this.props.catalog.catalogList.list);
        return <Catalog {...this.props} ChangeSearchValue={this.props.ChangeSearchValue} Changefiltre={this.props.Changefiltre}/>
    }
};

let mapStateToProps = (state) => ({
    search      :state.search,
    catalog     :state.catalog,
    
});

export default compose
(
    connect(mapStateToProps, {ChangeSearchValue, Changefiltre, getSerialsTC}),
    withRouter,
)   (CatalogC);