import React       from 'react'                            ;
import logo        from '../../assets/icon/logo.png'       ;
import { NavLink } from 'react-router-dom'                 ;
import '../../style/banner.css'                            ;

// картинки
import chanFollow  from '../../assets/icon/chanFollow.png' ;

const Banner = (props) => {
    return (
        <div className={props.bannerVis ? "marketing bR fCG" : "marketing bR fCG vis"}>

            <div className="marketing__content">
                <div className="marketing__title tB">Получи доступ к лучшему<br />Аниме с подпиской на GAKI`s World.</div>
                <div className="marketing__button">
                    <NavLink exact to={'/subscribe'} className=''>
                        <button className="marketing_btn bRP bRh tW fCG">Выбрать план подписки</button>
                    </NavLink>
                    <img src={logo} alt="marketing logo" className="marketing__logo" />
                </div>
            </div>

            {/* IMAGE */}
            <div className="marketing__image">
                <NavLink exact to={'/subscribe'} className=''><img src={chanFollow} alt="" className="marketing__img" /></NavLink>
            </div>

        </div>
    )
}

export default Banner
