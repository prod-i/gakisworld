import React from 'react'
import '../../../../style/profile/profileItem.css'
import img from '../../../../assets/img/serials/10m.jpg';

const PFavorites = () => {
    return (
        <div>
            <div className="profile_content_title">Избранные</div>
            <div className="profile_continue_view">
                <div className="profile_continue_view_block bR">
                    <img src={img} alt="" className="profile_continue_view_img"/>
                </div>
                <div className="profile_continue_view_block bR">
                    <img src={img} alt="" className="profile_continue_view_img"/>
                </div>
                <div className="profile_continue_view_block bR">
                    <img src={img} alt="" className="profile_continue_view_img"/>
                </div>
                <div className="profile_continue_view_block bR">
                    <img src={img} alt="" className="profile_continue_view_img"/>
                </div>
                <div className="profile_continue_view_block bR">
                    <img src={img} alt="" className="profile_continue_view_img"/>
                </div>
                <div className="profile_continue_view_block bR">
                    <img src={img} alt="" className="profile_continue_view_img"/>
                </div>
                <div className="profile_continue_view_block bR">
                    <img src={img} alt="" className="profile_continue_view_img"/>
                </div>
                <div className="profile_continue_view_block bR">
                    <img src={img} alt="" className="profile_continue_view_img"/>
                </div>
            </div>
        </div>
    )
}

export default PFavorites
