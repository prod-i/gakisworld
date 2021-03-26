import React from 'react'
import '../../../../style/search.css'
import '../../../../style/color.css'
import '../../../../style/fonts.css'

const StartSearch = (props) => {
    return (
        <div className="search_standart bcg">
        <div className="search_container container">
            <div className="search__form">
                <div className="search_form_input_wrap">
                    <input className='fCG bB tW' type="text" placeholder="Название"/>
                </div>
                <div className="search_form_button_wrap">
                    <button className='bRh tW fCG' id="search_btn">Поиск</button>
                    <button className='bRh tW fCG' id="сlear_btn">Очистить</button>
                </div>
            </div>

            <div className="search__options">
                <div className="search__options_top">
                    <div className="selector_options">
                        <select defaultValue='def' className='bB tW'>    
                            <option value='def' disabled className='none'>Тип</option>
                            <option value='films'>Все</option>
                            <option value='films'>Фильмы</option>
                            <option value='films'>Сериалы</option>
                            <option value='films'>Анонсы</option>
                        </select>
                    </div>
                    <div className="selector_options">
                        <select defaultValue='def' className='bB tW'>    
                            <option value='def' disabled className='none'>Жанр</option>
                            <option value='films'>1</option>
                            <option value='films'>2</option>
                            <option value='films'>3</option>
                        </select>
                    </div>

                    <div className="selector_years"> Года</div>
                </div>
                <div className="search__options_bottom">
                    <div className="search__selector_checked">
                        <label className="label_checked"><input className='tW fCG' type="checkbox"  onClick={(e)=>console.log(e.target.checked)}/><div className="search_checked_text">БЕЗ ПОДПИСКИ</div></label>
                    </div>
                    <div className="search__advanced_bottom tRP" onClick={props.extendSearch ? ()=>props.setExtendSearch(false) : ()=>props.setExtendSearch(true)}>
                        {props.extendSearch ? 'Скрыть' : 'Расширенный поиск'}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StartSearch
