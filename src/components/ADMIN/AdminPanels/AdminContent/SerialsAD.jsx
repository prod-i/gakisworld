import React from 'react'
import './../../../../style/admin/dataAD.css';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Drawer } from 'antd';
import avatar1 from './../../../../assets/img/serials/1l.jpg';

const SerialsAD = (props) => {
    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
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
                            <img src={item.imageMin} alt="" className="dataAD_avarat" onClick={showDrawer} />
                        </div>
                        <div className="dataAD_descr fCG">
                            <div className="dataAD_nick" onClick={showDrawer}>{item.title}</div>
                            <div className="dataAD_name tG">Редактор: {item.director}</div>
                        </div>
                        <div className="dataAD_options tR">
                            < ExclamationCircleFilled />
                        </div>
                    </div>
                )
            }).reverse()}

            <Drawer
                title="Клинок рассекающий демонов"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                className='fCG'
            >
                <div className="dataAD_img_wrap"><img src={avatar1} alt="" className="dataAD_img" /></div>
                <p>Информация</p>
                <p>Информация</p>
                <p>Информация</p>
                <p>Информация</p>
                <p>Информация</p>
                <p>Информация</p>

            </Drawer>

        </div>
    )
}

export default SerialsAD
