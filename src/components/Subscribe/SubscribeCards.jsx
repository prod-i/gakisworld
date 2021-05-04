import React from 'react'
import img1 from './../../assets/img/subs1.png'
import img2 from './../../assets/img/subs2.png'
import img3 from './../../assets/img/subs3.png'
import img4 from './../../assets/img/subs4.png'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const SubscribeCards = () => {
    function callback(key) {
        console.log(key);
    }
    return (
        <Tabs defaultActiveKey="1" className="subscribe_type_slect tW" destroyInactiveTabPane={true} onChange={callback}>
                    <TabPane tab={
                        <div className='subscribe_type'>
                            <img src={img1} className='subscribe_type_img' alt=""/>
                            700 ₽
                        </div>
                    } key="1">
                        <div className="subscribe_type_info tW fCG bcgB">
                            <div className="subscribe_type_info_item"> • Без рекламы</div>
                            <div className="subscribe_type_info_item"> • Полный доступ к каталогу GAKI’s World</div>
                            <div className="subscribe_type_info_item"> • Новые серии через час после эфира в Японии</div>
                        </div>
                        <div className="subscribe_type_info_banner fCG bR tB">
                            <div className="subscribe_type_info_banner_left tW">12</div>
                            <div className="subscribe_type_info_banner_right">Купите подписку на 12 месяцев что бы получить:<br />
                            <div className="subscribe_type_info_item tW"> • Скидка 15% на гик макете</div>
                            <div className="subscribe_type_info_item tW"> • Скидка 20% ежемесячный план</div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab={
                        <div className='subscribe_type'>
                            <img src={img2} className='subscribe_type_img' alt=""/>
                            1000 ₽
                        </div>
                    } key="2">
                        <div className="subscribe_type_info tW fCG bcgE">
                            <div className="subscribe_type_info_item"> • Без рекламы</div>
                            <div className="subscribe_type_info_item"> • Полный доступ к каталогу GAKI’s World</div>
                            <div className="subscribe_type_info_item"> • Новые серии через час после эфира в Японии</div>
                            <div className="subscribe_type_info_item"> • Смотрите на одновременно 2-х устройствах</div>
                        </div>
                        <div className="subscribe_type_info_banner fCG bR tB">
                            <div className="subscribe_type_info_banner_left tW">12</div>
                            <div className="subscribe_type_info_banner_right">Купите подписку на 12 месяцев что бы получить:<br />
                            <div className="subscribe_type_info_item tW"> • Скидка 15% на гик макете</div>
                            <div className="subscribe_type_info_item tW"> • Скидка 20% ежемесячный план</div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab={
                        <div className='subscribe_type'>
                            <img src={img3} className='subscribe_type_img' alt=""/>
                            1200 ₽
                        </div>
                    } key="3">
                        <div className="subscribe_type_info tW fCG bcgE">
                            <div className="subscribe_type_info_item"> • Без рекламы</div>
                            <div className="subscribe_type_info_item"> • Полный доступ к каталогу GAKI’s World</div>
                            <div className="subscribe_type_info_item"> • Новые серии через час после эфира в Японии</div>
                            <div className="subscribe_type_info_item"> • Смотрите на одновременно 2-х устройствах</div>
                            <div className="subscribe_type_info_item"> • Доступ к цифровой манге и опинги</div>
                            <div className="subscribe_type_info_item"> • Офлайн-просмотр</div>
                        </div>
                        <div className="subscribe_type_info_banner fCG bR tB">
                            <div className="subscribe_type_info_banner_left tW">12</div>
                            <div className="subscribe_type_info_banner_right">Купите подписку на 12 месяцев что бы получить:<br />
                            <div className="subscribe_type_info_item tW"> • Скидка 15% на гик макете</div>
                            <div className="subscribe_type_info_item tW"> • Скидка 20% ежемесячный план</div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab={
                        <div className='subscribe_type'>
                            <img src={img4} className='subscribe_type_img' alt=""/>
                            1500 ₽
                        </div>
                    } key="4">
                        <div className="subscribe_type_info tW fCG bcgE">
                            <div className="subscribe_type_info_item"> • Без рекламы</div>
                            <div className="subscribe_type_info_item"> • Полный доступ к каталогу GAKI’s World</div>
                            <div className="subscribe_type_info_item"> • Новые серии через час после эфира в Японии</div>
                            <div className="subscribe_type_info_item"> • Смотрите на одновременно 4-х устройствах</div>
                            <div className="subscribe_type_info_item"> • Доступ к цифровой манге и опинги</div>
                            <div className="subscribe_type_info_item"> • Офлайн-просмотр</div>
                            <div className="subscribe_type_info_item"> • Скидка 15% на гик макете</div>
                        </div>
                        <div className="subscribe_type_info_banner fCG bR tB">
                            <div className="subscribe_type_info_banner_left tW">12</div>
                            <div className="subscribe_type_info_banner_right">Купите подписку на 12 месяцев что бы получить:<br />
                            <div className="subscribe_type_info_item tW"> • Скидка 15% на гик макете</div>
                            <div className="subscribe_type_info_item tW"> • Скидка 20% ежемесячный план</div>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
    )
}

export default SubscribeCards
