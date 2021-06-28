import   React        from 'react';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AdminControl } from './AdminControl';
import Admin from './Admin';

import {CONTROLHeaderVis}       from '../../redux/Header/headerR.js'
import {CONTROLFooterVis}       from '../../redux/Footer/footerR.js'
import {CONTROLMainVis}         from '../../redux/Main/mainR.js'
import {CONTROLSliderVis}       from '../../redux/Main/mainR.js'
import {CONTROLBannerVis}       from '../../redux/Main/mainR.js'
import {CONTROLContinueVis}     from '../../redux/Main/mainR.js'
import {CONTROLPrevNewsVis}     from '../../redux/Main/mainR.js'
import {CONTROLPopularVis}      from '../../redux/Main/mainR.js'
import {CONTROLCatalogVis}      from '../../redux/Catalog/catalogR.js'
import {CONTROLNoveltyVis}      from '../../redux/Catalog/catalogR.js'
import {CONTROLSearchVis}       from '../../redux/Catalog/searchR.js'
import {CONTROLCatalogListVis}  from '../../redux/Catalog/catalogR.js'
import {CONTROLNewsVis}         from '../../redux/News/newsR.js'
import {CONTROLNewsListVis}     from '../../redux/News/newsR.js'
import {CONTROLNewsSliderVis}   from '../../redux/News/newsR.js'
import {CONTROLNewsSidebarVis}  from '../../redux/News/newsR.js'
import {CONTROLCalendarVis}     from '../../redux/Calendar/calendarR.js'
import {CONTROLSubVis}          from '../../redux/Subscribe/subscribeR.js'
import {CONTROLSubCardsVis}     from '../../redux/Subscribe/subscribeR.js'
import {CONTROLSubBannerVis}    from '../../redux/Subscribe/subscribeR.js'
import {CONTROLSubFormVis}      from '../../redux/Subscribe/subscribeR.js'
import {CONTROLProfileVis}      from '../../redux/Profile/ProfileR.js'
import {CONTROLProfileMenuVis}  from '../../redux/Profile/ProfileR.js'
import {CONTROLLoginVis}        from '../../redux/Login/loginR.js'


class AdminC extends React.Component {
    componentDidMount(){
        document.title = 'Admin panel'
    }
    render() {
        const changeVis = {
            CONTROLHeaderVis      : this.props.CONTROLHeaderVis,
            CONTROLFooterVis      : this.props.CONTROLFooterVis,
            CONTROLMainVis        : this.props.CONTROLMainVis,
            CONTROLSliderVis      : this.props.CONTROLSliderVis,
            CONTROLBannerVis      : this.props.CONTROLBannerVis,
            CONTROLContinueVis    : this.props.CONTROLContinueVis,
            CONTROLPrevNewsVis    : this.props.CONTROLPrevNewsVis,
            CONTROLPopularVis     : this.props.CONTROLPopularVis,
            CONTROLCatalogVis     : this.props.CONTROLCatalogVis,
            CONTROLNoveltyVis     : this.props.CONTROLNoveltyVis,
            CONTROLSearchVis      : this.props.CONTROLSearchVis,
            CONTROLCatalogListVis : this.props.CONTROLCatalogListVis,
            CONTROLNewsVis        : this.props.CONTROLNewsVis,
            CONTROLNewsListVis    : this.props.CONTROLNewsListVis,
            CONTROLNewsSliderVis  : this.props.CONTROLNewsSliderVis,
            CONTROLNewsSidebarVis : this.props.CONTROLNewsSidebarVis,
            CONTROLCalendarVis    : this.props.CONTROLCalendarVis,
            CONTROLSubVis         : this.props.CONTROLSubVis,
            CONTROLSubCardsVis    : this.props.CONTROLSubCardsVis,
            CONTROLSubBannerVis   : this.props.CONTROLSubBannerVis,
            CONTROLSubFormVis     : this.props.CONTROLSubFormVis,
            CONTROLProfileVis     : this.props.CONTROLProfileVis,
            CONTROLProfileMenuVis : this.props.CONTROLProfileMenuVis,
            CONTROLLoginVis       : this.props.CONTROLLoginVis,
        }
        return <Admin 
                    usersList       ={this.props.usersList}
                    controlAD       ={this.props.controlAD}
                    changeVis       ={changeVis}
               />
    }
};



let mapStateToProps = (state) => ({
    usersList : state.usersList,
    main      : state.main,
    controlAD : AdminControl(state),
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
    }),
    withRouter,
)   (AdminC);