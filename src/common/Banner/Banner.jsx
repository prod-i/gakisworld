import React from 'react'
import '../../style/color.css'
import '../../style/banner.css'
import '../../style/fonts.css'
import logo from '../../assets/icon/logo.png'
import chanFollow from '../../assets/icon/chanFollow.png'

const Banner = () => {
    return (
        <div className="marketing bR fCG">
            <div className="marketing__content">
                <div className="marketing__title tB">Получи доступ к лучшему<br /> Аниме с подпиской на GAKI`s World.</div>
                <div className="marketing__button">
                    <button className="marketing_btn bRP bRh tW fCG">Выбрать план подписки</button>
                    <img src={logo} alt="marketing logo" className="marketing__logo" />
                </div>
            </div>
            <div className="marketing__image">
                <img src={chanFollow} alt="" className="marketing__img" />
            </div>
        </div>
    )
}

export default Banner
