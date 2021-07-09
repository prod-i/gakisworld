import React from 'react'
import SerialsPage from './SerialsPage';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RemoveProfileFavorites, SetProfileFavorites } from '../../redux/Profile/ProfileR';

class SerialsPageC extends React.Component {
    // componentDidMount(){
    //     document.title = "Токийский гуль"
    // }
    render() {
        return <SerialsPage {...this.props} 
        serialsId={this.props.match.params.serialsId} 
        seriesId={this.props.match.params.seriesId}
        SetProfileFavorites={this.props.SetProfileFavorites}
        RemoveProfileFavorites={this.props.RemoveProfileFavorites}
        favorites={this.props.favorites}
        />
    }
};


let mapStateToProps = (state) => ({
    catalog: state.catalog,
    favorites: state.profile.profile.favorites,

});

export default compose
    (
        connect(mapStateToProps, {SetProfileFavorites, RemoveProfileFavorites}),
        withRouter,
    )(SerialsPageC);
