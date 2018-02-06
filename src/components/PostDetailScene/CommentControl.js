import React, { Component } from 'react';

class CommentControl extends Component {

    render () {

        const { comment, onDelete, onSendVote } = this.props;

        return (
            <div>
                <div>
                    <div>
                        <i onClick={(e) => {
                            e.preventDefault();
                            onSendVote(comment.id,"upVote",'comments')
                        }}
                        >   UP  </i>

                        <span>{comment.voteScore}</span>

                        <i onClick={(e) => {
                            e.preventDefault();
                            onSendVote(comment.id,"downVote",'comments')

                        }}
                        >   DOWN  </i>

                    </div>

                        <button onClick={(e) => {
                            e.preventDefault();
                            this.props.onEditing();
                        }}
                        >Edit Button</button>

                    <button
                        onClick={ e => {
                            e.preventDefault();
                            onDelete(comment.id);
                            window.location.reload();
                        }}

                    >Delete Button</button>
                </div>
            </div>
        );
    }
}

export default CommentControl;

// function mapStateToProps(state, {params}){
//     return {
//         post: state.posts.entities[params.idPost],
//     }
// }
//
// // 이따가 mapDispatch 로 옮기는게 어때?
// // export default withRouter(connect(mapStateToProps)(CommentForm));
//
// export default  withRouter(connect(
//     mapStateToProps
// )(CommentControl));
