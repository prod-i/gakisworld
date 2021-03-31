import React from 'react'
import '../../../style/continueView.css'

const ContinueView = (props) => {
    const list = props.list;

    if (!Array.isArray(list) || list.length <= 0) {
        return null
    }

    return (
        <div className={props.continueViewVis ? "continue__view" : "continue__view vis"}>
            <div className="block_title">
                <div className="title_name fCG">Продолжить просмотр</div>
                <div className="title_more fCG tRP">Посмотреть список полностью</div>
            </div>
            <div className="continue__view_card">
                {list.map((list, index) => {
                        return (
                            <div className="continue_card bcgB" key={index}>
                                <img src={list.image} alt="" className="card_img" />
                                <div className="progress bW">
                                    <div className="progress_total"></div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default ContinueView
