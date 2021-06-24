import React from 'react'
import { NavLink } from 'react-router-dom';

const PSubscribeInfo = (props) => {
    const typeAccount = 'Премиум';
    return (
        <div>
            <div className="profile_content_title">Информация о подписке</div>
            <div className="profile_content_body">
                <div className="profile_subscribe_info_item_wrap fCG">
                    <div className="profile_subscribe_info_item">
                        <div className="profile_item-left">Тип аккаунта:</div>
                        <div className="profile_item-right tR">{typeAccount}</div>
                    </div>
                    {(() => {
                        switch (typeAccount) {
                            case 'Стандартный':
                                return (
                                    <div className="profile_subscribe_info_absent">
                                        <div className="info_absent_item">У вас отсутсвтует подписка</div>
                                        <div className="info_absent_item-btn"><NavLink exact to="/subscribe" className='tR'>Преобрести подписку</NavLink></div>
                                    </div>
                                )
                            case 'Премиум':
                                return (
                                    <div className="profile_subscribe_info_item_privilege">
                                        <div className="profile_subscribe_info_item fCG">
                                            <div className="profile_subscribe_item-info  tY">● Никакой рекламы</div>
                                        </div>
                                        <div className="profile_subscribe_info_item fCG">
                                            <div className="profile_subscribe_item-info tY">● Новые серии доступны через час после релиза в Японии</div>
                                        </div>
                                        <div className="profile_subscribe_info_item fCG">
                                            <div className="profile_subscribe_item-info  tY">● Доступ к цифровой манге</div>
                                        </div>
                                        <div className="profile_subscribe_info_item fCG">
                                            <div className="profile_subscribe_item-info  tY">● Стрим на 4 устройства одновременно</div>
                                        </div>
                                        <div className="profile_subscribe_info_item fCG">
                                            <div className="profile_subscribe_item-info  tY">● Не ограниченный доступ к библеотеке Gaki`s world</div>
                                        </div>
                                        <div className="profile_subscribe_info_item fCG">
                                            <div className="profile_subscribe_item-info  tY">● Скачивание серий</div>
                                        </div>
                                        <div className="profile_subscribe_info_item fCG">
                                            <div className="profile_subscribe_item-info  tY">● Доступ в приватный канал Discord</div>
                                        </div>
                                        <div className="profile_subscribe_info_item fCG">
                                            <div className="profile_subscribe_item-info  tY">● Скидка 20% на месячный план</div>
                                        </div>
                                    </div>
                                )
                            case 'Администратор':
                                return (
                                    <div className="profile_subscribe_info_absent">
                                        <div className="info_absent_item">Вы являетесь Администратором данного проекта</div>
                                        {/* <div className="info_absent_item-btn"><NavLink exact to="/subscribe" className='tR'>Преобрести подписку</NavLink></div> */}
                                    </div>
                                )
                            case 'Редактор':
                                return (
                                    <div className="profile_subscribe_info_absent">
                                        <div className="info_absent_item">Вы являетесь Редактором данного проекта</div>
                                        {/* <div className="info_absent_item-btn"><NavLink exact to="/subscribe" className='tR'>Преобрести подписку</NavLink></div> */}
                                    </div>
                                )
                            case 'Модератор':
                                return (
                                    <div className="profile_subscribe_info_absent">
                                        <div className="info_absent_item">Вы являетесь Модератором данного проекта</div>
                                        {/* <div className="info_absent_item-btn"><NavLink exact to="/subscribe" className='tR'>Преобрести подписку</NavLink></div> */}
                                    </div>
                                )
                            default:
                                return (
                                    <div className='tR'>type does not exist</div>
                                )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default PSubscribeInfo
