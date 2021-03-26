import React from 'react'
import '../../../style/recommend.css'
import '../../../style/color.css'
import '../../../style/fonts.css'

const Recommend = (props) => {
    return (
        <div className="best">
            <div className="container">
                <div className="best_title">Лучшие сериалы</div>
                <div className="best_cards">
                    <div className="best_card">
                        <img src="./assets/img/NarutoBanner.jpeg" alt="" className="best_card_img" />
                    </div>
                    <div className="best_card">
                        <img src="./assets/img/GulBanner.png" alt="" className="best_card_img" />
                    </div>
                    <div className="best_card">
                        <img src="./assets/img/fury.jpg" alt="" className="best_card_img" />
                    </div>
                    <div className="best_card">
                        <img src="./assets/img/gul.jpg" alt="" className="best_card_img" />
                    </div>
                    <div className="best_card">
                        <img src="./assets/img/titans.jpg" alt="" className="best_card_img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommend
