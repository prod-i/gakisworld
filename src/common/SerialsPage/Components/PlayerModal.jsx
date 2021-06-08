import React from 'react'
import { HeartOutlined, HeartFilled, CrownFilled, EyeOutlined } from '@ant-design/icons';
import '../../../style/PlayerModal.css'
import VideoPlayer from '../../VideoPlayer/VideoPlayer';

const PlayerModal = (props) => {
    const item = props.item;
    return (
            <div className="player_modal" key={props.key}>
                <div className="player_modal_title tW fCG"><span className="tR">{props.title} - </span> {item.title}</div>
                <div className="player_modal_videoplayer bD">
                    <VideoPlayer />
                </div>
                <div className="player_modal_options tR">
                <div className="player_modal_space"></div><EyeOutlined />
                </div>
            </div>
    )
}

export default PlayerModal
