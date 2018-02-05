import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../actions/posts';
import PostForm from '../Forms/PostForm'

class EditPostScene extends Component {

    render(){
        const { posts, idPost } = this.props;

    return (
        <div>
            <PostForm
                post={posts[idPost]}
                formHeaderTitle="Add New Post"
                onFormSubmit={this.props.editPost} />
        </div>
    );
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts.entities,
    }
}
export default connect(mapStateToProps, { editPost })(EditPostScene);

