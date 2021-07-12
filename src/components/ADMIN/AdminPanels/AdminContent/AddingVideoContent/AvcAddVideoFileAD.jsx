import React from 'react'
import imgM from '../../../../../assets/img/serials/1m.jpg'
import { UploadOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const AvcAddVideoFileAD = (props) => {
    const [openModal, setOpenModal] = React.useState(false);
    const [prevImg, setPrevImg] = React.useState(null);
    const [video, setVideo] = React.useState(null);

    const loadedPrevImg = (e) =>{
        setPrevImg(e.target.files[0])
    }
    const loadedVideo = (e) =>{
        setVideo(e.target.files[0])
    }

    const addSeries = () => {
        const countSeries = props.series.length+1;
        const seriesLoaded = { id: countSeries, title: 'серия ' + countSeries, img: prevImg, video: video};
        props.handleSeries(seriesLoaded)
        setOpenModal(false)
    }

    return (
        <div className="AVC_addVideoFile fCG">
            <div className="AVF_title tA">Добавление видеофайлов</div>
            <div className="AVF_videofiles_wrap">
                <div className="AVF_upload" onClick={() => setOpenModal(true)}>
                    <div className="AVF_upload_title">Upload</div>
                    <UploadOutlined />
                </div>
                {props.series.map((item, key) => {
                    return (
                        <div className="videofile_item" key={item.id}>
                            <div className="videofile_item_img_wrap">
                                <img src={item.img} alt="" className="videofile_item_title_img" />
                            </div>
                            <div className="videofile_item_title bG">{item.title}</div>
                        </div>
                    )
                }).reverse()}
            </div>


            <Modal
                // title="Загрузка новой серии"
                visible={openModal}
                onOk={() => { addSeries() }}
                onCancel={() => setOpenModal(false)}
                bodyStyle={{ background: 'rgb(23, 23, 23, 1)'}}
                className={'modelee t'}
            >
                <input type="file" onChange={loadedPrevImg}/>
                <input type="file" onChange={loadedVideo}/>
                <p>Нажми на ок</p>
                <p>Нажми на ок</p>
                <p>Нажми на ок</p>
                <p>Нажми на ок</p>
            </Modal>


        </div>
    )

}

export default AvcAddVideoFileAD
