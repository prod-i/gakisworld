import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './../../../../../style/admin/dataAD.css';
import './../../../../../style/admin/addNews.css';
import AddHeaderNews from './AddHeaderNews';
import TextEditor from './TextEditor';
import { setPost } from '../../../../../redux/News/newsR';


class AddingNewsAD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: {
                id: this.props.newsList.length + 1,
                imgM: null,
                title: '',
                author: this.props.profileName,
                date: new Date(),
                important: false,
                popular: false,
                about: false,
                descr: ``,
                text: ``,
            },
        };
        this.handleState = this.handleState.bind(this);
    }

    handleState(item, value) {
        this.setState({
            newPost: { ...this.state.newPost, [item]: value }
        });
    }

    render() {
        return (
            <div className='AddingNews'>
                <div className='AddingNews_header'>
                    <div className='AddingNews_title t'>Добавление новой статьи</div>
                    <div className='AddingNews_upload-button t' onClick={()=>{
                        this.props.setPost(this.state.newPost)
                        }}>Upload</div>
                </div>

                <AddHeaderNews
                    imgM={this.state.newPost.imgM}
                    title={this.state.newPost.title}
                    author={this.state.newPost.author}
                    date={this.state.newPost.date}
                    important={this.state.newPost.important}
                    popular={this.state.newPost.popular}
                    about={this.state.newPost.about}
                    descr={this.state.newPost.descr}
                    handleState={this.handleState}
                />

                <TextEditor title={this.state.newPost.title} text={this.state.newPost.text} handleState={this.handleState}/>

            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    newsList: state.news.newsList.list,
    profileName: state.profile.profile.nickName,
});

export default compose
    (
        connect(mapStateToProps, {setPost}),
        withRouter,
    )(AddingNewsAD);