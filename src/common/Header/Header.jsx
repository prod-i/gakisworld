import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import '../../style/header.css'

// картинки
import logo from '../../assets/icon/logo.png'
import profileAvatarMini from '../../assets/img/serials/9b.jpg'
import { MenuOutlined, FrownOutlined, SmileOutlined } from '@ant-design/icons';



const Header = (props) => {
  const [burgerVis, setBurgerVis] = React.useState(false)
  const CheckTheme = () => {
    if (window.localStorage.getItem('theme') === 'light') {
      return true
    } else {
      return false
    }
  }
  const ChangeTheme = () => {
    if (window.localStorage.getItem('theme') === 'light') {
      window.localStorage.setItem('theme', 'dark')
      window.location.reload()
    } else if (window.localStorage.getItem('theme') === 'dark') {
      window.localStorage.setItem('theme', 'light')
      window.location.reload()
    }
  }

  const profileId = props.profileId;
  const menu = (
    <Menu className='bTr'>
      <Menu.Item key={0}>
        <NavLink exact to={"/profile/" + profileId} className="menu_item tR fCG" activeClassName='t'>Профиль</NavLink>
      </Menu.Item>
      <Menu.Item key={1}>
        <NavLink exact to={"/profile/" + profileId + "/edit"} className="menu_item t fCG" activeClassName='t'>Настройки</NavLink>
      </Menu.Item>
      <Menu.Item key={2}>
        <NavLink exact to={"/profile/" + profileId + "/favorites"} className="menu_item t fCG" activeClassName='t'>Избранное</NavLink>
      </Menu.Item>
      <Menu.Item key={3}>
        <NavLink exact to={"/profile/" + profileId + "/subscribe-info"} className="menu_item t fCG" activeClassName='t'>Подписка</NavLink>
      </Menu.Item>
      <Menu.Item key={4}>
        {/* НАПИСАТЬ  НОРМАЛЬНЫЙ ЧЕКБОКС */}
        <div className="menu_item tW fCG theme__selector_checked">
          <label className="theme_label_checked"><div className="theme_checked_text t">Тема</div><input className='t fCG' checked={CheckTheme()} type="checkbox" onChange={ChangeTheme} /></label>
        </div>
        {/* НАПИСАТЬ  НОРМАЛЬНЫЙ ЧЕКБОКС */}
      </Menu.Item>
      <Menu.Item key={5}>
        <NavLink exact to="/admin" className="menu_item tY fCG" activeClassName='tY'>Admin panel</NavLink>
      </Menu.Item>
      <Menu.Item key={6}>
        <NavLink exact to="/login" className="menu_item tR fCG" activeClassName='tR'>Выход</NavLink>
      </Menu.Item>
    </Menu>
  );
  const menuBurger = (
    <div className={"menu_burger_list bTr"}>
      <NavLink exact to={"/profile/" + profileId} className="menu_burger_list_item tR fCG" activeClassName='t'>Профиль</NavLink>
      <NavLink exact to="/" className='menu_burger_list_item t' activeClassName='menu_active tRP'>Главная</NavLink>
      <NavLink to="/catalog" className='menu_burger_list_item t' activeClassName='menu_active tRP'>Каталог</NavLink>
      <NavLink to="/news" className='menu_burger_list_item t' activeClassName='menu_active tRP'>Новости </NavLink>
      <NavLink to="/calendar" className='menu_burger_list_item t' activeClassName='menu_active tRP'>Календарь</NavLink>
      <NavLink to="/subscribe" className='menu_burger_list_item t' activeClassName='menu_active tRP'>Подписка </NavLink>
      <NavLink exact to="/login" className="menu_burger_list_item tR fCG" activeClassName='tR'>Выход</NavLink>
      <div className="menu_burger_list_item t fCG">
        <label className="menu_burger_theme">{CheckTheme() ? <FrownOutlined /> : <SmileOutlined />}<input className='t fCG none' checked={CheckTheme()} type="checkbox" onChange={ChangeTheme} /></label>
      </div>
    </div>
  );


  return (

    <div className="header bTr">
      <div className="logo fCG">
        <NavLink exact to="/" className='logo_wrap t'><img src={logo} className="logo_img" alt="logoHeader" /><div className='logo_text'>GAKISWORLD</div></NavLink>
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
            <Dropdown overlay={menu} placement="bottomRight" className='dropdown-menu'>
              <NavLink exact to={"/profile/" + profileId} className="menu_item t fCG" activeClassName='tR'>
                <img className="profile_menu_img" src={profileAvatarMini} alt="profileHeader" />
              </NavLink>
            </Dropdown>

            <div className="menu_burger">
              <Dropdown overlay={menuBurger} placement="bottomRight" className='menu_burger'>
                <MenuOutlined />
              </Dropdown>
            </div>

          </div>
        }
      </div>
    </div>

  );
};

export default Header;