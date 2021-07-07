import React from 'react'
import '../../style/serialsPage.css'
import SerialsDescription from './Components/SerialsDescription'
import SeriesCards from './Components/SeriesCards'

// картинки
import img from './../../assets/img/serials/1b.jpg'


const SerialsPage = (props) => {
    const [muted, setMuted] = React.useState(true);
    const list = props.catalog.catalogList.list;
    const handleMuted = (sound) => {
        setMuted(sound)
    }
    return (
        <div className='serialsPage fCG'>
            {list.map((item, key) => {
                if(item.id.toString() === props.serialsId){
                    document.title = item.title
                    return (
                        <div className='serialsPage' key={key}>
                            {item.videoBcg
                            ? <video src={item.videoBcg} alt="" className="serialsPageBacgImg" autoPlay loop={true} muted={muted}></video>
                            : <img className='serialsPageBacgImg' src={item.imageBcg} alt="" />
                            }
                            
                            <SerialsDescription item={item} handleMuted={handleMuted} muted={muted}/>
    
                            <SeriesCards title={item.title} item={item.series} serialsId={props.serialsId} seriesId={props.seriesId}/>
                        </div>
                    )
                } else {return null}
            })}
        </div>
    )
}

export default SerialsPage
