import React from 'react';
import Subscribe from './Subscribe';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

class SubscribeC extends React.Component {
    componentDidMount(){
        document.title = "Подписка"
    }
    render() {
        return <Subscribe {...this.props}/>
    }
};

let mapStateToProps = (state) => ({
    subscribe : state.subscribe,
});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (SubscribeC);
