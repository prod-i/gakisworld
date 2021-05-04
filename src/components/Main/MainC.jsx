import   React        from 'react';
import   Main         from './Main';
import { compose }    from 'redux';
import { connect }    from 'react-redux';
import { withRouter } from 'react-router-dom';

class MainC extends React.Component {
    componentDidMount(){
        console.log(1);
    }
    componentDidUpdate(){
        console.log(2); 
    }
    componentWillUnmount(){
        console.log(3);
    }
    render() {
        return <Main {...this.props}
                     slider       ={this.props.slider      }
                     banner       ={this.props.banner      }
                     continueView ={this.props.continueView}
                     prevNews     ={this.props.prevNews    }
                     popular      ={this.props.popular     }
                />
    }
};



let mapStateToProps = (state) => ({
    main         :state.main,
    slider       :state.slider,
    banner       :state.banner,
    continueView :state.continueView,
    prevNews     :state.prevNews,
    popular      :state.popular,
    catalogList  :state.catalogList,
});

export default compose
(
    connect(mapStateToProps, {}),
    withRouter,
)   (MainC);