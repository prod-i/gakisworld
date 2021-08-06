import   React        from 'react';
import   News         from './News';
import { compose    } from 'redux';
import { connect    } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ChangeSearchValue } from '../../redux/News/newsR';

class NewsC extends React.Component {
    componentDidMount(){
        document.title = "Новости"
        window.scrollTo(0, 0);
    }
    render() {
        return <News news={this.props.news} postId={this.props.match.params.postId} ChangeSearchValue={this.props.ChangeSearchValue}/>
    }
};

let mapStateToProps = (state) => ({
    news: state.news,
});

export default compose
    (
        connect(mapStateToProps, {ChangeSearchValue}),
        withRouter,
    )(NewsC);