import React from 'react'
import '../../style/serialsPage.css'
import SerialsDescription from './Components/SerialsDescription'
import SeriesCards from './Components/SeriesCards'

// картинки
import img from './../../assets/img/serials/1b.jpg'


const SerialsPage = (props) => {

    const list = props.catalogList.catalogList.list;
    console.log(list);

    return (
        <div className='serialsPage fCG'>
            {list.map((item, key) => {
                if(item.id.toString() === props.SerialsId){
                    return (
                        <div className='serialsPage' key={key}>
                            {/* <img className='serialsPageBacgImg' src={item.imageBcg} alt="" /> */}
                            <video src={item.videoBcg} alt="" className="serialsPageBacgImg" autoplay='true' loop='true'/>
    
                            <SerialsDescription item={item}/>
    
                            <SeriesCards item={item.series}/>
                        </div>
                    )
                } else {return null}
            })}
        </div>
    )
}

export default SerialsPage
