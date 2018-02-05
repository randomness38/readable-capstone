import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import PostControl from './PostControl';
import { fromNow } from './Setdate';
import {deletePost, sendPostVote} from "../../actions/posts";

class PostItem extends Component {
    render () {

        const { post, deletePost, sendPostVote } = this.props;


        return (
            <div>
                <div>
                    <h6>{post.category}</h6>

                    <Link to={`/${post.category}/${post.id}`}>
                        <h4>{post.title}</h4>
                    </Link>
                    <footer>
                        Writte by {post.author}, { fromNow(post.timestamp)}
                    </footer>
                </div>
                <div>
                    <p>{post.commentCount === 0? 'Looking for Your Comment!':`${post.commentCount} comments!`}</p>
                </div>
                <div>
                    <PostControl
                        post={post}
                        onDelete={deletePost}
                        onSendVote={sendPostVote}
                    />
                </div>

            </div>
        );
    }
}

// export default PostItem;


export default  connect(
    null, { deletePost, sendPostVote }
)(PostItem);
