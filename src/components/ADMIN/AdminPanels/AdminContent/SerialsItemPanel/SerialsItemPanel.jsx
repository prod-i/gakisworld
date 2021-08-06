import React from 'react'
import './../../../../../style/admin/SerialsItem.css';
import { Checkbox } from 'antd';
import { message } from 'antd';

const info = () => {
    message.success('Изменения сохранены');
};

const SerialsItemPanel = (props) => {
    const [editMode, setEditMode] = React.useState(false);
    const item = props.item;

    const changePost = (id, item, value) => {
        props.changeSerial(id, item, value)
    }

    return (
        <div className='serials_item bB t'>
            <div className="serials_item_title tR bE fCG">
                {item.title}
                <div className="serials_item_options">
                    <p className='serials_id tG'>#{item.id}</p>
                    {!editMode 
                        ? <div className="editMode bR tW" onClick={()=>setEditMode(true)}>edit</div>
                        : <div className="editMode bR tW" onClick={()=>setEditMode(false) + info()}>save</div>
                    } 
                </div>
            </div>

            {editMode
                ? <div className="serials_item_body">
                    <div className="serials_item_picture">
                        <div className="serials_item_picture-item">
                            {item.imageMin
                                ? <img src={item.imageMin} className='serials_item_picture-item-img' alt="" />
                                : <>1</>
                            }
                        </div>
                        <div className="serials_item_picture-item item-large">
                            {item.imageLarge
                                ? <img src={item.imageLarge} className='serials_item_picture-item-img' alt="" />
                                : <>1</>
                            }
                        </div>
                        <div className="serials_item_picture-item">
                            {item.imageBcg
                                ? <img src={item.imageBcg} className='serials_item_picture-item-img' alt="" />
                                : <>1</>
                            }
                        </div>
                        <div className="serials_item_picture-item">
                            {item.videoBcg
                                ? <video src={item.videoBcg} className='serials_item_picture-item-img' alt="" />
                                : <label className="serials_item_upload" htmlFor='vidB'>
                                    <input id='vidB' type="file" hidden onChange={(e) => console.log(e)} />
                                    <div className="">upload video</div>
                                </label>
                            }
                        </div>
                    </div>
                    <div className="serials_item_description">
                        <div className="serials_item_description_wrap">
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Название</div>
                                <input type='text' value={item.title} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'title', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Рейтинг</div>
                                <input type="number" min='0' max='10' step="0.1" value={item.rating} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'rating', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Год</div>
                                <input type="number" min='1970' max='2021' step="1" value={item.years} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'years', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Жанр</div>
                                <input type="text" maxLength={35} value={item.genre} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'genre', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Автор</div>
                                <input type="text" maxLength={17} value={item.director} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'director', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Студия</div>
                                <input type="text" maxLength={17} value={item.studio} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'studio', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Тип</div>
                                <input type="text" value={item.type} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'type', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Эпизоды</div>
                                <input type="text" value={item.episodes} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'episodes', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Возрастное ограничение</div>
                                <input type="text" value={item.AgeRating} className="serials_item_description_item_input bG" onChange={(e) => changePost(item.id, 'AgeRating', e.target.value)}></input>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Описание</div>
                                <textarea type="text" maxLength={400} wrap="soft | hard" value={item.descr} className="serials_item_description_item_textarea bG" onChange={(e) => changePost(item.id, 'descr', e.target.value)}></textarea>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Главный слайдер</div>
                                <Checkbox className='AVC_item_input avc_radio'></Checkbox>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Популярное</div>
                                <Checkbox className='AVC_item_input avc_radio'></Checkbox>
                            </div>
                        </div>
                        <div className="serials_item_series">
                            <div className="serials_item_series_title tA">Серии:</div>
                            <div className="serials_item_series_list">
                                <div className="serials_item_series-item series-upload">
                                    upload
                                </div>
                                {item.series.map((item) => {
                                    return (
                                        <div className="serials_item_series-item">
                                            <div className="serials_item_series-item-img-wrap">
                                                <img src={item.imgPrev} alt="" className='serials_item_series-item-img' />
                                            </div>
                                            <div className="serials_item_series-item_title bD">{item.title}</div>
                                        </div>
                                    )
                                }).reverse()}
                            </div>
                        </div>
                    </div>
                </div>

                : <div className="serials_item_body">
                    <div className="serials_item_picture">
                        <div className="serials_item_picture-item">
                            {item.imageMin
                                ? <img src={item.imageMin} className='serials_item_picture-item-img' alt="" />
                                : <>1</>
                            }
                        </div>
                        <div className="serials_item_picture-item item-large">
                            {item.imageLarge
                                ? <img src={item.imageLarge} className='serials_item_picture-item-img' alt="" />
                                : <>1</>
                            }
                        </div>
                        <div className="serials_item_picture-item">
                            {item.imageBcg
                                ? <img src={item.imageBcg} className='serials_item_picture-item-img' alt="" />
                                : <>1</>
                            }
                        </div>
                        <div className="serials_item_picture-item">
                            {item.videoBcg
                                ? <video src={item.videoBcg} className='serials_item_picture-item-img' alt="" />
                                : <label className="serials_item_upload" htmlFor='vidB'>
                                    <input id='vidB' type="file" hidden onChange={(e) => console.log(e)} />
                                    <div className="">upload video</div>
                                </label>
                            }
                        </div>
                    </div>
                    <div className="serials_item_description">
                        <div className="serials_item_description_wrap">
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Название</div>
                                <div className="serials_item_description_item_input">{item.title}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Рейтинг</div>
                                <div className="serials_item_description_item_input">{item.rating}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Год</div>
                                <div className="serials_item_description_item_input">{item.years}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Жанр</div>
                                <div className="serials_item_description_item_input">{item.genre}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Автор</div>
                                <div className="serials_item_description_item_input">{item.director}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Студия</div>
                                <div className="serials_item_description_item_input">{item.studio}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Тип</div>
                                <div className="serials_item_description_item_input">{item.type}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Эпизоды</div>
                                <div className="serials_item_description_item_input">{item.episodes}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Возрастное ограничение</div>
                                <div className="serials_item_description_item_input">{item.AgeRating}</div>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Главный слайдер</div>
                                <Checkbox className='AVC_item_input avc_radio'></Checkbox>
                            </div>
                            <div className="serials_item_description_item">
                                <div className="serials_item_description_item_name">Популярное</div>
                                <Checkbox className='AVC_item_input avc_radio'></Checkbox>
                            </div>
                        </div>
                        <div className="serials_item_series">
                            <div className="serials_item_series_title tA">Серии:</div>
                            <div className="serials_item_series_list">
                                <div className="serials_item_series-item series-upload">
                                    upload
                                </div>
                                {item.series.map((item) => {
                                    return (
                                        <div className="serials_item_series-item">
                                            <div className="serials_item_series-item-img-wrap">
                                                <img src={item.imgPrev} alt="" className='serials_item_series-item-img' />
                                            </div>
                                            <div className="serials_item_series-item_title bD">{item.title}</div>
                                        </div>
                                    )
                                }).reverse()}
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default SerialsItemPanel
