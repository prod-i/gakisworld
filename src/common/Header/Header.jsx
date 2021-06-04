import React              from 'react';
import { NavLink }        from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import '../../style/header.css'

// картинки
import logo               from '../../assets/icon/logo.png'
import profileAvatarMini  from '../../assets/icon/avatar.png'



const Header = (props) => {
  const menu = (
    <Menu className='bTr'>
      <Menu.Item>
        <NavLink exact to="/profile" className="menu_item tR fCG" activeClassName='t'>Профиль</NavLink>
      </Menu.Item>
      <Menu.Item>
      <NavLink exact to="/profile/settings" className="menu_item t fCG" activeClassName='t'>Настройки</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/profile/favorites" className="menu_item t fCG" activeClassName='t'>Избранное</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/profile/favorites" className="menu_item t fCG" activeClassName='t'>Подписка</NavLink>
      </Menu.Item>
      <Menu.Item>
        {/* НАПИСАТЬ  НОРМАЛЬНЫЙ ЧЕКБОКС */}
        <div className="menu_item tW fCG search__selector_checked">
          <label className="label_checked"><div className="search_checked_text t">Тема</div><input className='t fCG' type="checkbox" onChange={(e) => console.log(e.target.checked)} onClick={(e) => console.log(e.target.checked)} /></label>
        </div>
        {/* НАПИСАТЬ  НОРМАЛЬНЫЙ ЧЕКБОКС */}
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/admin" className="menu_item tY fCG" activeClassName='tY'>Admin panel</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/login" className="menu_item tR fCG" activeClassName='tR'>Выход</NavLink>
      </Menu.Item>
    </Menu>
  );


  return (

    <div className="header bTr">
      <div className="logo fCG">
        <NavLink exact to="/"  className='logo_text t'><img src={logo} className="logo_img" alt="logoHeader" />GAKISWORLD</NavLink>
      </div>


      <div className="menu fCG">
        {window.location.hash === '#/login'
          ? null
          : <>
            <NavLink exact to="/" className='menu_el t' activeClassName='menu_active tRP'>Главная</NavLink>
            <NavLink to="/catalog" className='menu_el t' activeClassName='menu_active tRP'>Каталог</NavLink>
            <NavLink to="/news" className='menu_el t' activeClassName='menu_active tRP'>Новости </NavLink>
            <NavLink to="/calendar" className='menu_el t' activeClassName='menu_active tRP'>Календарь</NavLink>
            <NavLink to="/subscribe" className='menu_el t' activeClassName='menu_active tRP'>Подписка </NavLink>
          </>
        }
      </div>


      <div className="profile_menu">
        {window.location.hash === '#/login'
          ? null
          : <div className="profile_menu_button">
            <Dropdown overlay={menu} placement="bottomRight">
              <NavLink exact to="/profile" className="menu_item t fCG" activeClassName='tR'>
                <img className="profile_menu_img" src={profileAvatarMini} alt="profileHeader" />
              </NavLink>
            </Dropdown>
          </div>
        }
      </div>
    </div>

  );
};

export default Header;