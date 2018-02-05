import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts';
import PostForm from '../Forms/PostForm'

const AddPostScene = () => {

    return (
        <div>
            <PostForm
                formHeaderTitle="Add New Post"
                onFormSubmit={this.props.addPost} />
        </div>
    );
}

export default connect(null, { addPost })(AddPostScene);
