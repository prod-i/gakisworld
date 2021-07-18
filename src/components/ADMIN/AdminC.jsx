import   React        from 'react';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { AdminControl } from './AdminControl';
import Admin from './Admin';


class AdminC extends React.Component {
    componentDidMount(){
        document.title = 'Admin panel'
        window.scrollTo(0, 0);
    }
    render() {
        return <Admin 
                    usersList       ={this.props.usersList}
                    catalogList     ={this.props.catalogList}
                    newsList        ={this.props.newsList}
               />
    }
};



let mapStateToProps = (state) => ({
    usersList   : state.usersList,
    main        : state.main,
    catalogList : state.catalog.catalogList.list,
    newsList : state.news.newsList.list,
});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (AdminC);