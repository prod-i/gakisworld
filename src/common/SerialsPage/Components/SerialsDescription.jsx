import React from 'react'
import { Rate }                from 'antd'             ;
import { HeartOutlined, HeartFilled, CrownOutlined, CrownFilled, SoundOutlined, SoundFilled} from '@ant-design/icons';

const SerialsDescription = (props) => {
    const [like, setLike]   = React.useState(props.tracked.includes(props.item));
    const [crown, setCrown] = React.useState(props.favorites.includes(props.item));
    const [sound, setSound] = React.useState(false);
    const item = props.item;

    const toggleOptions = (type) =>{
        if(type === 'like'){

            if(props.tracked.includes(item)){
                props.removeTracked(item.id)
                return setLike(false)
            } else {
                props.setTracked(item)
                return setLike(true)
            }
            

        } else if(type === 'crown') {

            if(props.favorites.includes(item)){
                props.removeFavorites(item.id)
                return setCrown(false)
            } else {
                props.setFavorites(item)
                console.log(item);
                return setCrown(true)
            }

        } else if(type === 'sound') {
            props.handleMuted(sound)
            return setSound(!sound)
        }
    }

    return (
        <div className="titleSerialsPage">
                <div className="nameSerialsPage">
                    {item.title}
                    <div className="serial_options">
                        <div className="serial_options-item tR"  onClick={()=>toggleOptions('like')}>
                            {like ? <HeartFilled /> : <HeartOutlined />}
                            <div className="serial_options-item-hover tRP">Отслеживать</div>
                        </div>
                        <div className="serial_options-item" onClick={()=>toggleOptions('crown')}>
                            {crown ? <CrownFilled className='tY'/> : <CrownOutlined className='tY'/>}
                            <div className="serial_options-item-hover tRP">Избранное</div>
                        </div>
                        <div className="serial_options-item" onClick={()=>toggleOptions('sound')}>
                            {sound ? <SoundFilled className='tR'/> : <SoundOutlined className='tR'/>}
                            <div className="serial_options-item-hover tRP">Включить звук</div>
                        </div>
                    </div>
                </div>
                <div className="serialsRating">
                    <Rate disabled defaultValue={0} count={10} value={Number(item.rating)} className='serialsRating_rating' />
                    <div className='rating'>{item.rating}</div>
                </div>
                <div className="detailsSearislPage">
                    <div className="details_title tG">
                        <div className="details_item" onClick={()=>props.handleMuted()}>Год</div>
                        <div className="details_item">Жанр</div>
                        <div className="details_item">Режиссер</div>
                        <div className="details_item">Студия</div>
                        <div className="details_item">Возрастные ограничения</div>
                    </div>
                    <div className="details_right tW">
                        <div className="details_item">{item.years}</div>
                        <div className="details_item">{item.genre}</div>
                        <div className="details_item">{item.director}</div>
                        <div className="details_item">{item.studio}</div>
                        <div className="details_item">{item.AgeRating}</div>
                    </div>
                </div>
                <div className="descrSearialsPage tW">{item.descr}</div>
            </div>
    )
}

export default SerialsDescription
