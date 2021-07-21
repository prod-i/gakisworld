import React from 'react'
import { Checkbox } from 'antd';

const AvcItemDescrAD = (props) => {
    const handleSerial = props.handleSerial;

    return (
        <div className="AVC_item_wrap">
            <div className="AVC_item">
                <div className="AVC_item_title tA">Название</div>
                <input type="text" maxLength={60} className='AVC_item_input bG t' onChange={(e)=>handleSerial('title', e.target.value)}/>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Рейтинг</div>
                <input type="number" min='0' max='10' step="0.1" className='AVC_item_input bG t' onChange={(e)=>handleSerial('rating', e.target.value)}/>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Год</div>
                <input type="number" min='1970' max='2021' step="0.1" className='AVC_item_input bG t' onChange={(e)=>handleSerial('years', e.target.value)}/>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Жанр</div>
                <input type="text" maxLength={35} className='AVC_item_input bG t' onChange={(e)=>handleSerial('genre', e.target.value)}/>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Автор</div>
                <input type="text" maxLength={17} className='AVC_item_input bG t' onChange={(e)=>handleSerial('director', e.target.value)}/>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Студия</div>
                <input type="text" maxLength={17} className='AVC_item_input bG t' onChange={(e)=>handleSerial('studio', e.target.value)}/>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Тип</div>
                <input type="text" className='AVC_item_input bG t' onChange={(e)=>handleSerial('type', e.target.value)}/>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Эпизодов</div>
                <input type="text" className='AVC_item_input bG t' onChange={(e)=>handleSerial('episodes', e.target.value)}/>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Возрастное ограничение</div>
                <input type="text" className='AVC_item_input bG t' onChange={(e)=>handleSerial('AgeRating', e.target.value)}/>
            </div>
            <div className="AVC_item AVC_item_descr">
                <div className="AVC_item_title tA">Описание</div>
                <textarea type="text" maxLength={400} className='AVC_item_input_descr bG t' onChange={(e)=>handleSerial('descr', e.target.value)}/>
                <div className="maxlength_area tG">max 400</div>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Главный слайдер</div>
                <Checkbox onChange={(e)=>handleSerial('MainSlider', e.target.checked)} className='AVC_item_input avc_radio' checked={props.item.MainSlider}></Checkbox>
            </div>
            <div className="AVC_item">
                <div className="AVC_item_title tA">Популярное</div>
                <Checkbox onChange={(e)=>handleSerial('popular', e.target.checked)} className='AVC_item_input avc_radio' checked={props.item.popular}></Checkbox>
            </div>
        </div>
    )

}

export default AvcItemDescrAD
