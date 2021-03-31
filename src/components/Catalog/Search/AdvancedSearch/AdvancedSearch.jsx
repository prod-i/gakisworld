import React, { useState } from 'react'
import { Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import '../../../../style/search.css'
import '../../../../style/color.css'
import '../../../../style/fonts.css'

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
                        <select defaultValue='def' className='bB tW fCG'>
                            <option value='def' disabled className='none'>Автор</option>
                            {Object.keys(props.search.filters.author).map((value, key) => {
                                return <option value='films' key={key}>{props.search.filters.author[value]}</option>
                            })}
                        </select>
                    </div>
                    <div className="selector__options_advanced">
                        <select defaultValue='def' className='bB tW fCG'>
                            <option value='def' disabled className='none'>Студия</option>
                            {Object.keys(props.search.filters.studio).map((value, key) => {
                                return <option value='films' key={key}>{props.search.filters.studio[value]}</option>
                            })}
                        </select>
                    </div>
                    <div className="selector__options_advanced">
                        <select defaultValue='def' className='bB tW fCG'>
                            <option value='def' disabled className='none'>Возрастной рейтинг</option>
                            {Object.keys(props.search.filters.AgeRating).map((value, key) => {
                                return <option value='films' key={key}>{props.search.filters.AgeRating[value]}</option>
                            })}
                        </select>
                    </div>
                    <div className="selector_rating">
                         <Slider value={ratingValue} onChange={updateRange} valueLabelDisplay="auto" min={0} max={10} className={classes.root}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdvancedSearch
