// component 일 필요 없는데?
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {deletePost} from '../../actions/posts';
// import * as api from "../../api";

class PostControl extends Component {

    render () {

        const { post, onDeletePost, onSndVote } = this.props;
        // const { post } = this.props;
        console.log(post.id)

        return (
            <div>
                <div>
                    {/*VOTE PLACE*/}
                    <div>
                        <i onClick={(e) => {
                            e.preventDefault();
                            onSndVote(post.id,"upVote")
                        }}
                          >   UP  </i>

                        <span>{post.voteScore}</span>

                        <i onClick={(e) => {
                            e.preventDefault();
                            onSndVote(post.id,"downVote")
                        }}
                        >   DOWN  </i>

                    </div>

                    <Link to={`/edit/post/${post.id}`}>
                        <button>Edit Button</button>
                    </Link>

                    <button
                        onClick={ e => {
                            // 이거 안하면 post 싹다 삭제 됨!
                            e.preventDefault();
                            onDeletePost(post.id)
                        }}

                    >Delete Button</button>
                </div>
            </div>
        );
    }
}

export default PostControl;
