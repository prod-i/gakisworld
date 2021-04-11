import React, { useState } from 'react'
import '../../../style/catalog/novelty.css'
import '../../../style/color.css'
import '../../../style/fonts.css'
import { NavLink } from 'react-router-dom';

const Novelty = (props) => {
    const [hoverInfo, setHoverInfo] = useState(false);
    const novelty = props.novelty;
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
        <div className={novelty.noveltyVis ? "best" : "best bcg none"}>
            <div className="best_container container">
                <div className="novelty">
                    <div className="best_cards">
                        {novelty.noveltyList.list.map((card, key) => {
                            return (
                                <div className="best_card" key={key}>
                                    <img src={card.image} alt="" className="best_card_img"/>
                                    <NavLink exact to={'/serials/'+card.id} className='tW'><div className="best_card_title fCG op"  onMouseOver={ShowInfo} onMouseOut={HidenInfo}>{card.title}</div></NavLink>
                                </div>
                            );
                        })}
                    </div>
                    <div className="best_title fCG">Новинки</div>
                </div>
            </div>
        </div>
    )
}

export default Novelty
