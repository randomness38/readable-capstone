import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';


class CommentControl extends Component {

    render () {

        const { comment, onDelete, onSendVote } = this.props;

        return (
            <div>
                <div>
                    <div>
                        <a onClick={(e) => {
                            e.preventDefault();
                            onSendVote(comment.id,"upVote",'comments')
                        }}
                        >   UP  </a>

                        <Button bsSize="small">
                            <Glyphicon glyph="star" /> {comment.voteScore}
                        </Button>

                        <a onClick={(e) => {
                            e.preventDefault();
                            onSendVote(comment.id,"downVote",'comments')

                        }}
                        >   DOWN  </a>

                    </div>


                    <div className='comment-edit-button'>
                        <Button
                            bsStyle="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onEditing();
                            }}
                        >Edit
                        </Button>

                        <Button
                            onClick={ e => {
                                e.preventDefault();
                                onDelete(comment.id);
                                window.location.reload();
                            }}
                        >Delete
                        </Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default CommentControl;
