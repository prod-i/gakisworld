import React from 'react'
import '../../style/serialsPage.css'
import SerialsDescription from './Components/SerialsDescription'
import SeriesCards from './Components/SeriesCards'

// картинки
import img from './../../assets/img/serials/1b.jpg'


const SerialsPage = () => {
    return (
        <div className='serialsPage fCG'>

{/* фон */}

            <img className='serialsPageBacgImg' src={img} alt="" />

{/* Описание */}

            <SerialsDescription />

{/* Карточки сериала */}

            <SeriesCards />

{/* Подвал */}

        </div>
    )
}

export default SerialsPage
