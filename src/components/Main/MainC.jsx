import   React        from 'react';
import   Main         from './Main';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

class MainC extends React.Component {
    componentDidMount(){
        document.title = "Главная"
        window.scrollTo(0, 0);
        return(
            <>123</>
        )
    }
    render() {
        return <Main {...this.props}
                     mainVis      ={this.props.main.mainVis}
                     slider       ={this.props.slider       }
                     banner       ={this.props.banner       }
                     continueView ={this.props.continueView }
                     prevNews     ={this.props.prevNews     }
                     popular      ={this.props.popular      }
                />
    }
};



let mapStateToProps = (state) => ({
    main         :state.main         ,
    slider       :state.slider       ,
    banner       :state.banner       ,
    continueView :state.continueView ,
    prevNews     :state.prevNews     ,
    popular      :state.popular      ,

    //Листы
    catalog  :state.catalog  ,
    news     :state.news     ,
});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (MainC);