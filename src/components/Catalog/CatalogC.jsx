import React from 'react';
import Catalog from './Catalog';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

class CatalogC extends React.Component {
    render() {
        return <Catalog {...this.props}/>
    }
};

let mapStateToProps = (state) => ({
    search      :state.search,
    novelty     :state.novelty,
    catalogList : state.catalogList,
});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (CatalogC);