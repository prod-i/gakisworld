import   React        from 'react'
import { Select     } from 'antd';
import { Slider     } from '@material-ui/core'
import '../../../../style/ant/select.css'
import '../../../../style/catalog/search.css'
import '../../../../style/color.css'
import '../../../../style/fonts.css'

const AdvancedSearch = (props) => {
    const [ratingValue, setRatingValue] = React.useState([0, 10]);
    const { Option } = Select;
    const updateRange = (e, data) => {
        setRatingValue(data);
    }
    return (
        <div className={props.extendSearch ? "search__advanced bcg" : "search__advanced bcg none"}>
            <div className="search_container container">
                <div className="search__options_advanced">
                    <div className="selector__options_advanced">

                    {/* ФИЛЬТР: АВТОР */}
                        <Select placeholder='Автор' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear>
                            {Object.keys(props.search.filters.author).map((value, key) => {
                                return <Option className={'select_elem_options fCG tD'} bordered={false} value={value} key={key}>{props.search.filters.author[value]}</Option>
                            })}
                        </Select>
                    {/* ФИЛЬТР: АВТОР */}

                    </div>
                    <div className="selector__options_advanced">

                    {/* ФИЛЬТР: СТУДИЯ */}
                        <Select placeholder='Студия' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear>
                            {Object.keys(props.search.filters.studio).map((value, key) => {
                                return <Option className={'select_elem_options fCG tD'} bordered={false} value={value} key={key}>{props.search.filters.studio[value]}</Option>
                            })}
                        </Select>
                    {/* ФИЛЬТР: СТУДИЯ */}

                    </div>
                    <div className="selector__options_advanced">
                    
                    {/* ФИЛЬТР: ВОЗРАСТНОЙ РЕЙТИНГ */}
                        <Select placeholder='Возрастной рейтинг' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear>
                            {Object.keys(props.search.filters.AgeRating).map((value, key) => {
                                return <Option className={'select_elem_options fCG tD'} bordered={false} value={value} key={key}>{props.search.filters.AgeRating[value]}</Option>
                            })}
                        </Select>
                    {/* ФИЛЬТР: ВОЗРАСТНОЙ РЕЙТИНГ */}

                    </div>
                    <div className="selector_rating">

                    {/* ФИЛЬТР: РЕЙТИНГ */}
                        <Slider value={ratingValue} onChange={updateRange} valueLabelDisplay="auto" min={0} max={10} style={{color: "#FF7070"}} />
                    {/* ФИЛЬТР: РЕЙТИНГ */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdvancedSearch
