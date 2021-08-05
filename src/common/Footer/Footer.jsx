import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../style/footer.css'

class Footer extends React.Component {
    render() {
        const footerVis = this.props.footerVis;
        return (
            <div className={footerVis ? "footer bD" : "none"}>
                <div className="footer__top fCG">

                    <div className="footer__сolumn footer__сolumn-main ">
                        <div className="footer__title">Gaki`s World</div>
                        <div className="footer__content tG">
                            <span className="footer_item">Главная</span>
                            <span className="footer_item">Каталог</span>
                            <span className="footer_item">Вакансии</span>
                            <span className="footer_item">Каллендарь</span>
                            <span className="footer_item">Новости</span>
                            <span className="footer_item">О нас</span>
                        </div>
                    </div>

                    <div className="footer__сolumn">
                        <div className="footer__title">Правовая информация</div>
                        <div className="footer__content tG">
                            <span className="footer_item">Политика конфиденциальности</span>
                            <span className="footer_item">Пользовательское соглашение</span>
                            <span className="footer_item">Правообладатели</span>
                        </div>
                    </div>

                    <div className="footer__сolumn">
                        <div className="footer__title">Полезная информация</div>
                        <div className="footer__content tG">
                            <span className="footer_item">Подписка</span>
                            <span className="footer_item">Использовать купон</span>
                            <span className="footer_item">Регистрация</span>
                        </div>
                    </div>

                    <div className="footer__сolumn">
                        <div className="footer__title">Поддержка</div>
                        <div className="footer__content tG">
                            <span className="footer_item">Часто задаваемые вопросы</span>
                            <span className="footer_item">Свяжитесь с нами</span>
                        </div>
                    </div>

                    <div className="footer__сolumn">
                        <div className="footer__title">Приложения</div>
                        <div className="footer__content tG">
                            <span className="footer_item">Android </span>
                            <span className="footer_item">Windows</span>
                            <span className="footer_item">IOS</span>
                            <span className="footer_item">TV</span>
                        </div>
                    </div>

                    <div className="footer__сolumn">
                        <div className="footer__title">Мы в социальных сетях</div>
                        <div className="footer__content tG">
                            <span className="footer_item">Discord</span>
                            <span className="footer_item">Вконтакте </span>
                            <span className="footer_item">Facebook</span>
                            <span className="footer_item">YouTube</span>
                            <span className="footer_item">Twitter</span>
                        </div>
                    </div>

                </div>
                <div className="footer_line"></div>

                <div className="footer__bottom">
                    <div className="footer__logo">
                        <img src="../assets/icon/logo.png" alt="logo" className="footer__logo_img" />
                        <div className="footer__logo_name tG">Gaki`s World</div>
                    </div>
                    <div className="footer__developer tG">2021 prod_i</div>
                </div>

            </div>
        )
    }
}

let mapStGteToProps = (stGte) => ({
    footerVis: stGte.footer.footerVis
});

export default compose
    (
        connect(mapStGteToProps, {
        }),
        withRouter,
    )(Footer);
