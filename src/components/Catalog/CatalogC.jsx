import   React        from 'react';
import   Catalog      from './Catalog';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

import {ChangeSearchValue} from '../../redux/Catalog/searchR'
import {Changefiltre} from '../../redux/Catalog/searchR'
import { getSerialsTC } from '../../redux/Catalog/catalogR';

class CatalogC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.screen.width,
            height: window.screen.height,
        };
        window.addEventListener("resize", this.resize.bind(this));
        this.resize.bind(this)
    }
    componentDidMount(){
        document.title = "Каталог"
        window.scrollTo(0, 0);
        this.props.getSerialsTC();
    }
    componentDidUpdate(prevProps){
        if(this.props.catalog.catalogList.list !== prevProps.catalog.catalogList.list)
        this.props.getSerialsTC();
    }
    resize() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }
    
    render() {
        return <Catalog {...this.props} 
        ChangeSearchValue={this.props.ChangeSearchValue} 
        Changefiltre={this.props.Changefiltre} 
        width={this.state.width}
        />
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