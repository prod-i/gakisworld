import React, { useState } from 'react'
import { Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import '../../../../style/catalog/search.css'
import '../../../../style/ant/select.css'
import '../../../../style/color.css'
import '../../../../style/fonts.css'
import { Select } from 'antd';
const { Option } = Select;

const AdvancedSearch = (props) => {
    const [ratingValue, setRatingValue] = useState([0, 10]);
    const updateRange = (e, data) => {
        setRatingValue(data);
    }
    const useStyles = makeStyles({
        root: {
            color: "#FF7070"
        },
    });
    const classes = useStyles();
    return (
        <div className={props.extendSearch ? "search__advanced bcg" : "search__advanced bcg none"}>
            <div className="search_container container">
                <div className="search__options_advanced">
                    <div className="selector__options_advanced">
                        <Select placeholder='Автор' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear>
                            {Object.keys(props.search.filters.author).map((value, key) => {
                                return <Option className={'select_elem_options fCG tD'} bordered={false} value={value} key={key}>{props.search.filters.author[value]}</Option>
                            })}
                        </Select>
                    </div>
                    <div className="selector__options_advanced">
                        <Select placeholder='Студия' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear>
                            {Object.keys(props.search.filters.studio).map((value, key) => {
                                return <Option className={'select_elem_options fCG tD'} bordered={false} value={value} key={key}>{props.search.filters.studio[value]}</Option>
                            })}
                        </Select>
                    </div>
                    <div className="selector__options_advanced">
                        <Select placeholder='Возрастной рейтинг' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear>
                            {Object.keys(props.search.filters.AgeRating).map((value, key) => {
                                return <Option className={'select_elem_options fCG tD'} bordered={false} value={value} key={key}>{props.search.filters.AgeRating[value]}</Option>
                            })}
                        </Select>
                    </div>
                    <div className="selector_rating">
                        <Slider value={ratingValue} onChange={updateRange} valueLabelDisplay="auto" min={0} max={10} className={classes.root} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdvancedSearch
