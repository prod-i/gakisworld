import React from 'react'
import './../../../../style/admin/dataAD.css';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Drawer } from 'antd';
import NewsItemPanel from './NewsItemPanel/NewsItemPanel';


const NewsAD = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [newsId, setnewsData] = React.useState('');

    const showDrawer = (Data) => {
        setVisible(true);
        setnewsData(Data)
    };
    const onClose = () => {
        setVisible(false);
    };
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

            {props.newsList.map((item) => {
                return (
                    <div className="dataAD_item bE" key={item.id}>
                        <div className="dataAD_avatar_wrapper">
                            <img src={item.imgM} alt="" className="dataAD_avarat" onClick={()=>showDrawer(item.id)} />
                        </div>
                        <div className="dataAD_descr fCG">
                            <div className="dataAD_nick" onClick={()=>showDrawer(item.id)}>{item.title}</div>
                            <div className="dataAD_name tG">Редактор: {item.author}</div>
                        </div>
                        <div className="dataAD_options tR">
                            < ExclamationCircleFilled />
                        </div>
                    </div>
                )
            }).reverse()}

            <Drawer
                title={false}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                className='fCG'
            >
                <NewsItemPanel item={props.newsList[newsId-1]} changePost={props.changePost}/>
            </Drawer>

        </div>
    )
}

export default NewsAD
