import React from 'react'
import './../../../../../style/admin/addSerials.css';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import AvcPictureAD from './AvcPicture';
import AvcItemDescrAD from './AvcItemDescr';
import AvcAddVideoFileAD from './AvcAddVideoFileAD';
import { setSerials } from '../../../../../redux/Catalog/catalogR';

class AddVideoContentAD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newSerial: {
                id: this.props.catalogList.length+1,
                title: '',
                imageBcg: null,
                imageLarge: null,
                imageMin: null,
                videoBcg: null,
                rating: 0,
                years: '1970',
                genre: '',
                director: '',
                studio: '',
                type: '',
                seasons: '',
                episodes: '',
                AgeRating: '',
                MainSlider: false,
                datePublic: new Date(),
                popular: false,
                descr: '',
                series: [],
            },
        };
        this.handleSerial = this.handleSerial.bind(this);
        this.handleSeries = this.handleSeries.bind(this);
    }

    handleSerial(item, value) {
        this.setState({
            newSerial: { ...this.state.newSerial, [item]: value }
        });
    }
    handleSeries(item) {
        this.setState({
            newSerial: { ...this.state.newSerial, series: [...this.state.newSerial.series, item] }
        });
    }

    componentDidUpdate() {
        console.log(this.state.newSerial);
        console.log(this.props.catalogList);
    }

    render() {
        return (
            <div className='addVideoContent'>
                <div className="AVC_header">
                    <div className="AVC_title tA">Добавить новый видеоматериал</div>
                    <div className="AVC_upload_content-button" onClick={()=>{
                        this.props.setSerials(this.state.newSerial)
                        console.log(this.state.newSerial);
                        }}>Upload</div>
                </div>
                <div className="AVC_wrap">

                    <AvcPictureAD 
                        imgM={this.state.newSerial.imageMin} 
                        imgL={this.state.newSerial.imageLarge} 
                        imgB={this.state.newSerial.imageBcg}
                        vidB={this.state.newSerial.videoBcg}
                        handleSerial={this.handleSerial}
                    />

                    <div className="AVC_right fCG">

                        <AvcItemDescrAD handleSerial={this.handleSerial} item={this.state.newSerial}/>

                        <AvcAddVideoFileAD handleSeries={this.handleSeries} series={this.state.newSerial.series} />

                    </div>

                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    catalogList : state.catalog.catalogList.list,
    profileName: state.profile.profile.nickName,
});

export default compose
(
    connect(mapStateToProps, {setSerials}),
    withRouter,
)   (AddVideoContentAD);