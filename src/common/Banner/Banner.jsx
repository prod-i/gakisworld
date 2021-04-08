import React       from 'react'
import logo        from '../../assets/icon/logo.png'
import chanFollow  from '../../assets/icon/chanFollow.png'
import { NavLink } from 'react-router-dom';
import '../../style/color.css'
import '../../style/banner.css'
import '../../style/fonts.css'

const Banner = (props) => {
    return (
        <div className={props.bannerVis ? "marketing bR fCG" : "marketing bR fCG vis"}>
            <div className="marketing__content">
                <div className="marketing__title tB">Получи доступ к лучшему<br /> Аниме с подпиской на GAKI`s World.</div>
                <div className="marketing__button">
                    <NavLink exact to={'/subscribe'} className=''>
                        <button className="marketing_btn bRP bRh tW fCG">Выбрать план подписки</button>
                    </NavLink>
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
