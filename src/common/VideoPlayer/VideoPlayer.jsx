import React from 'react'
import '../../style/videoPlayer.css'
import video from '../../assets/img/serials/1v.mp4'

class VideoPlayer extends React.Component {
    
    render() {
        return (
            <div className='video_player_wrap t_'>
                <video controls className='video_player' play={()=>console.log(123)}>
                    <source src={video} type='video/mp4' controls />
                </video>
            </div>
        )
    }
}

export default VideoPlayer
