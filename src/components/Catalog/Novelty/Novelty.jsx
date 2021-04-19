import   React     from 'react'
import { NavLink } from 'react-router-dom';
import '../../../style/catalog/novelty.css'
import '../../../style/color.css'
import '../../../style/fonts.css'

const Novelty = (props) => {
    const novelty = props.novelty;
    if (!Array.isArray(novelty.noveltyList.list) || novelty.noveltyList.list.length <= 0) {
        return null
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
                                    <NavLink exact to={'/serials/'+card.id} className='tW'><div className="best_card_hover fCG">{card.title}</div></NavLink>
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
