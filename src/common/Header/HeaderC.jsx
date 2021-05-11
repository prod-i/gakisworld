import React from 'react';
import { Redirect } from 'react-router';
import Header from './Header';

class HeaderC extends React.Component {

    render() {
        if (window.location.hash === '#/admin') return null 
        return <Header {...this.props}/>
    }
};

export default HeaderC;