import React from 'react'
import bcg from '../../../assets/img/serials/12b.jpg'
import img from '../../../assets/img/serials/9b.jpg'

const ProfileInfo = (props) => {
    const profile = props.profile.profile;
    {document.title = profile.nickName}
    return (
        <div className="profile_info">
            
            <img src={bcg} alt="" className='profile_backg' />

            <div className="profile_avatar">
                <img src={img} alt="" className="profile_avatar_img" />
            </div>

            <div className="profile_descr fCG">

                <div className="profile_info_item t">
                    <div className="profile_name">{profile.nickName}</div>
                </div>

                <div className="profile_info_item">
                    <div className="profile_info_left tA">ФИО</div>
                    <div className="profile_info_right tA">{profile.fullName}</div>
                </div>

                <div className="profile_info_item">
                    <div className="profile_info_left tA">Тип аккаунта</div>
                    <div className="profile_info_right tA">{profile.type}</div>
                </div>

                <div className="profile_info_item">
                    <div className="profile_info_left tA">Дата регистрации</div>
                    <div className="profile_info_right tA">{profile.RegData}</div>
                </div>

                <div className="profile_info_item">
                    <div className="profile_info_left tA">Отслеживаемые сериалы</div>
                    <div className="profile_info_right tA">{profile.tracked.length}</div>
                </div>

                <div className="profile_info_item">
                    <div className="profile_info_left tA">Избранные сериалы</div>
                    <div className="profile_info_right tA">{profile.favorites.length}</div>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo
