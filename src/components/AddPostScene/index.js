import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import uuid from 'uuid'

import { addPost } from '../../actions/posts';
import PostForm from '../Forms/PostForm'

class AddPostScene extends Component {

    handlePostSubmit = ( event ) => {
        event.preventDefault();
        const serializedPost = FormSerialize(event.target, {hash: true});
        const postId = uuid();
        const post = {
            ...serializedPost,
            id: postId,
            timestamp:Date.now()
        }
        this.props.addPost( post ).then( ({ p }) => {
            this.props.history.push(`/${post.category}/${post.id}`);
        });
    }
    render() {
        return (
            <div>
                <PostForm
                    formHeaderTitle="Add New Post"
                    onFormSubmit={this.handlePostSubmit} />
            </div>
        );
    }

}

export default connect(null, { addPost })(AddPostScene);
