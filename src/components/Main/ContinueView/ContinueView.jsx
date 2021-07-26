import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../style/main/continueView.css';
import img from '../../../assets/img/serials/1m.jpg'

const ContinueView = (props) => {
    const list = props.list;
    const size = () => {
        if (props.width <= 768) {
            return 2
        } else {
            return 4
        }
    }
    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }

    return (
        <div className={props.continueViewVis ? "continue__view" : "continue__view vis"}>

            <div className="block_title">
                <NavLink exact to={'/profile/1'} className='title_name fCG'>Продолжить просмотр</NavLink>
                <NavLink exact to={'/profile/1'} className='title_more fCG tRP'>Посмотреть список полностью</NavLink>
            </div>

            <div className="continue__view_card">
                {list.map((item, key) => {
                    if (list.length - size() <= key) {
                        return (
                            <div className="continue_card bE" key={key}>
                                <img src={img} alt="" className="card_img" />
                                <div className="progress b_">
                                    <div className="progress_total"></div>
                                </div>
                            </div>
                        )
                    } else {
                        return null
                    }
                }
                )}
            </div>

        </div>
    )
}

export default ContinueView
