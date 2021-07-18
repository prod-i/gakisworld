import React from 'react'
import './../../../../style/admin/dataAD.css';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Drawer } from 'antd';
import UsersItemPanel from './UsersItemPanel/UsersItemPanel';

class UsersAD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            UserData: '',
        };
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    showDrawer(Data) {
        this.setState({ visible: true  })
        this.setState({ UserData: Data })
    };

    onClose() {
        this.setState({ visible: false })
    };
    render() {
        const usersList = this.props.usersList.usersList.list;
        return (
            <div className='dataAD bE tA'>
                <div className="dataAD_header">
                    <div className="dataAD_title tA">
                        Все пользователи
                    </div>
                    <div className="dataAD_search">
                        <input type="text" className="dataAD_search_input fCG bE tW" placeholder='Поиск пользователей' />
                    </div>
                </div>

                {usersList.map((item, key) => {
                    return (
                        <div className="dataAD_item bE" key={key}>
                            <div className="dataAD_avatar_wrapper">
                                <img src={item.photos.large} alt="" className="dataAD_avarat" onClick={() => this.showDrawer(item)} />
                            </div>
                            <div className="dataAD_descr fCG">
                                <div className="dataAD_nick" onClick={() => this.showDrawer(item)}>{item.nickname} <span className="userIdAD tG">#{item.userId}</span></div>
                                <div className="dataAD_name tG">{item.fullName}</div>
                            </div>
                            <div className="dataAD_options tR">
                                <ExclamationCircleFilled />
                            </div>
                        </div>
                    );
                }).reverse()}

                <Drawer
                    title={false}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    className='fCG'
                >
                    
                    <UsersItemPanel UserItem={this.state.UserData}/>
                    
                </Drawer>

            </div>
        )
    }
}

export default UsersAD
