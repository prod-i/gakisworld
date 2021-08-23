import React from 'react';
import CatalogBlock from './CatalogCards/CatalogBlock';
import CatalogLine from './CatalogCards/CatalogLine';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import '../../../style/catalog/catalogList.css';
import { Rate }    from 'antd';
import { NavLink } from 'react-router-dom';


const CatalogList = (props) => {
    const [rtlLine, setRtlLine] = React.useState(false);

    const list = props.catalog.catalogList.list;
    const listAPI = props.catalog.catalogList.listAPI;
    const size = () => {
        if(props.width <= 1024){
            return 3
        } else {
            return 4
        }
    }

    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }

    const rtlSwith = () => {
        return rtlLine ? setRtlLine(false) : setRtlLine(true)
    }

    let search = props.searchInput.searchValue.toUpperCase();
    let genre = props.searchInput.genre.toUpperCase();
    let searchType = props.searchInput.searchType.toUpperCase();
    let author = props.searchInput.author.toUpperCase();
    let studio = props.searchInput.studio.toUpperCase();
    let AgeRating = props.searchInput.AgeRating.toUpperCase();
    let yearsStart = props.searchInput.years[0];
    let yearsEnd = props.searchInput.years[1];
    let ratingStart = props.searchInput.rating[0];
    let ratingEnd = props.searchInput.rating[1];
    return (
        <div className="catalog_body">
            <div className="container">

                <div className="catalog_filtres">
                    <div className="title_name">
                        <span className="filters_catalog selector_s vis">
                            <select>
                                <option>По рейтингу</option>
                                <option>По названию</option>
                                <option>По длительности</option>
                            </select>
                        </span>
                    </div>
                    <div className="rtl tA" onClick={rtlSwith}>
                        {rtlLine ? <AppstoreOutlined /> : <MenuOutlined />}
                    </div>
                </div>
                <div className="catalog__cards">
                {
                    !Array.isArray(listAPI) || list.length <= 0 ? null : 
                    listAPI.map((card, key) => {
                        
                        return (
                            <NavLink exact to={'/serials/' + card.imdbID} className='catalog_card_block t' key={card.imdbID}>

                                <img src={card.Poster} alt=""  className="catalog__card_block_img"/>
                                <div className="catalog_block_hover fCG">
                                    {/*  Возрастной рейтинг */}  <div className={'catalog_block_premium'}>{card.AgeRating}</div>
                                    {/*  Название           */}  <div className="catalog_block_title tW">{card.Title}</div>
                                    {/*  Рейтинг            */}  <Rate disabled defaultValue={2} count={10} value={5.5} className={'catalog_block_rating'} />
                                    <div className="catalog_block_detail tW">
                                        {/*  Год                */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tG">Год       </div><div className="catalog_block_details_right tW">{card.Year}</div></div>
                                        {/*  Тип                */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tG">Тип       </div><div className="catalog_block_details_right tW">{card.Type}</div></div>
                                        {/*  Жанр               */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tG">Жанр      </div><div className="catalog_block_details_right tW">{'card.genre'}</div></div>
                                        {/*  Режессер           */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tG">Режессер  </div><div className="catalog_block_details_right tW">{'card.director'}</div></div>
                                        {/*  Cезонов            */}     <div className="catalog_detail_elem"><div className="catalog_block_details_left tG">Сезонов   </div><div className="catalog_block_details_right tW">{card.seasons ? card.seasons : '1'}</div></div>
                                    </div>
                                </div>

                            </NavLink>
                        )
                    })
                }
                </div>
                <div className="catalog__cards">
                    {!rtlLine
                        //  BLOCK 
                        ? list.map((card, key) => {
                            if (card.title.toUpperCase().includes(search)
                                & card.genre.toUpperCase().includes(genre)
                                & card.type.toUpperCase().includes(searchType)
                                & card.director.toUpperCase().includes(author)
                                & card.studio.toUpperCase().includes(studio)
                                & (card.AgeRating.toUpperCase() === AgeRating || AgeRating === '')
                                & (card.years >= yearsStart & card.years <= yearsEnd)
                                & (card.rating >= ratingStart & card.rating <= ratingEnd)
                            )
                                return (<CatalogBlock card={card} key={key} />)
                            else 
                                return null
                        }).reverse()
                        //  LINE 
                        : list.map((card, key) => {
                            if (card.title.toUpperCase().includes(search)
                                & card.genre.toUpperCase().includes(genre)
                                & card.type.toUpperCase().includes(searchType)
                                & card.director.toUpperCase().includes(author)
                                & card.studio.toUpperCase().includes(studio)
                                & (card.AgeRating.toUpperCase() === AgeRating || AgeRating === '')
                                & (card.years >= yearsStart & card.years <= yearsEnd)
                                & (card.rating >= ratingStart & card.rating <= ratingEnd)
                            )
                                return (<CatalogLine card={card} key={key} />)
                            else
                                return null
                        }).reverse()
                    }

                </div>
            </div>
        </div>
    )
}

export default CatalogList
