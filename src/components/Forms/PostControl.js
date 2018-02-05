// component 일 필요 없는데?
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {deletePost} from '../../actions/posts';
// import * as api from "../../api";

class PostControl extends Component {

    render () {

        const { post, onDeletePost, onSendVote, onBack } = this.props;
        // const { post } = this.props;
        // console.log(post)

        return (
            <div>
                <div>
                    {/*VOTE PLACE*/}
                    <div>
                        <i onClick={(e) => {
                            e.preventDefault();
                            onSendVote(post.id,"upVote")
                        }}
                          >   UP  </i>

                        <span>{post.voteScore}</span>

                        <i onClick={(e) => {
                            e.preventDefault();
                            onSendVote(post.id,"downVote")

                        }}
                        >   DOWN  </i>

                    </div>

                    <Link to={`/edit/post/${post.id}`}>
                        <button>Edit Button</button>
                    </Link>

                    <button
                        onClick={ e => {
                            e.preventDefault();
                            onDeletePost(post.id)
                            if (onBack) onBack()
                        }}

                    >Delete Button</button>
                </div>
            </div>
        );
    }
}

export default PostControl;
