import React from 'react'
import { UploadOutlined } from '@ant-design/icons';

const AvcPictureAD = (props) => {
    const handleSerial = props.handleSerial;

    const setPrevImg = (type, e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            handleSerial(type, reader.result)
        };
        reader.onerror = function() {
            console.log(reader.error);
          };
    }

    return (
        <div className="AVC_left fCG">
            <div className="AVC_addImage">
                <div className="AVC_addImage_title tA">Постер (min)</div>
                <div className="AVC_img_wrap">
                    {props.imgM
                        ? <img src={props.imgM} alt="" className='AVC_img'/>
                        : <label className="AvcPicture_upload" htmlFor='imgM'>
                            <input id='imgM' type="file" hidden onChange={(e) => setPrevImg('imageMin', e)} />
                            <div className="AVF_upload_title">Upload</div>
                            <UploadOutlined />
                        </label>
                    }

                </div>
            </div>
            <div className="AVC_addImage">
                <div className="AVC_addImage_title tA">Постер (large)</div>
                <div className="AVC_img_wrap-large">
                    {props.imgL
                        ? <img src={props.imgL} alt="" className='AVC_img' />
                        : <label className="AvcPicture_upload" htmlFor='imgL'>
                            <input id='imgL' type="file" hidden onChange={(e) => setPrevImg('imageLarge', e)}/>
                            <div className="AVF_upload_title">Upload</div>
                            <UploadOutlined />
                        </label>
                    }
                </div>
            </div>
            <div className="AVC_addImage">
                <div className="AVC_addImage_title tA">Постер (bacg)</div>
                <div className="AVC_img_wrap">
                    {props.imgB
                        ? <img src={props.imgB} alt="" className='AVC_img' />
                        : <label className="AvcPicture_upload" htmlFor='imgB'>
                            <input id='imgB' type="file" hidden onChange={(e)=> setPrevImg('imageBcg', e)} />
                            <div className="AVF_upload_title">Upload</div>
                            <UploadOutlined />
                        </label>
                    }
                </div>
            </div>
            <div className="AVC_addImage">
                <div className="AVC_addImage_title tA">Видеофон (video)</div>
                <div className="AVC_img_wrap">
                    {props.vidB
                        ? <video src={props.vidB} alt="" className='AVC_img' />
                        : <label className="AvcPicture_upload" htmlFor='vidB'>
                            <input id='vidB' type="file" hidden onChange={(e) => handleSerial('videoBcg', e.target.files[0])} />
                            <div className="AVF_upload_title">Upload</div>
                            <UploadOutlined />
                        </label>
                    }
                </div>
            </div>
        </div>
    )

}

export default AvcPictureAD
