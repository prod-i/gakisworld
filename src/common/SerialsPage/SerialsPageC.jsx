import React from 'react'
import SerialsPage from './SerialsPage';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

class SerialsPageC extends React.Component {
    render() {
        return <SerialsPage {...this.props}/>
    }
};


let mapStateToProps = (state) => ({
    
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(SerialsPageC);
