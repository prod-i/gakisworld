import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Profile from './Profile';

class NewsC extends React.Component {
    componentDidMount(){
        document.title = "Kaneki Ken"
    }
    render() {
        const userId = this.props.match.params.userId;
        const options = this.props.match.params.options;

        if(!userId){
            return <Redirect to='/login'/>
        }else if(!options){
            return <Redirect to={'/profile/' + userId + '/continue-view'}/>
        }
        
        return <Profile userId={userId} options={options}/>
    }
};

let mapStateToProps = (state) => ({
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(NewsC);