import React, { useState } from 'react'
import './../../style/login/login.css'
import png from './../../assets/img/png.png'
import png1 from './../../assets/img/png1.png'
import png2 from './../../assets/img/png2.png'
import png3 from './../../assets/img/png3.png'

const Login = () => {
    const [loginAcitve, setLoginActive] = useState('signin');
    let isActive = 'Sign in';
    if(loginAcitve === 'signin'){
        isActive = 'Sign in';
    }else if(loginAcitve === 'signup'){
        isActive = 'Sign up';
    }
    const switchLoginActive = (loginAcitve) => {
        if(loginAcitve === 'signin'){
            setLoginActive('signup')
        }else if(loginAcitve === 'signup'){
            setLoginActive('signin')
        }
    }
    return (
        <div className="login">
            <div className="login_wrap bcg">
                <div className="login_switcher fBW bR">
                    <div className="login_switcher_title">Hi, friend</div>
                    <div className="login_switcher_descr">{isActive==='Sign in' ? `If you haven't registered yet, but it's time to do it` : 'If you are already registered with us, just log in'}</div>
                    <div className="login_switcher_btn bcg tR" onClick={()=>switchLoginActive(loginAcitve)}>{isActive==='Sign in' ? 'Sign up' : 'Sign in'}</div> 
                    <img src={png2} alt="" className="pngW"/>
                    <img src={png} alt="" className="pngB"/>
                </div>
                <div className="login_active">
                    <div className="login_active_title tW">{isActive}</div>
                    <div className="login_active_form fBW">
                        <input type="text" className="login_active_form_item form_login"/>
                        <input type="text" className="login_active_form_item form_password"/>
                        <div className="login_switcher_btn bR tBcg">{isActive==='Sign in' ? 'Sign in' : 'Sign up'}</div> 
                    </div>
                    <img src={png1} alt="" className="pngR"/>
                    <img src={png3} alt="" className="pngWR"/>
                </div>
            </div>
        </div>
    )
}

export default Login
