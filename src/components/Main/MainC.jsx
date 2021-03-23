import React from 'react';
import Main from './Main';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setMain } from '../../redux/Main/mainReducer';

class MainC extends React.Component {
    render() {
        return <Main {...this.props}
               sliderData = {this.props.sliderData}
        />
    }
};



let mapStateToProps = (state) => ({
    main: state.main,
    sliderData: state.main.sliderData,
});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (MainC);