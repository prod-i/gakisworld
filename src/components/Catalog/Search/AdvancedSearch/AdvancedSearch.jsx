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
                            <option value='films'>Фильмы</option>
                            <option value='films'>Сериалы</option>
                            <option value='films'>Анонсы</option>
                        </select>
                    </div>
                    <div className="selector__options_advanced">
                        <select defaultValue='def' className='bB tW fCG'>
                            <option value='def' disabled className='none'>Студия</option>
                            <option value='films'>1</option>
                            <option value='films'>2</option>
                            <option value='films'>3</option>
                        </select>
                    </div>
                    <div className="selector__options_advanced">
                        <select defaultValue='def' className='bB tW fCG'>
                            <option value='def' disabled className='none'>Возрастной рейтинг</option>
                            <option value='films'>1</option>
                            <option value='films'>2</option>
                            <option value='films'>3</option>
                        </select>
                    </div>
                    <div className="selector_rating">Рейтинг</div>
                </div>
            </div>
        </div>

    )
}

export default AdvancedSearch
