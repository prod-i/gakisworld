import React, { useState } from 'react'
import '../../style/profile/profile.css'
import '../../style/color.css'
import '../../style/fonts.css'
import { Menu } from 'antd';
import { ProfileOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const Profile = () => {
    const [current, setCurrent] = useState(1);
    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }
    return (
        <div className='profile tW bcgE'>
        <Menu
          theme={'dark'}
          onClick={handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1','sub2','sub3']}
          selectedKeys={[current]}
          mode="inline"
          className='profile_menu_nav'
        >
          <SubMenu key="sub1" icon={<ProfileOutlined />} title="Профиль">
            <Menu.Item key="1">Продолжить просмотр</Menu.Item>
            <Menu.Item key="2">Избранное</Menu.Item>
            <Menu.Item key="3">В планах</Menu.Item>
            <Menu.Item key="4">Просмотренные</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Управление подпиской" className='tW'>
            <Menu.Item key="5">Сменить тип подписки</Menu.Item>
            <Menu.Item key="6">Информация о подписке</Menu.Item>
            <Menu.Item key="7" className='tR'>Отказаться от подписки</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<SettingOutlined />} title="Настройки" className='tW'> 
            <Menu.Item key="8">Редактировать профиль</Menu.Item>
            <Menu.Item key="9">Сменить атавар</Menu.Item>
            <Menu.Item key="10">Сменить фон</Menu.Item>
          </SubMenu>
        </Menu>
        </div>
    )
}

export default Profile
