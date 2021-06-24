import React from 'react'

const SubscribeCards = ({ subscribeList }) => {
    const [activeId, setActiveId] = React.useState(0)
    const list = subscribeList;
    const handleActiveSubscribe =(id)=>{
        setActiveId(id);
    }
    return (
        <div className="subscribe_type_slect tW">
            <div className="subscribe_item_wrap">
                {list.map((item, key) => {
                    return (
                        <div className="subscribe_item_block bR"  onClick={()=>handleActiveSubscribe(item.id)} key={key}>
                            <img src={item.previevImg} alt="" className="subscribe_item_img" />
                            <div className={activeId === item.id ? "subscribe_item_price tW fCG subscribe_item_price_active" : "subscribe_item_price tW fCG"}>
                                <div className="subscribe_item_price_title">{item.price}</div>
                                <div className="subscribe_item_price_descr">
                                    {item.bonuses.map((itemBonuses, key) => {
                                        return (
                                            <div className="subscribe_item_price_descr_item" key={key}>
                                                ● {itemBonuses}
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="subscribe_item_banner">
                banner
            </div>
        </div>
    )
}

export default SubscribeCards
