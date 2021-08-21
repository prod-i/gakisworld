import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Profile from './Profile';

class NewsC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.screen.width,
            height: window.screen.height,
        };
        window.addEventListener("resize", this.resize.bind(this));
        this.resize.bind(this)
    }

    resize() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    refrashProfile() {
        let userId = this.props.match.params.userId;

        if (!userId || userId === 'undefined' || userId === 'null') {
            userId = this.props.profileId;

            if (!userId  || userId === 'undefined' || userId === 'null') {
                return <Redirect to={'/login'}/>

            } else if (userId) {
                return <Redirect to={`/profile/${userId}`}/>
            }
            
        }
    }

    checkIsOwner(userId, profileId){
        if(userId === profileId){
            return true
        }
        return false
    }

    componentDidMount() {
        this.refrashProfile();
        window.scrollTo(0, 0);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refrashProfile();
    }
    render() {
        const userId = this.props.match.params.userId;
        const options = this.props.match.params.options;
        const profileId = this.props.profileId ? this.props.profileId.toString() : this.props.profileId;
        const isOwner = this.checkIsOwner(userId, profileId);
        console.log('Owned - ' + isOwner);
 

        if (!options) {
            return <Redirect to={`/profile/${userId}/continue-view`}/>
        }

        return <Profile userId={userId} options={options} isOwner={isOwner} profile={this.props.profile} width={this.state.width}/>
    }
};

let mapStateToProps = (state) => ({
    profile: state.profile,
    profileId: state.profile.profile.profileId,
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(NewsC);