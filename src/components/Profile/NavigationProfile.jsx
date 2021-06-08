import React from 'react'
import '../../style/profile/profile.css'
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
          <SubMenu key="sub1" icon={<ProfileOutlined />} title="Профиль" className='t'>
            <Menu.Item key="Продолжить просмотр" className='tA'>Продолжить просмотр</Menu.Item>
            <Menu.Item key="Избранное" className='tA'>Избранное</Menu.Item>
            <Menu.Item key="В планах" className='tA'>В планах</Menu.Item>
            <Menu.Item key="Просмотренные" className='tA'>Просмотренные</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Управление подпиской" className='t'>
            <Menu.Item key="Управление подпиской" className='tA'>Сменить тип подписки</Menu.Item>
            <Menu.Item key="Информация о подписке" className='tA'>Информация о подписке</Menu.Item>
            <Menu.Item key="Отказаться от подписки" className='tR'>Отказаться от подписки</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<SettingOutlined />} title="Настройки" className='t'> 
            <Menu.Item key="Редактировать профиль" className='tA'>Редактировать профиль</Menu.Item>
            <Menu.Item key="Сменить атавар" className='tA'>Сменить атавар</Menu.Item>
            <Menu.Item key="Сменить фон" className='tA'>Сменить фон</Menu.Item>
          </SubMenu>
        </Menu> 
        </div>
    )
}

export default NavigationProfile
