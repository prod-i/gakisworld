import React from 'react'
import { HeartOutlined, HeartFilled, CrownFilled, EyeOutlined } from '@ant-design/icons';
import '../../style/PlayerModal.css'

const PlayerModal = (props) => {
    const item = props.item;
    return (
            <div className="player_modal">
                <div className="player_modal_title tW fCG"><span className="tR">{props.title} - </span> {item.title}</div>
                <div className="player_modal_videoplayer bD"></div>
                <div className="player_modal_options tR">
                <CrownFilled className='tY'/><HeartOutlined/><EyeOutlined />
                </div>
            </div>
    )
}

export default PlayerModal
