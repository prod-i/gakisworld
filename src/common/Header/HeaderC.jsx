import React from 'react';
import Header from './Header';

class HeaderC extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
};

export default HeaderC;