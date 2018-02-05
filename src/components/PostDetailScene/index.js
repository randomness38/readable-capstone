import React, { Component } from 'react';
import {connect} from "react-redux";
import CommentItem from './CommentItem';
// import { fromNow } from '../Forms/Setdate';
import PostItem from '../Forms/PostItem';
import { fetchPosts } from '../../actions/posts';
// TODO : delete, vote action creator 생성해서 CommentItem 으로 도킹하기.
import {deleteComment, sendVote, fetchComments} from "../../actions/comments";


class PostDetailScene extends Component {

    // TODO : ComponentDidMount() comments(ParentId) 해야 하나? fetchComments 파라미터 확인!
    componentDidMount() {
        // 여기서 이미 comment filter 해서 올텐데?
        const { idPost, fetchComments, fetchPosts} = this.props;
        fetchPosts();
        fetchComments(idPost);
        // console.log(idPost)

    }


    render () {
        const { idPost, posts, commentIds, comments, sendVote, deleteComment} = this.props;
        const postComments = commentIds.map( id => comments[id]);
        console.log(posts[idPost])

        return (
            <div>
                <PostItem post={posts[idPost]}/>
                <div>
                    {
                        postComments.map(comment => (
                            <CommentItem comment={comment}/>
                        ))
                    }
                </div>

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
        // post: state.posts.entities[ownProps.match.params.idPost],
        posts:state.posts.entities,
    }
}

export default  connect(
    mapStateToProps, { deleteComment, sendVote, fetchComments, fetchPosts }
)(PostDetailScene);


// export default PostDetailScene;
