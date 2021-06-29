import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';

class NewsC extends React.Component {
    refrashProfile() {
        let userId = this.props.match.params.userId;

        if (!userId || userId === 'undefined' || userId === 'null') {
            userId = this.props.profileId;

            if (!userId  || userId === 'undefined' || userId === 'null') {
                this.props.history.push('/login');

            } else if (userId) {
                this.props.history.push(`/profile/${userId}`);
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
        console.log(isOwner);


        if (!options) {
            this.props.history.push(`/profile/${userId}/continue-view`)
        }

        return <Profile userId={userId} options={options} isOwner={isOwner}/>
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