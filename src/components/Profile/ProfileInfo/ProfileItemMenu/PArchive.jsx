import React from 'react'
import '../../../../style/profile/profileItem.css'
import img from '../../../../assets/img/serials/14m.jpg';

const PArchive = () => {
    return (
        <div>
            <div className="profile_content_title t">Архив</div>
            <div className="profile_content_body">
                {/* <div className="profile_content_block bR">
                    <img src={img} alt="" className="profile_continue_block_img"/>
                </div> */}
                <div className="profile_no-content tG">
                    Вы ещё ничего не посмотрели
                </div>
            </div>
        </div>
    )
}

export default PArchive
