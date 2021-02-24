import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/header.css'
import '../../style/color.css'
import '../../style/fonts.css'
import logo from '../../assets/icon/logo.png'
import profileAvatarMini from '../../assets/icon/profileAvatarMini.png'

const Header = (props)=> {
        return(
            <div className="header bcg">
                <div className="logo fBS">
                    <img src={logo} className="logo_img" alt="logoHeader" />
                    <NavLink exact to="/" className='logo_text tW'>GAKISWORLD</NavLink>
                </div>
                <div className="menu fCG">
                    <NavLink exact to="/"    className='menu_el tW' activeClassName='menu_active'>Главная  </NavLink>
                    <NavLink to="/catalog"   className='menu_el tW' activeClassName='menu_active'>Каталог  </NavLink>
                    <NavLink to="/news"      className='menu_el tW' activeClassName='menu_active'>Новости  </NavLink>
                    <NavLink to="/calendar"  className='menu_el tW' activeClassName='menu_active'>Календарь</NavLink>
                    <NavLink to="/subscribe" className='menu_el tW' activeClassName='menu_active'>Подписка </NavLink>
                </div>
                <div className="profile">
                    <img className="profile_img" src={profileAvatarMini} alt="profileHeader" />
                </div>
            </div>
        );
};

export default Header;