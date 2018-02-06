import React, { Component } from 'react';
import {connect} from "react-redux";
import FormSerialize from 'form-serialize';

import { fromNow, dateTimeFormat } from '../Forms/Setdate';
import CommentForm from '../Forms/CommentForm';
import CommentControl from './CommentControl';
import {deleteComment, sendCommentVote, editComment} from "../../actions/comments";

class CommentItem extends Component {

    state = {
        isEditing:false,
    }

    onEditing = () => {
        this.setState({
            isEditing: true,
        });
    }

    handleCommentEdit = ( event ) => {
        event.preventDefault();
        const serializedComment = FormSerialize(event.target, {hash: true});
        const updatedComment = {
            ...this.props.comment,
            ...serializedComment,
        }
        this.props.editComment( updatedComment, updatedComment.id ).then( data => {
            this.setState({
                isEditing: false
            })
        });
    }
    // TODO: commentForm으로 다시 해보기
    render () {
        const { comment, deleteComment, sendCommentVote } = this.props;
        return (
            <div>

                <hr />
                <time dateTime={ dateTimeFormat(comment.timestamp)}>{ fromNow(comment.timestamp)}</time>
                <h4>{comment.body}</h4>
                <h5>{comment.author}</h5>

                <div>
                    <CommentControl
                        comment={comment}
                        onDelete={deleteComment}
                        onSendVote={sendCommentVote}
                        onEditing={this.onEditing}
                    />
                </div>


                {/* Editing Pop*/}
                {
                    this.state.isEditing &&
                    <CommentForm
                        isEditing={this.state.isEditing}
                        onFormSubmit={this.handleCommentEdit}
                        comment={comment}/>
                }

                <hr />
            </div>
        )
    }
}

// export default CommentItem;


export default  connect(
    null, { deleteComment, sendCommentVote, editComment }
)(CommentItem);
