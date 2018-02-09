import React, { Component } from 'react';
import {connect} from "react-redux";
import FormSerialize from 'form-serialize';
import uuid from 'uuid'
import { Pager } from 'react-bootstrap';

import CommentItem from './CommentItem';
import ErorrPage from './ErorrPage';
import PostItem from '../Forms/PostItem';
import CommentForm from '../Forms/CommentForm';
// import {fetchComments, addComment} from "../../actions/comments";
// import {fetchPosts, deletePost, sendPostVote} from "../../actions/posts";

import * as actions from "../../actions";



class PostDetailScene extends Component {

    // TODO : ComponentDidMount() comments(ParentId) 해야 하나? fetchComments 파라미터 확인!
    componentDidMount() {
        // 여기서 이미 comment filter 해서 올텐데?
        const { idPost, fetchComments, fetchPosts} = this.props;
        // 제가보기에 얘는 all comments fetch 같슴다 기능을 못하능거 같아여 ??
        fetchComments(idPost);
        fetchPosts()
        console.log(this.props.comments)

    }



    windowBack = () => {
        window.history.back()
    }

    handleCommentAdd = ( event ) => {
        event.preventDefault();
        const serializedComment = FormSerialize(event.target, {hash: true});
        const commentId = uuid();
        const comment = {
            ...serializedComment,
            id: commentId,
            parentId: this.props.post.id,
            timestamp:Date.now()
        }

        this.props.addComment( comment )
        };

    sortCommentsByDate = ( comments ) => {
        if( comments !== undefined ) {
            return comments.sort((a, b) => a.timestamp > b.timestamp);
        } else {
            return comments;
        }
    }


    render () {
        const { post, commentIds, comments } = this.props;
        const postComments = commentIds.map( id => comments[id]);
        console.log(comments)
        console.log(postComments)
        return (
            <div>
                {post && postComments? (
                    <div>
                        <PostItem
                            post={post}
                            onBack={this.windowBack}/>
                        { this.sortCommentsByDate(postComments).map( comment => (
                            <CommentItem
                                key={comment.id}
                                comment={comment}
                            />
                        ))}
                        {/*{*/}
                            {/*postComments.map(comment => (*/}
                                {/*<CommentItem*/}
                                    {/*key={comment.id}*/}
                                    {/*comment={comment}*/}
                                {/*/>*/}
                            {/*))*/}
                        {/*}*/}
                        <h3>ADD COMMENT</h3>
                        <CommentForm
                            onFormSubmit={this.handleCommentAdd}
                            post={post}/>
                        <hr />
                        <Pager>
                            <Pager.Item href='/'>GO HOME</Pager.Item>{' '}
                        </Pager>
                    </div>
                ) : (
                    <div>
                        <div>
                            <ErorrPage />
                        </div>
                    </div>
                )}


            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        comments: state.comments.entities,
        commentIds: state.comments.ids,
        idPost: ownProps.match.params.idPost,
        post: state.posts.entities[ownProps.match.params.idPost],
    }
}

export default  connect(
    mapStateToProps,
    actions
)(PostDetailScene);


// export default  connect(
//     mapStateToProps, {
//         sendPostVote,
//         fetchComments,
//         fetchPosts,
//         deletePost,
//         addComment,
//         }
// )(PostDetailScene);
