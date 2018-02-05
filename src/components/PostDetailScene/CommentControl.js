// component 일 필요 없는데?
import React, { Component } from 'react';


class CommentControl extends Component {

    render () {

        const { comment, onDelete, onSendVote } = this.props;
        // const { post } = this.props;
        // console.log(post)
        console.log(comment)
        console.log('comment')
        return (
            <div>
                <div>
                    {/*VOTE PLACE*/}
                    <div>
                        <i onClick={(e) => {
                            e.preventDefault();
                            onSendVote(comment.id,"upVote")
                        }}
                        >   UP  </i>

                        <span>{comment.voteScore}</span>

                        <i onClick={(e) => {
                            e.preventDefault();
                            onSendVote(comment.id,"downVote")

                        }}
                        >   DOWN  </i>

                    </div>

                    {/*<Link to={`/edit/post/${comment.id}`}>*/}
                        <button>Edit Button</button>
                    {/*</Link>*/}

                    <button
                        onClick={ e => {
                            e.preventDefault();
                            onDelete(comment.id)
                        }}

                    >Delete Button</button>
                </div>
            </div>
        );
    }
}

export default CommentControl;
