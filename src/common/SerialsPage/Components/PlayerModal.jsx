import React from 'react'
import { EyeOutlined } from '@ant-design/icons';
import '../../../style/PlayerModal.css'
import VideoPlayer from '../../VideoPlayer/VideoPlayer';

const PlayerModal = (props) => {
    const item = props.item;
    return (
            <div className="player_modal" key={props.key}>
                <div className="player_modal_title tW fCG"><span className="tRP">{props.title} - </span> {item.title}</div>
                <div className="player_modal_videoplayer bD">
                    <VideoPlayer />
                </div>
                <div className="player_modal_options tR">
                <div className="player_modal_space"></div>
                <div className="player_modal-views">
                    <EyeOutlined />
                    <div className="player_modal-views-hover fCG tA">10002 views</div>
                </div>
                </div>
            </div>
    )
}

export default PlayerModal
