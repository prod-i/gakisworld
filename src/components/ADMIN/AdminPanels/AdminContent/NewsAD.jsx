import React from 'react'
import './../../../../style/admin/dataAD.css';
import { ExclamationCircleFilled } from '@ant-design/icons';
import avatar1 from './../../../../assets/img/serials/1l.jpg';
import avatar2 from './../../../../assets/img/serials/2l.jpg';
import avatar3 from './../../../../assets/img/serials/3l.jpg';
import avatar4 from './../../../../assets/img/serials/4l.jpg';
import avatar5 from './../../../../assets/img/serials/5l.jpg';
import avatar6 from './../../../../assets/img/serials/6l.jpg';
import avatar7 from './../../../../assets/img/serials/7l.jpg';
import avatar8 from './../../../../assets/img/serials/8l.jpg';
import avatar9 from './../../../../assets/img/serials/9l.jpg';
import avatar10 from './../../../../assets/img/serials/10l.jpg';

const NewsAD = () => {
    return (
        <div className='dataAD bE tA'>

            <div className="dataAD_header">
                <div className="dataAD_title tA">
                    Все новости
                </div>
                <div className="dataAD_search">
                    <input type="text" className="dataAD_search_input fCG bB t" placeholder='Поиск новостей' />
                </div>
            </div>


            <div className="dataAD_item bE">
                <div className="dataAD_avatar_wrapper">
                    <img src={avatar1} alt="" className="dataAD_avarat" />
                </div>
                <div className="dataAD_descr fCG">
                    <div className="dataAD_nick">«Девушки и танки» — первые сборы третьего фильма и реклама четвёртого'</div>
                    <div className="dataAD_name tG">Редактор: Александр Глухов</div>
                </div>
                <div className="dataAD_options tR">
                    < ExclamationCircleFilled />
                </div>
            </div>
            
        </div>
    )
}

export default NewsAD
