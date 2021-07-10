import React from 'react'
import SerialsPage from './SerialsPage';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setFavorites, setTracked, removeFavorites, removeTracked } from '../../redux/Profile/ProfileR';

class SerialsPageC extends React.Component {
    render() {
        return <SerialsPage {...this.props} 
        serialsId       ={this.props.match.params.serialsId} 
        seriesId        ={this.props.match.params.seriesId }
        setFavorites    ={this.props.setFavorites          }
        setTracked      ={this.props.setTracked            }
        removeFavorites ={this.props.removeFavorites       }
        removeTracked   ={this.props.removeTracked         }
        favorites       ={this.props.favorites             }
        tracked         ={this.props.tracked               }
        />
    }
};


let mapStateToProps = (state) => ({
    catalog   : state.catalog,
    favorites : state.profile.profile.favorites,
    tracked   : state.profile.profile.tracked,
});

export default compose
    (
        connect(mapStateToProps, {setFavorites, setTracked, removeFavorites, removeTracked}),
        withRouter,
    )(SerialsPageC);
