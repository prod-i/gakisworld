import React from 'react'
import '../../../../style/profile/profileItem.css'
import { NavLink } from 'react-router-dom';

const PFavorites = ({ favorites }) => {
    console.log(favorites);
    return (
        <div>
            <div className="profile_content_title t">Избранные</div>
            <div className="profile_content_body">
                {favorites.map((item) => {
                    return (
                        <NavLink to={'/serials/' + item.id} className='profile_content_block bR t' key={item.id}>
                            <img src={item.imageMin} alt="" className="profile_continue_block_img" />
                        </NavLink>
                    )
                })}
                {favorites.length > 0 
                ? <></>
                : <div className="profile_no-content tG">
                    Список пуст
                  </div>
                }
            </div>
        </div>
    )
}

export default PFavorites
