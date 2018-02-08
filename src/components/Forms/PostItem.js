import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import PostControl from './PostControl';
import { fromNow } from './Setdate';
import {deletePost, sendPostVote} from "../../actions/posts";
import { Label,Jumbotron,Button } from 'react-bootstrap';


class PostItem extends Component {
    render () {

        const { post, deletePost, sendPostVote } = this.props;


        return (
            <div>
                <Jumbotron>
                    <div>
                        <h3>{post.category}</h3>

                        <Link to={`/${post.category}/${post.id}`}>
                            <h4>{post.title}</h4>
                        </Link>
                        <footer>
                            Writte by {post.author}, { fromNow(post.timestamp)}
                        </footer>
                    </div>
                    <div className='comment-box'>
                        <span>{post.commentCount === 0? 'Looking for Your Comment!':`${post.commentCount} comment` }</span>
                        <span className='far fa-comments'> </span>
                    </div>
                    <div>
                        <PostControl
                            post={post}
                            onDelete={deletePost}
                            onSendVote={sendPostVote}
                        />
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

// export default PostItem;


export default  connect(
    null, { deletePost, sendPostVote }
)(PostItem);
