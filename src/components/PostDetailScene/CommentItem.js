import React, { Component } from 'react';
import {connect} from "react-redux";
import FormSerialize from 'form-serialize';

import { fromNow, dateTimeFormat } from '../Forms/Setdate';
import CommentForm from '../Forms/CommentForm';
import CommentControl from './CommentControl';
import * as actions from '../../actions';
import './PostDetailScene.css';
import { Jumbotron } from 'react-bootstrap';


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
                <div className='jumbotron-container'>
                    <Jumbotron>
                        <time dateTime={ dateTimeFormat(comment.timestamp)}>{ fromNow(comment.timestamp)}</time>
                        <h1>{comment.body}</h1>
                        <p>
                            {comment.author}
                        </p>
                        <CommentControl
                            comment={comment}
                            onDelete={deleteComment}
                            onSendVote={sendCommentVote}
                            onEditing={this.onEditing}
                        />
                    </Jumbotron>


                </div>
                {
                    this.state.isEditing &&
                    <CommentForm
                        isEditing={this.state.isEditing}
                        onFormSubmit={this.handleCommentEdit}
                        comment={comment}/>
                }
            </div>
        )
    }
}

export default  connect(
    null, actions
)(CommentItem);
