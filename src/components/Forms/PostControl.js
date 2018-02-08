import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PostControl extends Component {

    render () {

        const { post, onDelete, onSendVote, onBack } = this.props;
        return (
            <div className='post-control-container'>
                <div>
                    {/*VOTE PLACE*/}
                    <div>
                        <i onClick={(e) => {
                            e.preventDefault();
                            onSendVote(post.id,"upVote",'posts')
                        }}
                          >   UP  </i>

                        <span>{post.voteScore}</span>

                        <i onClick={(e) => {
                            e.preventDefault();
                            onSendVote(post.id,"downVote",'posts')

                        }}
                        >   DOWN  </i>

                    </div>

                    <Link to={`/edit/post/${post.id}`}>
                        <button className='edit-button'>Edit</button>
                    </Link>

                    <button
                        className='delete-button'
                        onClick={ e => {
                            e.preventDefault();
                            onDelete(post.id)
                            if (onBack) onBack()
                        }}

                    >Delete</button>
                </div>
            </div>
        );
    }
}

export default PostControl;
