import React from 'react';
import Catalog from './Catalog';

class CatalogC extends React.Component {
    render() {
        return <Catalog {...this.props}/>
    }
};

export default CatalogC;