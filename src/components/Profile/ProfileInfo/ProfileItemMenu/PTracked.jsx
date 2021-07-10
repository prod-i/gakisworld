import React from 'react'
import '../../../../style/profile/profileItem.css'
import { NavLink } from 'react-router-dom';

const PTracked = ({tracked}) => {
    return (
        <div>
            <div className="profile_content_title">Отслеживаемые</div>
            <div className="profile_content_body">
                {tracked.map((item) => {
                    return (
                        <NavLink to={'/serials/' + item.id} className='profile_content_block bR t' key={item.id}>
                            <img src={item.imageMin} alt="" className="profile_continue_block_img" />
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default PTracked
