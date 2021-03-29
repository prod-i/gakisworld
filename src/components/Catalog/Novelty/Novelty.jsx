import React from 'react'
import '../../../style/novelty.css'
import '../../../style/color.css'
import '../../../style/fonts.css'

const Novelty = (props) => {
    const novelty = props.novelty
    return (
        <div className={novelty.noveltyVis ? "best" : "best none"}>
            <div className="best_container container">
                <div className="novelty">
                    <div className="best_cards">
                        {novelty.noveltyList.list.map((card, key) => {
                            return (
                                <div className="best_card">
                                    <img src={card.image} alt="" className="best_card_img" />
                                    
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
