import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import '../../style/profile/profile.css'
import NavigationProfile from './NavigationProfile'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className='profile tW bB'>
            
            <NavigationProfile userId={props.userId} options={props.options}/>

            <div className="profile_body">

                <ProfileInfo />

                <div className="profile_content t">
                    
                </div>
            </div>
        </div>
    )
}

export default Profile
