import   React        from 'react';
import   News         from './News';
import { compose    } from 'redux';
import { connect    } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ChangeSearchValue } from '../../redux/News/newsR';

class NewsC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.screen.width,
            height: window.screen.height,
        };
        window.addEventListener("resize", this.resize.bind(this));
        this.resize.bind(this)
    }
    componentDidMount(){
        document.title = "Новости"
        window.scrollTo(0, 0);
    }
    resize() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }
    render() {
        return <News news={this.props.news} postId={this.props.match.params.postId} ChangeSearchValue={this.props.ChangeSearchValue} width={this.state.width}/>
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