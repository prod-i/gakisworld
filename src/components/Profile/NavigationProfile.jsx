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
            <Menu.Item key="continue-view">
              <NavLink to={'/profile/'+ userId +'/continue-view' }className='tA'>  Продолжить просмотр </NavLink>
            </Menu.Item>                                                           
            <Menu.Item key="favorites" className='tA'>                             
              <NavLink to={'/profile/'+ userId +'/favorites'     }className='tA'>  Избранное      </NavLink>
            </Menu.Item>
            <Menu.Item key="plans" className='tA'>
              <NavLink to={'/profile/'+ userId +'/plans'         }className='tA'>  В планах       </NavLink>
            </Menu.Item>
            <Menu.Item key="archive" className='tA'>
              <NavLink to={'/profile/'+ userId +'/archive'       }className='tA'>  Архив  </NavLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Управление подпиской" className='t'>
            {/* <Menu.Item key="subscribe-control" className='tA'>
              <NavLink to={'/profile/'+ userId +'/subscribe-control' }className='tD'> Сменить тип подписки   </NavLink>
            </Menu.Item> */}
            <Menu.Item key="subscribe-info" className='tA'>
              <NavLink to={'/profile/'+ userId +'/subscribe-info'    }className='tA'> Информация о подписке  </NavLink>
            </Menu.Item>
            <Menu.Item key="subscribe-unplug" className='tR'>
              <NavLink to={'/profile/'+ userId +'/subscribe-unplug'  }className='tR'> Отказаться от подписки </NavLink>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="sub3" icon={<SettingOutlined />} title="Настройки" className='t'> 
            <Menu.Item key="edit" className='tA'>
              <NavLink to={'/profile/'+ userId +'/edit'          }className='tA'> Редактировать профиль    </NavLink>
            </Menu.Item>
            <Menu.Item key="notifications" className='tA'>
              <NavLink to={'/profile/'+ userId +'/notifications' }className='tA'> Управление уведомлениями </NavLink>
            </Menu.Item>
            <Menu.Item key="security" className='tA'>
              <NavLink to={'/profile/'+ userId +'/security'      }className='tA'> Безопасность             </NavLink>
            </Menu.Item>
          </SubMenu>

        </Menu> 
        </div>
    )
}

export default NavigationProfile
