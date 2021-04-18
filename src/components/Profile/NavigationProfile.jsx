import React from 'react'
import '../../style/profile/profile.css'
import '../../style/color.css'
import '../../style/fonts.css'
import { Menu } from 'antd';
import { ProfileOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const NavigationProfile = (props) => {
    return (
        <div className='profile_nav'>
           <Menu
          theme={'dark'}
          onClick={props.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1','sub2','sub3']}
          selectedKeys={[props.current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<ProfileOutlined />} title="Профиль">
            <Menu.Item key="Продолжить просмотр">Продолжить просмотр</Menu.Item>
            <Menu.Item key="Избранное">Избранное</Menu.Item>
            <Menu.Item key="В планах">В планах</Menu.Item>
            <Menu.Item key="Просмотренные">Просмотренные</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Управление подпиской" className='tW'>
            <Menu.Item key="Управление подпиской">Сменить тип подписки</Menu.Item>
            <Menu.Item key="Информация о подписке">Информация о подписке</Menu.Item>
            <Menu.Item key="Отказаться от подписки" className='tR'>Отказаться от подписки</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<SettingOutlined />} title="Настройки" className='tW'> 
            <Menu.Item key="Редактировать профиль">Редактировать профиль</Menu.Item>
            <Menu.Item key="Сменить атавар">Сменить атавар</Menu.Item>
            <Menu.Item key="Сменить фон">Сменить фон</Menu.Item>
          </SubMenu>
        </Menu> 
        </div>
    )
}

export default NavigationProfile
