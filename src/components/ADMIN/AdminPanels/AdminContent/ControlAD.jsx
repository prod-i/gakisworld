import React from 'react'
import './../../../../style/admin/controlAD.css';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminControl } from '../../AdminControl';
import { Modal } from 'antd';

import { CONTROLHeaderVis } from '../../../../redux/Header/headerR.js'
import { CONTROLFooterVis } from '../../../../redux/Footer/footerR.js'
import { CONTROLMainVis } from '../../../../redux/Main/mainR.js'
import { CONTROLSliderVis } from '../../../../redux/Main/mainR.js'
import { CONTROLBannerVis } from '../../../../redux/Main/mainR.js'
import { CONTROLContinueVis } from '../../../../redux/Main/mainR.js'
import { CONTROLPrevNewsVis } from '../../../../redux/Main/mainR.js'
import { CONTROLPopularVis } from '../../../../redux/Main/mainR.js'
import { CONTROLCatalogVis } from '../../../../redux/Catalog/catalogR.js'
import { CONTROLNoveltyVis } from '../../../../redux/Catalog/catalogR.js'
import { AddFiltres, CONTROLSearchVis, DeleteFiltres } from '../../../../redux/Catalog/searchR.js'
import { CONTROLCatalogListVis } from '../../../../redux/Catalog/catalogR.js'
import { CONTROLNewsVis } from '../../../../redux/News/newsR.js'
import { CONTROLNewsListVis } from '../../../../redux/News/newsR.js'
import { CONTROLNewsSliderVis } from '../../../../redux/News/newsR.js'
import { CONTROLNewsSidebarVis } from '../../../../redux/News/newsR.js'
import { CONTROLCalendarVis } from '../../../../redux/Calendar/calendarR.js'
import { CONTROLSubVis } from '../../../../redux/Subscribe/subscribeR.js'
import { CONTROLSubCardsVis } from '../../../../redux/Subscribe/subscribeR.js'
import { CONTROLSubBannerVis } from '../../../../redux/Subscribe/subscribeR.js'
import { CONTROLSubFormVis } from '../../../../redux/Subscribe/subscribeR.js'
import { CONTROLProfileVis } from '../../../../redux/Profile/ProfileR.js'
import { CONTROLProfileMenuVis } from '../../../../redux/Profile/ProfileR.js'
import { CONTROLLoginVis } from '../../../../redux/Login/loginR.js'


class ControlAD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            type: null,
            newTypeInput: '',
        };
        this.handleState = this.handleState.bind(this);
        this.newType = this.newType.bind(this);
        this.addAndClose = this.addAndClose.bind(this);
    }

    handleState(vis, type){
        this.setState({
            modal: vis,
            type: type,
        });
    }
    newType(newType){
        this.setState({
            newTypeInput: newType,
        });
    }

    addAndClose(props){
        this.props.AddFiltres(this.state.type, this.state.newTypeInput)
        this.handleState(false, '')
    }

    render() {
        console.log(this.props.slider);
        const controlVis = this.props.controlAD.controlVis;
        const filtre = this.props.filtre;
        // const this.props = props.this.props;
        console.log(filtre.genre);

        return (
            <div className='controlAD'>
                <div className="controlAD_wrap t">
                    <div className="controlAD_title t">Управление сегментами</div>
                    <div className="controlAD_segments fCG">
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Header
                            </div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.headerVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLHeaderVis(!controlVis.headerVis) }}>{controlVis.headerVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Footer</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.footerVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLFooterVis(!controlVis.footerVis) }}>{controlVis.footerVis.toString()}</span>
                            </div>
                        </div>

                        {/*--------- MAIN ---------*/}

                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Main</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.mainVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLMainVis(!controlVis.mainVis) }}>{controlVis.mainVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Slider</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.sliderVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLSliderVis(!controlVis.sliderVis) }}>{controlVis.sliderVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Banner</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.bannerVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLBannerVis(!controlVis.bannerVis) }}>{controlVis.bannerVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Continue view</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.continueVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLContinueVis(!controlVis.continueVis) }}>{controlVis.continueVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Preview news</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.prevNewsVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLPrevNewsVis(!controlVis.prevNewsVis) }}>{controlVis.prevNewsVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Popular</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.popularVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLPopularVis(!controlVis.popularVis) }}>{controlVis.popularVis.toString()}</span>
                            </div>
                        </div>

                        {/*--------- CATALOG ---------*/}

                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Catalog</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.catalogVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLCatalogVis(!controlVis.catalogVis) }}>{controlVis.catalogVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Novelty</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.noveltyVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLNoveltyVis(!controlVis.noveltyVis) }}>{controlVis.noveltyVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Search</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.searchVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLSearchVis(!controlVis.searchVis) }}>{controlVis.searchVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Catalog List</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.catalogListVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLCatalogListVis(!controlVis.catalogListVis) }}>{controlVis.catalogListVis.toString()}</span>
                            </div>
                        </div>

                        {/*--------- NEWS ---------*/}

                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">News</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.newsVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLNewsVis(!controlVis.newsVis) }}>{controlVis.newsVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">News Slider</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.newsSliderVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLNewsSliderVis(!controlVis.newsSliderVis) }}>{controlVis.newsSliderVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">News List</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.newsListVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLNewsListVis(!controlVis.newsListVis) }}>{controlVis.newsListVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">News Sidebar</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.newsSidebarVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLNewsSidebarVis(!controlVis.newsSidebarVis) }}>{controlVis.newsSidebarVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Calendar</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.calendarVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLCalendarVis(!controlVis.calendarVis) }}>{controlVis.calendarVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Subscribe</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.subVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLSubVis(!controlVis.subVis) }}>{controlVis.subVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Subscribe cards</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.subCardsVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLSubCardsVis(!controlVis.subCardsVis) }}>{controlVis.subCardsVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Subscribe banner</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.subBannerVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLSubBannerVis(!controlVis.subBannerVis) }}>{controlVis.subBannerVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Subscribe form</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.subFormVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLSubFormVis(!controlVis.subFormVis) }}>{controlVis.subFormVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Profile</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.profileVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLProfileVis(!controlVis.profileVis) }}>{controlVis.profileVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Profile menu</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.profileMenuVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLProfileMenuVis(!controlVis.profileMenuVis) }}>{controlVis.profileMenuVis.toString()}</span>
                            </div>
                        </div>
                        <div className="controlAD_item bE">
                            <div className="controlAD_item_title">Login</div>
                            <div className="controlAD_item_vis">Visible:
                                <span className={controlVis.loginVis ? "controlAD_check tBl" : "controlAD_check tRP"} onClick={() => { this.props.CONTROLLoginVis(!controlVis.loginVis) }}>{controlVis.loginVis.toString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="controlAD_title t">Управление фильтрами</div>
                <div className="controlAD_filtresAll t">
                    <div className="controlAD_filtresAll_block bE">
                        <div className="controlAD_filtresAll_title fCG">Catalog - тип
                            <div className="controlAD_filtresAll_addIcon" onClick={() => this.handleState(true, 'type')}>
                                <PlusOutlined />
                            </div>
                        </div>
                        <div className="filtresAll_item_wrap fCG">
                            {filtre.type.map((item) => {
                                return (
                                    <div className="controlAD_filtresAll_item" key={item}>
                                        <div className="filtresAll_item_title">{item}</div>
                                        <div className="filtresAll_item_options tR" onClick={() => this.props.DeleteFiltres('type', item)}>
                                            <DeleteOutlined />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="controlAD_filtresAll_block bE">
                        <div className="controlAD_filtresAll_title fCG">Catalog - Жанр
                        <div className="controlAD_filtresAll_addIcon" onClick={() => this.handleState(true, 'genre')}>
                                <PlusOutlined />
                            </div>
                        </div>
                        <div className="filtresAll_item_wrap fCG">
                            {filtre.genre.map((item) => {
                                return (
                                    <div className="controlAD_filtresAll_item" key={item}>
                                        <div className="filtresAll_item_title">{item}</div>
                                        <div className="filtresAll_item_options tR" onClick={() => this.props.DeleteFiltres('genre', item)}>
                                            <DeleteOutlined />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="controlAD_filtresAll_block bE">
                        <div className="controlAD_filtresAll_title fCG">Catalog - Автор
                        <div className="controlAD_filtresAll_addIcon" onClick={() => this.handleState(true, 'author')}>
                                <PlusOutlined />
                            </div>
                        </div>
                        <div className="filtresAll_item_wrap fCG">
                            {filtre.author.map((item) => {
                                return (
                                    <div className="controlAD_filtresAll_item" key={item}>
                                        <div className="filtresAll_item_title">{item}</div>
                                        <div className="filtresAll_item_options tR" onClick={() => this.props.DeleteFiltres('author', item)}>
                                            <DeleteOutlined />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="controlAD_filtresAll_block bE">
                        <div className="controlAD_filtresAll_title fCG">Catalog - Студия
                        <div className="controlAD_filtresAll_addIcon" onClick={() => this.handleState(true, 'studio')}>
                                <PlusOutlined />
                            </div>
                        </div>
                        <div className="filtresAll_item_wrap fCG">
                            {filtre.studio.map((item) => {
                                return (
                                    <div className="controlAD_filtresAll_item" key={item}>
                                        <div className="filtresAll_item_title">{item}</div>
                                        <div className="filtresAll_item_options tR" onClick={() => this.props.DeleteFiltres('studio', item)}>
                                            <DeleteOutlined />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="controlAD_filtresAll_block bE">
                        <div className="controlAD_filtresAll_title fCG">Catalog - Возрастной рейтинг
                        <div className="controlAD_filtresAll_addIcon" onClick={() => this.handleState(true, 'AgeRating')}>
                                <PlusOutlined />
                            </div>
                        </div>
                        <div className="filtresAll_item_wrap fCG">
                            {filtre.AgeRating.map((item) => {
                                return (
                                    <div className="controlAD_filtresAll_item" key={item}>
                                        <div className="filtresAll_item_title">{item}</div>
                                        <div className="filtresAll_item_options tR" onClick={() => this.props.DeleteFiltres('AgeRating', item)}>
                                            <DeleteOutlined />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <Modal 
                    title={false} 
                    visible={this.state.modal} 
                    onOk={this.addAndClose} 
                    onCancel={() => this.handleState(false, '')}
                >

                    <div className="addFiltres_modal bE fCG t">
                        <div className="addFiltres_modal_title t">
                            <div> Добавить новый фильтр - <span className="tR"> {this.state.type}</span></div>
                        </div>
                        <div className="addFiltres_modal_body">
                            <div className="addFiltres_modal_text">Введите новый фильтр</div>
                            <input type="text" maxLength={15} className='addFiltres_modal_input tD' onChange={(e)=>this.newType(e.target.value)}/>
                        </div>
                    </div>

                </Modal>

            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    filtre: state.search.filters,
    newsList: state.news.newsList.list,
    controlAD: AdminControl(state),
    slider: state.main.slider,
});

export default compose
    (
        connect(mapStateToProps, {
            CONTROLHeaderVis,
            CONTROLFooterVis,
            CONTROLMainVis,
            CONTROLSliderVis,
            CONTROLBannerVis,
            CONTROLContinueVis,
            CONTROLPrevNewsVis,
            CONTROLPopularVis,
            CONTROLCatalogVis,
            CONTROLNoveltyVis,
            CONTROLSearchVis,
            CONTROLCatalogListVis,
            CONTROLNewsVis,
            CONTROLNewsListVis,
            CONTROLNewsSliderVis,
            CONTROLNewsSidebarVis,
            CONTROLCalendarVis,
            CONTROLSubVis,
            CONTROLSubCardsVis,
            CONTROLSubBannerVis,
            CONTROLSubFormVis,
            CONTROLProfileVis,
            CONTROLProfileMenuVis,
            CONTROLLoginVis,
            AddFiltres,
            DeleteFiltres,
        }),
        withRouter,
    )(ControlAD);
