import React from 'react'
import bcg from '../../../assets/img/serials/12b.jpg'
import img from '../../../assets/img/serials/13l.jpg'

const ProfileInfo = () => {
    return (
        <div className="profile_info">
            
            <img src={bcg} alt="" className='profile_backg' />

            <div className="profile_avatar">
                <img src={img} alt="" className="profile_avatar_img" />
            </div>

            <div className="profile_descr fCG">

                <div className="profile_info_item t">
                    <div className="profile_name">Kaneki Ken</div>
                </div>

                <div className="profile_info_item">
                    <div className="profile_info_left tA">Тип аккаунта</div>
                    <div className="profile_info_right tA">Стандартный</div>
                </div>

                <div className="profile_info_item">
                    <div className="profile_info_left tA">Дата регистрации</div>
                    <div className="profile_info_right tA">16.02.2001</div>
                </div>

                <div className="profile_info_item">
                    <div className="profile_info_left tA">Отслеживаемые сериалы</div>
                    <div className="profile_info_right tA">29</div>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo
