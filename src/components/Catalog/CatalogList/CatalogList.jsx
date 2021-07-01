import React from 'react';
import CatalogBlock from './CatalogCards/CatalogBlock';
import CatalogLine from './CatalogCards/CatalogLine';
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import '../../../style/catalog/catalogList.css';


const CatalogList = (props) => {
    const [rtlLine, setRtlLine] = React.useState(false);

    const list = props.catalog.catalogList.list;

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
                        <span className="filters_catalog selector_s">
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
                        })
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
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default CatalogList
