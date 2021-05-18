import React from 'react';
import Login from './Login';

class LoginC extends React.Component {
    componentDidMount(){
        document.title = "Gaki`s World"
    }
    render() {
        return <Login {...this.props}/>
    }
};

export default LoginC;