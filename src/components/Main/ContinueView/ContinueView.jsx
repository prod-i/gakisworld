import React from 'react'
import '../../../style/continueView.css'

const ContinueView = () => {
    return (
        <div className="continue__view">
            <div className="block_title">
                <div className="title_name fCG">Продолжить просмотр</div>
                <div className="title_more fCG tRP">Посмотреть список полностью</div>
            </div>
            <div className="continue__view_card">
                <div className="continue_card">
                    <img src="./assets/img/deathNoteCard.jpg" alt="" className="card_img" />
                    <div className="progress bW">
                        <div claclassNamess="progress_total"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContinueView
