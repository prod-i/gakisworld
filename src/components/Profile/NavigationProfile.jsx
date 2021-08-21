import React from 'react'
import '../../style/profile/profile.css'
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { ProfileOutlined, AppstoreOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const NavigationProfile = (props) => {
  // const [burgerVis, setBurgerVis] = React.useState(false)
  const width = props.width;
  const checkSize = () => {
    if (width > 1024) {
      return true
    } else {
      return false
    }
  }
  const userId = props.userId;

  const menu = (
    <div className="profile_nav_button_menu bTr">
        <Menu
            theme={'dark'}
            // onClick={props.handleClick}
            className={'profile_menu_nav'}
            defaultOpenKeys={['sub1', 'sub2', 'sub3']}
            selectedKeys={[props.options]}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<ProfileOutlined />} title="Профиль" className='t profile_menu_nav_submenu'>
              <Menu.Item key="continue-view">
                <NavLink to={'/profile/' + userId + '/continue-view'} className='tA  profile_menu_nav_item'>  Продолжить просмотр </NavLink>
              </Menu.Item>
              <Menu.Item key="tracked" className='tA'>
                <NavLink to={'/profile/' + userId + '/tracked'} className='tA profile_menu_nav_item'>  Отслеживаемые  </NavLink>
              </Menu.Item>
              <Menu.Item key="favorites" className='tA'>
                <NavLink to={'/profile/' + userId + '/favorites'} className='tA profile_menu_nav_item'>  Избранное      </NavLink>
              </Menu.Item>
              <Menu.Item key="archive" className='tA'>
                <NavLink to={'/profile/' + userId + '/archive'} className='tA profile_menu_nav_item'>  Архив  </NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Управление подпиской" className='t profile_menu_nav_submenu'>
              {/* <Menu.Item key="subscribe-control" className='tA'>
              <NavLink to={'/profile/'+ userId +'/subscribe-control' }className='tD'> Сменить тип подписки   </NavLink>
            </Menu.Item> */}
              <Menu.Item key="subscribe-info" className='tA'>
                <NavLink to={'/profile/' + userId + '/subscribe-info'} className='tA profile_menu_nav_item'> Информация о подписке  </NavLink>
              </Menu.Item>
              <Menu.Item key="subscribe-unplug" className='tR'>
                <NavLink to={'/profile/' + userId + '/subscribe-unplug'} className='tR profile_menu_nav_item'> Отказаться от подписки </NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<SettingOutlined />} title="Настройки" className='t profile_menu_nav_submenu'>
              <Menu.Item key="edit" className='tA'>
                <NavLink to={'/profile/' + userId + '/edit'} className='tA profile_menu_nav_item'> Редактировать профиль    </NavLink>
              </Menu.Item>
              <Menu.Item key="notifications" className='tA'>
                <NavLink to={'/profile/' + userId + '/notifications'} className='tA profile_menu_nav_item'> Управление уведомлениями </NavLink>
              </Menu.Item>
              <Menu.Item key="security" className='tA'>
                <NavLink to={'/profile/' + userId + '/security'} className='tA profile_menu_nav_item'> Безопасность             </NavLink>
              </Menu.Item>
            </SubMenu>

          </Menu>
        </div>
  );

  return (
    <div className='profile_nav'>
      <div className={checkSize() ? 'none' : "profile_nav_button"}>
      <Dropdown overlay={menu} placement="bottomRight" className=''>
        <MenuOutlined />
      </Dropdown>
      </div>
      <Menu
        theme={'dark'}
        // onClick={props.handleClick}
        className={checkSize() ? 'profile_menu_nav' : 'none'}
        defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        selectedKeys={[props.options]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<ProfileOutlined />} title="Профиль" className='t profile_menu_nav_submenu'>
          <Menu.Item key="continue-view">
            <NavLink to={'/profile/' + userId + '/continue-view'} className='tA  profile_menu_nav_item'>  Продолжить просмотр </NavLink>
          </Menu.Item>
          <Menu.Item key="tracked" className='tA'>
            <NavLink to={'/profile/' + userId + '/tracked'} className='tA profile_menu_nav_item'>  Отслеживаемые  </NavLink>
          </Menu.Item>
          <Menu.Item key="favorites" className='tA'>
            <NavLink to={'/profile/' + userId + '/favorites'} className='tA profile_menu_nav_item'>  Избранное      </NavLink>
          </Menu.Item>
          <Menu.Item key="archive" className='tA'>
            <NavLink to={'/profile/' + userId + '/archive'} className='tA profile_menu_nav_item'>  Архив  </NavLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Управление подпиской" className='t profile_menu_nav_submenu'>
          {/* <Menu.Item key="subscribe-control" className='tA'>
              <NavLink to={'/profile/'+ userId +'/subscribe-control' }className='tD'> Сменить тип подписки   </NavLink>
            </Menu.Item> */}
          <Menu.Item key="subscribe-info" className='tA'>
            <NavLink to={'/profile/' + userId + '/subscribe-info'} className='tA profile_menu_nav_item'> Информация о подписке  </NavLink>
          </Menu.Item>
          <Menu.Item key="subscribe-unplug" className='tR'>
            <NavLink to={'/profile/' + userId + '/subscribe-unplug'} className='tR profile_menu_nav_item'> Отказаться от подписки </NavLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" icon={<SettingOutlined />} title="Настройки" className='t profile_menu_nav_submenu'>
          <Menu.Item key="edit" className='tA'>
            <NavLink to={'/profile/' + userId + '/edit'} className='tA profile_menu_nav_item'> Редактировать профиль    </NavLink>
          </Menu.Item>
          <Menu.Item key="notifications" className='tA'>
            <NavLink to={'/profile/' + userId + '/notifications'} className='tA profile_menu_nav_item'> Управление уведомлениями </NavLink>
          </Menu.Item>
          <Menu.Item key="security" className='tA'>
            <NavLink to={'/profile/' + userId + '/security'} className='tA profile_menu_nav_item'> Безопасность             </NavLink>
          </Menu.Item>
        </SubMenu>

      </Menu>
    </div>
  )
}

export default NavigationProfile
