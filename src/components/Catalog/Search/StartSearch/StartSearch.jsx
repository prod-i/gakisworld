import   React          from 'react'             ;
import { Select     }   from 'antd'              ;
import { Slider     }   from '@material-ui/core' ;
import '../../../../style/catalog/search.css'    ;


const StartSearch = (props) => {
    const [yearsValue, setYearsValue] = React.useState([1970, 2021]);
    const { Option } = Select;

    const updateRange = (e, data) => {
        setYearsValue(data);
    }
    
    return (
        <div className="search_standart bB">
            <div className="search_container container">

                <div className="search__form">
                    <div className="search_form_input_wrap">
                        <input className='fCG bD t' type="text" placeholder="Название" />
                    </div>
                    <div className="search_form_button_wrap">
                        <button className='bRh t fCG' id="search_btn">Поиск</button>
                        <button className='bRh t fCG' id="сlear_btn">Очистить</button>
                    </div>
                </div>

                <div className="search__options">
                    <div className="search__options_top">

                        <div className="selector_options">
                        {/* ФИЛЬТР: ТИП */}
                            <Select placeholder='Тип' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear>
                                {Object.keys(props.search.filters.type).map((value, key) => {
                                    return <Option className={'select_elem_options fCG tW'} bordered={false} value={value} key={key}>{props.search.filters.type[value]}</Option>
                                })}
                            </Select>
                        {/* ФИЛЬТР: ТИП */}
                        </div>

                        <div className="selector_options">
                        {/* ФИЛЬТР: ЖАНР */}
                            <Select placeholder='Жанр' style={{ width: 120 }} size='large' bordered={false} className={'select_elem'} allowClear>
                                {Object.keys(props.search.filters.genre).map((value, key) => {
                                    return <Option className={'select_elem_options fCG tW'} bordered={false} value={value} key={key}>{props.search.filters.genre[value]}</Option>
                                })}
                            </Select>
                        {/* ФИЛЬТР: ЖАНР */}
                        </div>

                        <div className="selector_years t">
                        {/* ФИЛЬТР: ГОД */}
                            <Slider value={yearsValue} onChange={updateRange} valueLabelDisplay="auto" min={1970} max={2021} style={{color: "#FF7070"}} />
                        {/* ФИЛЬТР: ГОД */}
                        </div>
                        
                    </div>

                    <div className="search__options_bottom">

                        {/* ФИЛЬТР: ПОДПИСКА */}
                            <div className="search__selector_checked">
                                <label className="label_checked"><input className='t fCG' type="checkbox" checked={props.search.noRequiredSubscribe} onChange={(e) => console.log(e.target.checked)} onClick={(e) => console.log(e.target.checked)} /><div className="search_checked_text t">БЕЗ ПОДПИСКИ</div></label>
                            </div>
                        {/* ФИЛЬТР: ПОДПИСКА */}
                        
                        {/* ФИЛЬТР: РАСШИРЕННЫЙ ПОИСК */}
                            <div className="search__advanced_bottom tRP" onClick={props.extendSearch ? () => props.setExtendSearch(false) : () => props.setExtendSearch(true)}>
                                {props.extendSearch ? 'Скрыть' : 'Расширенный поиск'}
                            </div>
                        {/* ФИЛЬТР: РАСШИРЕННЫЙ ПОИСК */}

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default StartSearch
