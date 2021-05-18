import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';

class NewsC extends React.Component {
    componentDidMount(){
        document.title = "{Вставить никнейм}"
    }
    render() {
        return <Profile />
    }
};

let mapStateToProps = (state) => ({
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(NewsC);