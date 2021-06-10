import   React        from 'react';
import   News         from './News';
import { compose    } from 'redux';
import { connect    } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewsC extends React.Component {
    componentDidMount(){
        document.title = "Новости"
    }
    render() {
        return <News {...this.props} postId={this.props.match.params.postId} />
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