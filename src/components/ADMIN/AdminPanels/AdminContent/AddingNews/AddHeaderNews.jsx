import React from 'react'
import './../../../../../style/admin/dataAD.css';
import { UploadOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import img from '../../../../../assets/img/serials/1m.jpg'


const AddHeaderNews = (props) => {
    const setPrevImg = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            props.handleState('imgM', reader.result)
        };
        reader.onerror = function() {
            console.log(reader.error);
          };
    }
    return (
        <div className="AddHeaderNews">
            <div className="AHN_title_wrap">
                <input type='text' className="AHN_title" maxLength={150} placeholder='Введите загаловок' value={props.title} onChange={(e)=>props.handleState('title', e.target.value)}/>
                <input type='text' className="AHN_author" placeholder={props.author} readOnly />
                <input type="datetime-local" className="AHN_date" value={props.date} placeholder='14/07/2021' onChange={(e)=>props.handleState('date', new Date(e.target.value))}/>
            </div>
            <div className="AHN_options_wrap">
                <div className="AHN_image_wrap">
                    {props.imgM
                        ? <img src={props.imgM} alt="" className='AHN_image' />
                        : <label className="AHN_image_upload">
                            <input id='imgM' type="file" hidden onChange={(e) => setPrevImg(e)} />
                            <div className="AHN_upload_title">Upload</div>
                            <UploadOutlined />
                        </label>
                    }
                </div>
                <div className="AHM_descr_wrap">
                    <textarea type='text' maxLength={350} className="AHM_descr" placeholder='Превью поста' value={props.descr} onChange={(e)=>props.handleState('descr', e.target.value)}/>
                    <div className="AHM_maxlength_area tG">max 350</div>
                </div>
            </div>
            <div className="AHM_sidebar">
                <div className="AHM_sidebar_item">
                    <Checkbox onChange={(e)=>props.handleState('important', e.target.checked)} className='AHM_sidebar_item_title tRP' checked={props.important}> Важные </Checkbox>
                </div>
                <div className="AHM_sidebar_item">
                    <Checkbox onChange={(e)=>props.handleState('popular', e.target.checked)} className='AHM_sidebar_item_title tRP' checked={props.popular}>Популярные</Checkbox>
                </div>
                <div className="AHM_sidebar_item">
                    <Checkbox onChange={(e)=>props.handleState('about', e.target.checked)} className='AHM_sidebar_item_title tRP' checked={props.about}>Наши новости</Checkbox>
                </div>
            </div>
        </div>
    );
}


export default AddHeaderNews