import React from 'react'
import './../../../../style/admin/dataAD.css';
import { ExclamationCircleFilled, DeleteOutlined, EyeInvisibleOutlined   } from '@ant-design/icons';
import { Drawer } from 'antd';
import avatar1 from './../../../../assets/img/serials/1l.jpg';
import SerialsItemPanel from './SerialsItemPanel/SerialsItemPanel';
import { Popover, Button } from 'antd';

const content = (
    <div className='bB'>
        <div className="dataAD_options_modal bB">
            <div className="dataAD_options_modal_item tG"><EyeInvisibleOutlined /> Скрыть</div>
            <div className="dataAD_options_modal_item tR"><DeleteOutlined /> Удалить</div>
        </div>
    </div>
);

const SerialsAD = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [serialId, setSerialData] = React.useState('');
    const [vis, setVis] = React.useState("opa");

    const showDrawer = (Data) => {
        setVisible(true);
        setSerialData(Data)
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className='dataAD bE tA'>

            <div className="dataAD_header">
                <div className="dataAD_title tA">
                    Все видеоматериалы
                </div>
                <div className="dataAD_search">
                    <input type="text" className="dataAD_search_input fCG bE tW" placeholder='Поиск видеоматериалов' />
                </div>
            </div>


            {props.catalogList.map((item) => {
                return (
                    <div className="dataAD_item bE" key={item.id}>
                        <div className="dataAD_avatar_wrapper">
                            <img src={item.imageMin} alt="" className="dataAD_avarat" onClick={() => showDrawer(item.id)} />
                        </div>
                        <div className="dataAD_descr fCG">
                            <div className="dataAD_nick" onClick={() => showDrawer(item.id)}>{item.title}</div>
                            <div className="dataAD_name tG">Редактор: {item.director}</div>
                        </div>
                        <div className="dataAD_options tR">
                            <Popover placement="leftTop" title={false} content={content} trigger="click">
                                < ExclamationCircleFilled />
                            </Popover>
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
                <SerialsItemPanel item={props.catalogList[serialId - 1]} changeSerial={props.changeSerial} />
            </Drawer>

        </div>
    )
}

export default SerialsAD
