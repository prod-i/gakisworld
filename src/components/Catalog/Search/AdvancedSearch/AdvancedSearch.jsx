import React from 'react'
import '../../../../style/search.css'
import '../../../../style/color.css'
import '../../../../style/fonts.css'

const AdvancedSearch = (props) => {
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
                    <div className="selector_rating">Рейтинг</div>
                </div>
            </div>
        </div>

    )
}

export default AdvancedSearch
