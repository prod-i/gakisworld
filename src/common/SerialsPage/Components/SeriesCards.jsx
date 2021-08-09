import React from 'react'
import PlayerModal from './PlayerModal';
import { Modal } from 'antd';
import { NavLink }        from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';



const SeriesCards = (props) => {
    const item = props.item;

    const size = () => {
        if(props.width <= 480){
            return 1.5
        } else if(props.width <= 768) {
            return 2.5
        } else if(props.width <= 1024) {
            return 3.5
        } else if(props.width <= 1280) {
            return 4.5
        } else {
            return 5.5
        }
    }

    return (
        <div className="cardsSeries">
            <Swiper
                slidesPerView={size()}
                spaceBetween={10}
                className={'cardsSeries'}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {item.map((item, key) => {
                    return (
                        <SwiperSlide className="cardSeries" key={item.id}>
                            <NavLink to={"/serials/" + props.serialsId + '/' + item.id}>
                                <div className="cardSeries_title">{item.title}</div>
                                <img src={item.imgPrev} alt="" className="cardSerisImage" />
                            </NavLink>
                        </SwiperSlide>
                    )
                })}
            </Swiper>


            <Modal
                title={false}
                footer={false}
                visible={props.seriesId}
                onCancel={()=>window.location.hash = '#/serials/' + props.serialsId}
                bodyStyle={{ background: 'rgb(23, 23, 23, 1)'}}
                className={"series_modal"}
            >
                {item.map((item, key)=>{
                    if(item.id.toString() === props.seriesId){
                        return(
                            <div key={item.id}>
                                <PlayerModal item={item} seriesId={props.seriesId} title={props.title}/>
                            </div>
                        )
                    }else{return null}
                })}

            </Modal>
        </div>
    )
}

export default SeriesCards
