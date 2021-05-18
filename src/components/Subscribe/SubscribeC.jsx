import React from 'react';
import Subscribe from './Subscribe';

class SubscribeC extends React.Component {
    componentDidMount(){
        document.title = "Подписка"
    }
    render() {
        return <Subscribe {...this.props}/>
    }
};

export default SubscribeC;