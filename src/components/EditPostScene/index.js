import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import { editPost, fetchPosts } from '../../actions/posts';
import PostForm from '../Forms/PostForm'

class EditPostScene extends Component {
    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props.post)
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.match.params.idPost !== this.props.match.params.idPost ) {
            this.props.fetchPosts();
        }
    }

    handlePostUpdate = ( event ) => {
        event.preventDefault();
        const serializedPost = FormSerialize(event.target, {hash: true});
        const post = {
            ...this.props.post,
            ...serializedPost
        }
        this.props.updatePost( post ).then( ({ p }) => {
            this.props.history.push(`/${post.category}/${post.id}`);
        });
    }

    render () {

        const { post } = this.props;
        console.log(post)

        return (
            <div className="PostEdit container">
                <div className="card">
                    { post && post.title && (
                        <PostForm
                            formHeaderTitle="Edit Post"
                            post={post}
                            onFormSubmit={this.handlePostUpdate} />
                    )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        post: state.posts.entities[ownProps.match.params.idPost],
        // posts: state.posts.entities,
        // idPost: ownProps.match.params.idPost,

    }
}
export default connect(mapStateToProps, { editPost, fetchPosts })(EditPostScene);

