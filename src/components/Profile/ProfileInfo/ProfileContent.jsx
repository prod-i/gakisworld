import React from 'react'
import PArchive from './ProfileItemMenu/PArchive'
import PContinue from './ProfileItemMenu/PContinue'
import PEdit from './ProfileItemMenu/PEdit'
import PFavorites from './ProfileItemMenu/PFavorites'
import PTracked from './ProfileItemMenu/PTracked'
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
                                <PFavorites favorites={props.profile.profile.favorites}/>
                            )
                        case 'tracked':
                            return (
                                <PTracked     tracked={props.profile.profile.tracked}/>
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
                                <PSubscribeInfo type={props.profile.profile.type}/>
                            )
                        case 'subscribe-unplug':
                            return (
                                <PSubscribeUnplug />
                            )
                        case 'edit':
                            return (
                                <PEdit />
                            )
                        case 'notifications':
                            return (
                                <>Управление уведомлениями</>
                            )
                        case 'security':
                            return (
                                <>Безопасность</>
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
