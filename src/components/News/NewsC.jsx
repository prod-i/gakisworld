import   React        from 'react';
import   News         from './News';
import { compose    } from 'redux';
import { connect    } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewsC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalVisible : false   ,
            ModalTitle   : 'title ',
            ModalPicture : 'img   ',
            ModalContent : 'text  ',
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.showModal    = this.showModal.bind   (this);
    }
    componentDidMount(){
        document.title = "Новости"
    }
    handleCancel(){
        this.setState({ModalVisible : false })
    }
    showModal(title, text, img){
        this.setState({ModalVisible : true  })
        this.setState({ModalTitle   : title })
        this.setState({ModalContent : text  })
        this.setState({ModalPicture : img   })
    }

    render() {
        return <News {...this.props}
                     ModalVisible ={this.state.ModalVisible}                
                     ModalTitle   ={this.state.ModalTitle}                
                     ModalPicture ={this.state.ModalPicture}                
                     ModalContent ={this.state.ModalContent}    
                     handleCancel ={this.handleCancel}
                     showModal    ={this.showModal}            
               />
    }
};

let mapStateToProps = (state) => ({
    newsList: state.newsList,
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(NewsC);