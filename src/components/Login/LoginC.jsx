import React from 'react';
import Login from './Login';

class LoginC extends React.Component {
    componentDidMount(){
        document.title = "Gaki`s World"
        window.scrollTo(0, 0);
    }
    render() {
        return <Login {...this.props}/>
    }
};

export default LoginC;