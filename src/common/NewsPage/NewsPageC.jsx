import React from 'react'
import NewsPage from './NewsPage'
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewsPageC extends React.Component {

    render(){
        return (
            <NewsPage {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(NewsPageC);
