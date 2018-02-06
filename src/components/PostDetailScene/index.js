import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import FormSerialize from 'form-serialize';
import uuid from 'uuid'

import CommentItem from './CommentItem';
import PostControl from '../Forms/PostControl';
import CommentForm from '../Forms/CommentForm';
import { fromNow, dateTimeFormat } from '../Forms/Setdate';
import {fetchComments} from "../../actions/comments";
import {addComment, editComment} from "../../actions/comments";
import {fetchPosts, deletePost, sendPostVote} from "../../actions/posts";



class PostDetailScene extends Component {

    // TODO : ComponentDidMount() comments(ParentId) 해야 하나? fetchComments 파라미터 확인!
    componentDidMount() {
        // 여기서 이미 comment filter 해서 올텐데?
        const { idPost, fetchComments, fetchPosts} = this.props;
        fetchPosts();
        fetchComments(idPost);
        // console.log(idPost)

    }
    windowBack = () => {
        window.history.back()
    }

    handleCommentAdd = ( event ) => {
        event.preventDefault();
        const serializedComment = FormSerialize(event.target, {hash: true});
        const postId = uuid();
        const comment = {
            ...serializedComment,
            id: postId,
            timestamp:Date.now()
        }
        this.props.addComment( comment ).then( ({ p }) => {
            this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`);
        });
    }

    // 이건 ComentItem 에서 보내야겄다. 여기에서는 this.props.comment 를 넣어줘야 함 잊지마!
    // handleCommentEdit = ( event ) => {
    //     event.preventDefault();
    //     const serializedComment = FormSerialize(event.target, {hash: true});
    //     const commentId = uuid();
    //     const comment = {
    //         ...this.props.comment,
    //         ...serializedComment,
    //     }
    // }


    render () {
        const { post, commentIds, deletePost, comments, sendPostVote } = this.props;
        const postComments = commentIds.map( id => comments[id]);

        // console.log(post)
        console.log(post)
        return (
            <div>
                {post && post.title && postComments? (
                    <div>
                        <div>
                            <div>
                                <h5>{post.category}</h5>
                                <h6>{post.author}</h6>
                                {/*왜 category를 못가져오지??*/}
                                {/*<h6 className="mb-0">{post.category}</h6>*/}
                                <time dateTime={ dateTimeFormat(post.timestamp)}>{ fromNow(post.timestamp)}</time>
                            </div>
                            <h4>{post.title}</h4>
                            <div>{post.body}</div>
                        </div>

                        {/*왜 post 만 다이렉트로 도킹이 안될까? Root 에서는 됐는데요*/}
                        <div>
                            <PostControl
                                post={post}
                                onDelete={deletePost}
                                onSendVote={sendPostVote}
                                onBack={this.windowBack}/>
                        </div>

                        {
                            postComments.map(comment => (
                                <CommentItem
                                    comment={comment}

                                />
                            ))
                        }

                    </div>
                ) : (
                    <div>
                        <div>
                            This post doesn't exist has been removed.
                        </div>
                    </div>
                )}
                <hr />
                {/*add 바로보내면 안되고!  */}
                <h3>ADD COMMENT</h3>
                <CommentForm
                    onFormSubmit={this.handleCommentAdd}
                    post={post}/>
                <hr />
                <h3>GO HOME</h3>
                <Link
                    to='/'
                >Main</Link>
            </div>
        );
    }
}
// export default PostItem;

function mapStateToProps(state, ownProps){
    return {
        comments: state.comments.entities,
        commentIds: state.comments.ids,
        idPost: ownProps.match.params.idPost,
        post: state.posts.entities[ownProps.match.params.idPost],
        // posts:state.posts.entities,
    }
}

// 이따가 mapDispatch 로 옮기는게 어때?
export default  connect(
    mapStateToProps, {
        sendPostVote,
        fetchComments,
        fetchPosts,
        deletePost,
        addComment,
        editComment}
)(PostDetailScene);


// export default PostDetailScene;
