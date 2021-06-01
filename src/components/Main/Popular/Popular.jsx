import   React      from 'react'
import { NavLink }  from 'react-router-dom';
import { Rate    }  from 'antd';
import '../../../style/main/popular.css'


const Popular = (props) => {
    const list = props.list;

    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }

    return (
        <div className={props.popularVis ? "popular" : "popular vis"}>
            <div className="container">


                <div className="block_title fCG">
                    <div className="title_name t">Популярное Аниме</div>
                    <NavLink exact to={'/catalog'} className='title_more tRP fCG'>Перейти к каталогу</NavLink>
                </div>

                <div className="popular__cards">
                    {list.map((card, index) => {
                        if (card.popular) {
                            return (
                                <NavLink exact to={'/serials/'+card.id} className='popular_card bcgB tW' key={index}>
                                    <img src={card.imageMin} alt="" className="popular__card_img" />
                                    <div className="popular_hover fCG">
                                        <div className="popular_title">{card.title}</div>
                                        <Rate disabled defaultValue={2} count={10} value={card.rating} className={'popular_rating'}/>
                                        <div className="popular_detail_elem"><div className="popular_details_left tW">Год    </div><div className="popular_details_right tW">{card.years}</div></div>
                                        <div className="popular_detail_elem"><div className="popular_details_left tW">Жанр    </div><div className="popular_details_right tW">{card.genre}</div></div>
                                        <div className="popular_descr_content tW">{card.descr}</div>
                                    </div>
                                </NavLink>
                            )
                        } else {
                            return null;
                        }
                    }
                    )}
                </div>

                
            </div>
        </div>
    )
}

export default Popular
