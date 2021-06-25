import   React        from 'react';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import Admin from './Admin';
import {toggleIsMainVis} from '../../redux/Main/mainR.js'

class AdminC extends React.Component {
    componentDidMount(){
        document.title = "Admin Panel"
    }
    render() {
        return <Admin 
                    main            ={this.props.main}
                    usersList       ={this.props.usersList}
                    toggleIsMainVis = {this.props.toggleIsMainVis}
               />
    }
};



let mapStateToProps = (state) => ({
    usersList: state.usersList,
    main: state.main,
});

export default compose
(
    connect(mapStateToProps, {toggleIsMainVis}),
    withRouter,
)   (AdminC);