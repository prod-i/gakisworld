import React from 'react'
import SerialsPage from './SerialsPage';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

class SerialsPageC extends React.Component {
    componentDidMount(){
        document.title = "Токийский гуль"
    }
    render() {
        return <SerialsPage {...this.props} SerialsId={this.props.match.params.serialsId}/>
    }
};


let mapStateToProps = (state) => ({
    catalogList : state.catalogList,
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(SerialsPageC);
