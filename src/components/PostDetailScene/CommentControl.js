// component 일 필요 없는데?
import React, { Component } from 'react';
// import {connect} from "react-redux";
// import { withRouter } from 'react-router-dom';

class CommentControl extends Component {

    render () {

        const { post, comment, onDelete, onSendVote } = this.props;
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
