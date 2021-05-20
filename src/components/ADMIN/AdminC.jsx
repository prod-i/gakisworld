import   React        from 'react';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import Admin from './Admin';

class AdminC extends React.Component {
    componentDidMount(){
        document.title = "Admin Panel"
    }
    render() {
        return <Admin 
                    usersList={this.props.usersList}
               />
    }
};



let mapStateToProps = (state) => ({
    usersList: state.usersList,
});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (AdminC);