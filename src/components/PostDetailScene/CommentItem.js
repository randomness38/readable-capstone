import React, { Component } from 'react';

class CommentItem extends Component {
    render () {
        const { comment } = this.props;
        return (
            <div>
                <li>{comment.id}</li>
            </div>
        );
    }
}

export default CommentItem;


// export default  connect(
//     null, { deletePost, sendVote }
// )(CommentItem);
