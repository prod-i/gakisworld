import React from 'react'
import '../../style/footer.css'
import '../../style/color.css'
import '../../style/fonts.css'

const Footer = () => {
    return (
        <div class="footer bB">
        <div class="footer__top fCG">
            <div class="footer__сolumn">
                <div class="footer__title">Gaki`s World</div>
                <div class="footer__content tD">
                    <span class="footer_item">Главная</span>
                    <span class="footer_item">Каталог</span>
                    <span class="footer_item">Вакансии</span>
                    <span class="footer_item">Каллендарь</span>
                    <span class="footer_item">Новости</span>
                    <span class="footer_item">О нас</span>
                </div>
            </div>
            <div class="footer__сolumn">
                <div class="footer__title">Правовая информация</div>
                <div class="footer__content tD">
                    <span class="footer_item">Политика конфиденциальности</span>
                    <span class="footer_item">Пользовательское соглашение</span>
                    <span class="footer_item">Правообладатели</span>
                </div>
            </div>
            <div class="footer__сolumn">
                <div class="footer__title">Полезная информация</div>
                <div class="footer__content tD">
                    <span class="footer_item">Подписка</span>
                    <span class="footer_item">Использовать купон</span>
                    <span class="footer_item">Регистрация</span>
                </div>
            </div>
            <div class="footer__сolumn">
                <div class="footer__title">Поддержка</div>
                <div class="footer__content tD">
                    <span class="footer_item">Часто задаваемые вопросы</span>
                    <span class="footer_item">Свяжитесь с нами</span>
                </div>
            </div>
            <div class="footer__сolumn">
                <div class="footer__title">Приложения</div>
                <div class="footer__content tD">
                    <span class="footer_item">Android </span>
                    <span class="footer_item">Windows</span>
                    <span class="footer_item">IOS</span>
                    <span class="footer_item">TV</span>
                </div>
            </div>
            <div class="footer__сolumn">
                <div class="footer__title">Мы в социальных сетях</div>
                <div class="footer__content tD">
                    <span class="footer_item">Discord</span>
                    <span class="footer_item">Вконтакте </span>
                    <span class="footer_item">Facebook</span>
                    <span class="footer_item">YouTube</span>
                    <span class="footer_item">Twitter</span>
                </div>
            </div>
        </div>
        <div class="footer_line"></div>
        <div class="footer__bottom">
            <div class="footer__logo">
                <img src="../assets/icon/logo.png" alt="logo" class="footer__logo_img"/>
                <div class="footer__logo_name tG">Gaki`s World</div>
            </div>
            <div class="footer__developer tG">2021 prod_i</div>
        </div>
    </div>
    )
}

export default Footer
