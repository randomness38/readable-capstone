import React, { Component } from 'react';
import {connect} from "react-redux";
import { fromNow, dateTimeFormat } from '../Forms/Setdate';
import CommentControl from './CommentControl';
import {deleteComment, sendCommentVote} from "../../actions/comments";

class CommentItem extends Component {

    render () {
        const { comment, deleteComment, sendCommentVote } = this.props;
        return (
            <div>
                <hr />
                <time dateTime={ dateTimeFormat(comment.timestamp)}>{ fromNow(comment.timestamp)}</time>
                <h4>{comment.body}</h4>
                <h5>{comment.author}</h5>
                <hr />

                <div>
                    <CommentControl
                        comment={comment}
                        onDelete={deleteComment}
                        onSendVote={sendCommentVote}
                    />
                </div>

            </div>
        );
    }
}

// export default CommentItem;


export default  connect(
    null, { deleteComment, sendCommentVote }
)(CommentItem);
