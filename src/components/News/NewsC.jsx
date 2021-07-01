import   React        from 'react';
import   News         from './News';
import { compose    } from 'redux';
import { connect    } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewsC extends React.Component {
    componentDidMount(){
        document.title = "Новости"
        window.scrollTo(0, 0);
    }
    render() {
        return <News {...this.props} postId={this.props.match.params.postId} />
    }
};

let mapStateToProps = (state) => ({
    news: state.news,
});

export default compose
    (
        connect(mapStateToProps, {}),
        withRouter,
    )(NewsC);