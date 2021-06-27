import React from 'react'
import '../../style/profile/profile.css'
import NavigationProfile from './NavigationProfile'
import ProfileContent from './ProfileInfo/ProfileContent';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className='profile tW bB'>
            
            <NavigationProfile userId={props.userId} options={props.options}/>

            <div className="profile_body">

                <ProfileInfo />

                <ProfileContent options={props.options}/>

            </div>
        </div>
    )
}

export default Profile
