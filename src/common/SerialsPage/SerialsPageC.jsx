import React from 'react'
import SerialsPage from './SerialsPage';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setFavorites, setTracked, removeFavorites, removeTracked } from '../../redux/Profile/ProfileR';

class SerialsPageC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.screen.width,
            height: window.screen.height,
        };
        window.addEventListener("resize", this.resize.bind(this));
        this.resize.bind(this)
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    resize() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

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
        width           ={this.state.width                 }
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
