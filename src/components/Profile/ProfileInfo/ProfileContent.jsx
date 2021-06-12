import React from 'react'
import PArchive from './ProfileItemMenu/PArchive'
import PAvatar from './ProfileItemMenu/PAvatar'
import PBacg from './ProfileItemMenu/PBacg'
import PContinue from './ProfileItemMenu/PContinue'
import PEdit from './ProfileItemMenu/PEdit'
import PFavorites from './ProfileItemMenu/PFavorites'
import PPlans from './ProfileItemMenu/PPlans'
import PSubscribeControl from './ProfileItemMenu/PSubscribeControl'
import PSubscribeInfo  from './ProfileItemMenu/PSubscribeInfo'
import PSubscribeUnplug from './ProfileItemMenu/PSubscribeUnplug'

const ProfileContent = (props) => {
    return (
        <div className='profile_content'>

            <div className="profile_content_wrap">
                {(() => {
                    switch (props.options) {
                        case 'continue-view':
                            return (
                                <PContinue />
                            )
                        case 'favorites':
                            return (
                                <PFavorites />
                            )
                        case 'plans':
                            return (
                                <PPlans />
                            )
                        case 'archive':
                            return (
                                <PArchive />
                            )
                        case 'subscribe-control':
                            return (
                                <PSubscribeControl />
                            )
                        case 'subscribe-info':
                            return (
                                <PSubscribeInfo />
                            )
                        case 'subscribe-unplug':
                            return (
                                <PSubscribeUnplug />
                            )
                        case 'edit':
                            return (
                                <PEdit />
                            )
                        case 'avatar':
                            return (
                                <PAvatar />
                            )
                        case 'bacg':
                            return (
                                <PBacg />
                            )
                        default:
                            return (
                                <div className="profile_content_title">Тут ничего нет</div>
                            )
                    }
                })()}
            </div>

        </div>
    )
}

export default ProfileContent
