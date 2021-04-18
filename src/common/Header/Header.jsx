import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/header.css'
import '../../style/color.css'
import '../../style/fonts.css'
import logo from '../../assets/icon/logo.png'
import { Menu, Dropdown} from 'antd';
import profileAvatarMini from '../../assets/icon/avatar.png'

const Header = (props) => {
    const menu = (
        <Menu>
          <Menu.Item>
            <NavLink exact to="/profile" className="menu_item tW fCG" activeClassName='tR'>Профиль</NavLink>
          </Menu.Item>
          <Menu.Item>
            <div className="menu_item tW fCG">Настройки</div>
          </Menu.Item>
          <Menu.Item>
            <div className="menu_item tW fCG">Просмотренные</div>
          </Menu.Item>
          <Menu.Item>
            <div className="menu_item tW fCG">Избранное</div>
          </Menu.Item>
          <Menu.Item>
            <div className="menu_item tW fCG">Подписка</div>
          </Menu.Item>
          <Menu.Item>
            <div className="menu_item tW fCG search__selector_checked">
              <label className="label_checked"><div className="search_checked_text">Тема</div><input className='tW fCG' type="checkbox" onChange={(e) => console.log(e.target.checked)} onClick={(e) => console.log(e.target.checked)} /></label>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="menu_item exit tRP fCG">Выход</div>
          </Menu.Item>
        </Menu>
      );
    return (
        <div className="header bcgE">
            <div className="logo fBS">
                <img src={logo} className="logo_img" alt="logoHeader" />
                <NavLink exact to="/" className='logo_text tW'>GAKISWORLD</NavLink>
            </div>
            <div className="menu fCG">
                <NavLink exact to="/" className='menu_el tW' activeClassName='menu_active tRP'>Главная  </NavLink>
                <NavLink to="/catalog" className='menu_el tW' activeClassName='menu_active tRP'>Каталог  </NavLink>
                <NavLink to="/news" className='menu_el tW' activeClassName='menu_active tRP'>Новости  </NavLink>
                <NavLink to="/calendar" className='menu_el tW' activeClassName='menu_active tRP'>Календарь</NavLink>
                <NavLink to="/subscribe" className='menu_el tW' activeClassName='menu_active tRP'>Подписка </NavLink>
            </div>
            <div className="profile_menu">

                <div className="profile_menu_button">
                <Dropdown overlay={menu} placement="bottomRight">
                    <img className="profile_menu_img" src={profileAvatarMini} alt="profileHeader" />
                </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Header;