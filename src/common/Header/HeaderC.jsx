import React from 'react';
import Header from './Header';

class HeaderC extends React.Component {

    render() {
        if (window.location.hash === '#/admin') return null 
        return <Header {...this.props}/>
    }
};

export default HeaderC;