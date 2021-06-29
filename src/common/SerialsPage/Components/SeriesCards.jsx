import React from 'react'
import PlayerModal from './PlayerModal';
import { Modal } from 'antd';
import { NavLink }        from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';



const SeriesCards = (props) => {
    const item = props.item;


    return (
        <div className="cardsSeries">
            <Swiper
                slidesPerView={5.5}
                spaceBetween={10}
                className={'cardsSeries'}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {item.map((item, key) => {
                    return (
                        <SwiperSlide className="cardSeries" key={key}>
                            <NavLink to={"/serials/" + props.serialsId + '/' + item.id}>
                                <div className="cardSeries_title">{item.title}</div>
                                <img src={item.imgPrev} alt="" className="cardSerisImage" />
                            </NavLink>
                        </SwiperSlide>
                    )
                })}
            </Swiper>


            <Modal
                width='60%'
                title={false}
                footer={false}
                visible={props.seriesId}
                onCancel={()=>window.location.hash = '#/serials/' + props.serialsId}
                bodyStyle={{ background: 'rgb(23, 23, 23, 1)'}}
            >
                {item.map((item, key)=>{
                    if(item.id.toString() === props.seriesId){
                        return(
                            <PlayerModal item={item} seriesId={props.seriesId} title={props.title} key={key}/>
                        )
                    }else{return null}
                })}

            </Modal>
        </div>
    )
}

export default SeriesCards
