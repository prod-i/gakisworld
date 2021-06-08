import React, { useState } from 'react'
import '../../style/profile/profile.css'
import { Route } from 'react-router-dom';
import bcg from '../../assets/img/serials/12b.jpg'
import img from '../../assets/img/serials/13l.jpg'
import NavigationProfile from './NavigationProfile'

const Profile = () => {
    const [current, setCurrent] = useState('Продолжить просмотр');
    const handleClick = (e) => {
        console.log('click ', e.key);
        console.log(window.location.pathname);
        setCurrent(e.key);
    }
    return (
        <div className='profile tW bB'>
            
            <NavigationProfile  current={current} handleClick={handleClick}/>

            <div className="profile_body">
                <div className="profile_info">
                    <img src={bcg} alt="" className='profile_backg'/>
                    <div className="profile_avatar">
                        <img src={img} alt="" className="profile_avatar_img"/>
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
                <div className="profile_content t">
                    <div className="profile_content_title">{current}</div>
                    <div className="profile_content_body">
                        <Route exact path={'/profile/'+current }  render={()=><>{current}</>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
