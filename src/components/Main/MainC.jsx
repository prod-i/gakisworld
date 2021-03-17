import React from 'react';
import Main from './Main';

class MainC extends React.Component {
    render() {
        return <Main {...this.props}/>
    }
};

export default MainC;