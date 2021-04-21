import   React     from 'react'
import { NavLink } from 'react-router-dom';
import { Rate    } from 'antd';
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
                                <NavLink exact to={'/serials/'+card.id} className="best_card tW" key={key}>
                                    <img src={card.image} alt="" className="best_card_img"/>
                                    <div className="best_card_hover fCG">
                                        <div className="best_card_title">{card.title}</div>
                                        <Rate disabled defaultValue={2} count={10} value={card.rating} className={'best_card_rating'}/>
                                        <div className="best_card_detail_elem"><div className="best_card_details_left tD">Год    </div><div className="best_card_details_right tW">{card.years}</div></div>
                                        <div className="best_card_detail_elem"><div className="best_card_details_left tD">Жанр   </div><div className="best_card_details_right tW">{card.genre}</div></div>
                                        <div className="best_card_detail_elem"><div className="best_card_details_left tD">Режессер    </div><div className="best_card_details_right tW">{card.director}</div></div>
                                        <div className="best_card_detail_elem"><div className="best_card_details_left tD">Тип    </div><div className="best_card_details_right tW">{card.type}</div></div>
                                        <div className="best_card_descr_content tW">{card.descr}</div>
                                    </div>
                                </NavLink>
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
