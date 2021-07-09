import React from 'react'
import StarRatings from 'react-star-ratings';
import { HeartOutlined, HeartFilled, CrownOutlined, CrownFilled, SoundOutlined, SoundFilled} from '@ant-design/icons';

const SerialsDescription = (props) => {
    const [like, setLike] = React.useState(false);
    const [crown, setCrown] = React.useState(props.favorites.includes(props.item));
    const [sound, setSound] = React.useState(false);
    const item = props.item;

    const toggleOptions = (type) =>{
        if(type === 'like'){
            return setLike(!like)
        } else if(type === 'crown') {
            if(props.favorites.includes(item)){
                props.RemoveProfileFavorites(item.id)
                return setCrown(false)
            } else {
                props.SetProfileFavorites(item)
                return setCrown(true)
            }

        } else if(type === 'sound') {
            props.handleMuted(sound)
            return setSound(!sound)
        }
    }

    console.log(props.favorites);

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
                    <StarRatings rating={item.rating} numberOfStars={10} starDimension={'30px'} starSpacing={'5px'} starRatedColor={'#FF7070'} starEmptyColor={'#999'} />
                    <div className='rating'>{item.rating}</div>
                </div>
                <div className="detailsSearislPage">
                    <div className="details_title tA">
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
