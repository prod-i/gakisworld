import React from 'react'
import '../../style/profile/profile.css'
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { ProfileOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const NavigationProfile = (props) => {
  const userId = props.userId;
    return (
        <div className='profile_nav'>
          <Menu
          theme={'dark'}
          // onClick={props.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1','sub2','sub3']}
          selectedKeys={[props.options]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<ProfileOutlined />} title="Профиль" className='t'>
            <Menu.Item key="continue-view" className='tA'>
              <NavLink to={'/profile/'+ userId +'/continue-view' }> Продолжить просмотр </NavLink>
            </Menu.Item>
            <Menu.Item key="favorites" className='tA'>
              <NavLink to={'/profile/'+ userId +'/favorites'     }> Избранное      </NavLink>
            </Menu.Item>
            <Menu.Item key="plans" className='tA'>
              <NavLink to={'/profile/'+ userId +'/plans'         }> В планах       </NavLink>
            </Menu.Item>
            <Menu.Item key="view" className='tA'>
              <NavLink to={'/profile/'+ userId +'/view'          }> Просмотренные  </NavLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Управление подпиской" className='t'>
            <Menu.Item key="subscribe-control" className='tA'>
              <NavLink to={'/profile/'+ userId +'/subscribe-control' }> Сменить тип подписки   </NavLink>
            </Menu.Item>
            <Menu.Item key="subscribe-info" className='tA'>
              <NavLink to={'/profile/'+ userId +'/subscribe-info'    }> Информация о подписке  </NavLink>
            </Menu.Item>
            <Menu.Item key="subscribe-unplug" className='tR'>
              <NavLink to={'/profile/'+ userId +'/subscribe-unplug'  }> Отказаться от подписки </NavLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<SettingOutlined />} title="Настройки" className='t'> 
            <Menu.Item key="edit" className='tA'>
              <NavLink to={'/profile/'+ userId +'/edit'   }> Редактировать профиль </NavLink>
            </Menu.Item>
            <Menu.Item key="avatar" className='tA'>
              <NavLink to={'/profile/'+ userId +'/avatar' }> Сменить атавар        </NavLink>
            </Menu.Item>
            <Menu.Item key="bacg" className='tA'>
              <NavLink to={'/profile/'+ userId +'/bacg'   }> Сменить фон           </NavLink>
            </Menu.Item>
          </SubMenu>

        </Menu> 
        </div>
    )
}

export default NavigationProfile
