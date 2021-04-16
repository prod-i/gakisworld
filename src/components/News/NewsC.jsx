import React from 'react';
import News from './News';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewsC extends React.Component {
    render() {
        return <News {...this.props}/>
    }
};

let mapStateToProps = (state) => ({
    newsList: state.newsList,
});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (NewsC);