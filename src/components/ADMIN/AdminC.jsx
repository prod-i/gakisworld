import   React        from 'react';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminControl } from './AdminControl';
import Admin from './Admin';

import {CONTROLMainVis} from '../../redux/Main/mainR.js'
import {CONTROLHeaderVis} from '../../redux/Header/headerR.js'
import {CONTROLFooterVis} from '../../redux/Footer/footerR.js'


class AdminC extends React.Component {
    componentDidMount(){
        // console.log(this.props.controlAD);
    }
    render() {
        const changeVis = {
            CONTROLMainVis   : this.props.CONTROLMainVis,
            CONTROLHeaderVis : this.props.CONTROLHeaderVis,
            CONTROLFooterVis : this.props.CONTROLFooterVis,
        }
        return <Admin 
                    usersList       ={this.props.usersList}
                    controlAD       ={this.props.controlAD}
                    changeVis       ={changeVis}
               />
    }
};



let mapStateToProps = (state) => ({
    usersList: state.usersList,
    main: state.main,
    controlAD: AdminControl(state),
});

export default compose
(
    connect(mapStateToProps, {
        CONTROLMainVis,
        CONTROLHeaderVis,
        CONTROLFooterVis,
    }),
    withRouter,
)   (AdminC);