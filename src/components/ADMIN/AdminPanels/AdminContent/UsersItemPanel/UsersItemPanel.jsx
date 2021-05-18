import React from 'react'
import './../../../../../style/admin/UsersItem.css';

const UsersItemPanel = (props) => {
    const item = props.UserItem;
    return (
        <div className='users_item'>
            <div className="users_item_info_wrap">
                <div className="users_item_info users_item_nick tR">{item.nickname}</div>
                <div className="users_item_info"><div className="users_item_info_left tD">Имя:</div>
                    <div className="users_item_info_right">{item.fullName}</div></div>
                <div className="users_item_info"><div className="users_item_info_left tD">E-mail:</div>
                    <div className="users_item_info_right">{item.contacts.email}</div></div>
                <div className="users_item_info"><div className="users_item_info_left tD">Телефон:</div>
                    <div className="users_item_info_right">{item.tel}</div></div>
                <div className="soc_title">Социальные сети</div>
                <div className="users_item_info"><div className="users_item_info_left tD">Вконтакте:</div>
                    <div className="users_item_info_right users_item_soc">{item.contacts.vk}</div></div>
                <div className="users_item_info"><div className="users_item_info_left tD">Facebook:</div>
                    <div className="users_item_info_right users_item_soc">{item.contacts.facebook}</div></div>
                <div className="users_item_info"><div className="users_item_info_left tD">Twitter:</div>
                    <div className="users_item_info_right users_item_soc">{item.contacts.twitter}</div></div>
                <div className="users_item_info"><div className="users_item_info_left tD">Instagram:</div>
                    <div className="users_item_info_right users_item_soc">{item.contacts.instagram}</div></div>
                <div className="users_item_info"><div className="users_item_info_left tD">Telegram:</div>
                    <div className="users_item_info_right users_item_soc">{item.contacts.telegram}</div></div>
                <div className="bank_title">Банковские данные</div>
            </div>
            <div className="users_item_options">
                <div className="users_item_avatar_wrap">
                    <img src={item.photos.large} alt="" className='users_item_avatar' />
                </div>
                <div className="users_item_report bR tBcg">Редактировать</div>
                <div className="users_item_report bR tBcg">Предупреждение</div>
                <div className="users_item_ban bR tBcg">Бан</div>
            </div>
        </div>
    )
}

export default UsersItemPanel
