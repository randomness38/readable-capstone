// component 일 필요 없는데?
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostControl extends Component {

    render () {
        const { post, onDeletePost, onSendVote } = this.props;

        return (
            <div>
                <div>
                    <Link to={`/edit/post/${post.id}`}>
                        <button>Edit Button</button>
                    </Link>
                    <button
                        onClick={(e) => onDeletePost(post.id) }
                    >Delete Button</button>
                </div>
            </div>
        );
    }
}

export default PostControl;
