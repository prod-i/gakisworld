import React from 'react'
import './../../../../../style/admin/NewsItem.css';
import { Checkbox } from 'antd';

const NewsItemPanel = (props) => {
    const [editMode, setEditMode] = React.useState(true);
    const item = props.item;

    const changePost = (id, item, value) => {
        props.changePost(id, item, value)
    }

    return (
        <div className='news_item'>
            <div className="news_item_title bE">
                {item.title}
                <p className='news_id tG'>#{item.id}</p>
                <div className="editMode bR" onClick={()=>setEditMode(!editMode)}>edit</div>
            </div>
            <div className="news_item_body">
                <div className="news_item_picture">
                    <div className="news_item_picture-img-warp">
                        <img src={item.imgM} alt="" className='news_item_picture-img' />
                    </div>
                </div>
                {editMode

                    ? <div className="news_item_descr">
                        <div className="news_item_descr_item">
                            <div className="news_item_descr_item_title tA">Название</div>
                            <div className="news_item_descr_item_title_value">{item.title}</div>
                        </div>
                        <div className="news_item_descr_item">
                            <div className="news_item_descr_item_title tA">Автор</div>
                            <div className="news_item_descr_item_title_value">{item.author}</div>
                        </div>
                        <div className="news_item_descr_item">
                            <div className="news_item_descr_item_title tA">Дата</div>
                            <div className="news_item_descr_item_title_value">{item.date.getFullYear()}.{item.date.getMonth()+1}.{item.date.getDate()} {item.date.getHours()}:{item.date.getMinutes()}</div>
                        </div>
                        <div className="news_item_descr_item">
                            <div className="news_item_descr_item_title tA">Описание</div>
                            <div className="news_item_descr_item_title_value">{item.descr}</div>
                        </div>
                    </div>

                    : <div className="news_item_descr">
                        <div className="news_item_descr_item">
                            <div className="news_item_descr_item_title tA">Название</div>
                            <input className="news_item_descr_item_input bG" onChange={(e) => changePost(item.id, 'title', e.target.value)}></input>
                        </div>
                        <div className="news_item_descr_item">
                            <div className="news_item_descr_item_title tA">Автор</div>
                            <input className="news_item_descr_item_input bG" onChange={(e) => changePost(item.id, 'author', e.target.value)}></input>
                        </div>
                        <div className="news_item_descr_item">
                            <div className="news_item_descr_item_title tA">Дата</div>
                            <input className="news_item_descr_item_input bG" onChange={(e) => changePost(item.id, 'date', e.target.value)}></input>
                        </div>
                        <div className="news_item_descr_item">
                            <div className="news_item_descr_item_title tA">Описание</div>
                            <input className="news_item_descr_item_input bG" onChange={(e) => changePost(item.id, 'descr', e.target.value)}></input>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default NewsItemPanel
