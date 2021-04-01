import React, { useState } from 'react'
import '../../../style/catalogList.css'
import '../../../style/color.css'
import '../../../style/fonts.css'


const CatalogList = (props) => {
    const [hoverInfo, setHoverInfo] = useState(false);
    const ShowInfo = (e) => {
        setHoverInfo(true)
        CheckHover(e)
    }
    const HidenInfo = (e) => {
        setHoverInfo(false)
        CheckHover(e)
    }
    const CheckHover = (e) => {
        if(hoverInfo){
            e.target.classList.add('op')
        } else {
            e.target.classList.remove('op')
        }
    }
    return (
        <div className="catalog_body">
            <div className="container">
                <div className="catalog_filtres">
                    <div className="title_name">
                        <span className="filters_catalog selector_s">
                            <select>
                                <option>По рейтингу</option>
                                <option>По названию</option>
                                <option>По длительности</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className="catalog__cards">
                    {props.catalogList.catalogList.list.map((card, key) => {
                        return (
                            <div className="catalog_card" key={key}>
                                <img src={card.imageMin} alt="" className="catalog__card_img" />
                                <div className="catalog_title fCG op" onMouseOver={ShowInfo} onMouseOut={HidenInfo}>{card.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default CatalogList
