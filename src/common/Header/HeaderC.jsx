import React from 'react';
import Header from './Header';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HeaderC extends React.Component {

    render() {
        if (window.location.hash === '#/admin') return null
        return <Header {...this.props}/>
    }
};

let mapStateToProps = (state) => ({
    profileId: state.profile.profile.profileId,
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(HeaderC);