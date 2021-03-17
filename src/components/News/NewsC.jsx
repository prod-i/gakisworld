import React from 'react';
import News from './News';

class NewsC extends React.Component {
    render() {
        return <News {...this.props}/>
    }
};

export default NewsC;