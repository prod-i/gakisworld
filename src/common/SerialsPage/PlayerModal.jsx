import React from 'react'
import { HeartOutlined, HeartFilled, CrownFilled, EyeOutlined } from '@ant-design/icons';
import '../../style/PlayerModal.css'

const PlayerModal = () => {
    const [like, setLike] = React.useState(<HeartOutlined/>)
    const handleLike = ()=> {
        setLike(<HeartFilled/>);
    }
    return (
            <div className="player_modal">
                <div className="player_modal_title tW fCG">Токийский Гуль - season - series</div>
                <div className="player_modal_videoplayer bB"></div>
                <div className="player_modal_options tR">
                <CrownFilled className='tY'/><div onClick={()=>handleLike()}>{like}</div><EyeOutlined />
                </div>
            </div>
    )
}

export default PlayerModal
