import React, { useState } from 'react'
import '../../../../style/search.css'
import '../../../../style/color.css'
import '../../../../style/fonts.css'
import { Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const StartSearch = (props) => {
    const [yearsValue, setYearsValue] = useState([1970, 2021]);
    const updateRange = (e, data) => {
        setYearsValue(data);
    }
    const useStyles = makeStyles({
        root: {
          color: "#FF7070"
        },
      });
      const classes = useStyles();
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
                            {Object.keys(props.search.filters.type).map((value, key) => {
                                return <option value='films' key={key}>{props.search.filters.type[value]}</option>
                            })}
                        </select>
                    </div>
                    <div className="selector_options">
                        <select defaultValue='def' className='bB tW'>    
                            <option value='def' disabled className='none'>Жанр</option>
                            {Object.keys(props.search.filters.genre).map((value, key) => {
                                return <option value='films' key={key}>{props.search.filters.genre[value]}</option>
                            })}
                        </select>
                    </div>

                    <div className="selector_years tW">
                        <Slider value={yearsValue} onChange={updateRange} valueLabelDisplay="auto" min={1970} max={2021} className={classes.root}/>
                    </div>
                </div>
                <div className="search__options_bottom">
                    <div className="search__selector_checked">
                        <label className="label_checked"><input className='tW fCG' type="checkbox"  checked={props.search.noRequiredSubscribe} onChange={(e)=>console.log(e.target.checked)} onClick={(e)=>console.log(e.target.checked)}/><div className="search_checked_text">БЕЗ ПОДПИСКИ</div></label>
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
