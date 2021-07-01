import React from 'react';
import { Select } from 'antd';
import { Slider } from '@material-ui/core';
import '../../../style/catalog/search.css';

const Search = (props) => {
    const [extendSearch, setExtendSearch] = React.useState(false); //toggle advanced search
    const [ratingValue, setRatingValue] = React.useState([0, 10]);
    const [yearsValue, setYearsValue] = React.useState([1970, 2021]);

    const { Option } = Select;

    const updateYears = (e, data) => {
        setYearsValue(data);
        props.Changefiltre('years', yearsValue);
    }
    
    const updateRating = (e, data) => {
        setRatingValue(data);
        props.Changefiltre('rating', ratingValue);
    }

    const searchValue = props.search.searchInput.searchValue;
    const searchType = props.search.searchInput.searchType;

    const searchValueChange = (e) => {
        props.ChangeSearchValue(e.target.value)
    }

    const check = (filtreName, e) => {
        if(e === undefined){
            props.Changefiltre(filtreName, '')
        } else {
            props.Changefiltre(filtreName, e)
        }
        console.log(e);
        console.log(searchType);
        
    }

    return (
        
        <div className="search">

            <div className="search_standart bB">
                <div className="search_container container">

                    <div className="search__form">
                        <div className="search_form_input_wrap">
                            <input className='fCG bD t' type="text" placeholder="Название" value={searchValue} onChange={searchValueChange}/>
                        </div>
                    </div>

                    <div className="search__options">
                        <div className="search__options_top">

                            <div className="selector_options">
                                {/* ФИЛЬТР: ТИП */}
                                <Select placeholder='Тип' style={{ width: 120 }} size='large' bordered={false}  className={'select_elem'} allowClear onChange={(e)=>check('searchType', e)}>
                                    {props.search.filters.type.map((value, key) => {
                                        return <Option className={'select_elem_options fCG tW'} bordered={false} value={value} key={key}>{value}</Option>
                                    })}
                                </Select>
                                {/* ФИЛЬТР: ТИП */}
                            </div>

                            <div className="selector_options">
                                {/* ФИЛЬТР: ЖАНР */}
                                <Select placeholder='Жанр' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear onChange={(e)=>check('genre', e)}>
                                    {props.search.filters.genre.map((value, key) => {
                                        return <Option className={'select_elem_options fCG tW'} bordered={false} value={value} key={key}>{value}</Option>
                                    })}
                                </Select>
                                {/* ФИЛЬТР: ЖАНР */}
                            </div>

                            <div className="selector_years t">
                                {/* ФИЛЬТР: ГОД */}
                                <Slider value={yearsValue} onChange={updateYears} valueLabelDisplay="auto" min={1970} max={2021} style={{ color: "#FF7070" }} />
                                {/* ФИЛЬТР: ГОД */}
                            </div>

                        </div>

                        <div className="search__options_bottom">

                            {/* ФИЛЬТР: ПОДПИСКА */}
                            {/* <div className="search__selector_checked">
                                <label className="label_checked"><input className='t fCG' type="checkbox" checked={props.search.noRequiredSubscribe} onChange={(e) => console.log(e.target.checked)} onClick={(e) => console.log(e.target.checked)} /><div className="search_checked_text t">БЕЗ ПОДПИСКИ</div></label>
                            </div> */}
                            {/* ФИЛЬТР: ПОДПИСКА */}

                            {/* ФИЛЬТР: РАСШИРЕННЫЙ ПОИСК */}
                            <div className="search__advanced_bottom tRP fCG" onClick={() => setExtendSearch(!extendSearch)}>
                                {extendSearch ? 'Скрыть' : 'Расширенный поиск'}
                            </div>
                            {/* ФИЛЬТР: РАСШИРЕННЫЙ ПОИСК */}

                        </div>
                    </div>

                </div>
            </div>

            <div className={extendSearch ? "search__advanced bB" : "search__advanced bB none"}>
            <div className="search_container container">
                <div className="search__options_advanced">
                    
                    <div className="selector__options_advanced">
                    {/* ФИЛЬТР: АВТОР */}
                        <Select placeholder='Автор' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear onChange={(e)=>check('author', e)}>
                            {props.search.filters.author.map((value, key) => {
                                return <Option className={'select_elem_options fCG tW'} bordered={false} value={value} key={key}>{value}</Option>
                            })}
                        </Select>
                    {/* ФИЛЬТР: АВТОР */}
                    </div>

                    <div className="selector__options_advanced">
                    {/* ФИЛЬТР: СТУДИЯ */}
                        <Select placeholder='Студия' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear onChange={(e)=>check('studio', e)}>
                            {props.search.filters.studio.map((value, key) => {
                                return <Option className={'select_elem_options fCG tW'} bordered={false} value={value} key={key}>{value}</Option>
                            })}
                        </Select>
                    {/* ФИЛЬТР: СТУДИЯ */}
                    </div>

                    <div className="selector__options_advanced">
                    {/* ФИЛЬТР: ВОЗРАСТНОЙ РЕЙТИНГ */}
                        <Select placeholder='Возрастной рейтинг' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear onChange={(e)=>check('AgeRating', e)}>
                            {props.search.filters.AgeRating.map((value, key) => {
                                return <Option className={'select_elem_options fCG tW'} bordered={false} value={value} key={key}>{value}</Option>
                            })}
                        </Select>
                    {/* ФИЛЬТР: ВОЗРАСТНОЙ РЕЙТИНГ */}
                    </div>

                    <div className="selector_rating">
                    {/* ФИЛЬТР: РЕЙТИНГ */}
                        <Slider value={ratingValue} onChange={updateRating} valueLabelDisplay="auto" min={0} max={10} style={{color: "#FF7070"}} />
                    {/* ФИЛЬТР: РЕЙТИНГ */}
                    </div>

                </div>
            </div>
        </div>

        </div>
    )
}

export default Search
