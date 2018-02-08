import * as Api from "../api";

export const LOAD_COMMENTS = '[Comment] Load comments';
export const LOAD_COMMENT = '[Comment] Load comment';
export const ADD_COMMENT = '[Comment] Add comment';
export const EDIT_COMMENT = '[Comment] Edit comment';
export const DELETE_COMMENT = '[Comment] Delete comment';
export const VOTE_COMMENT = '[Comment] Vote comment';

export const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
};

export const fetchComments = (idPost) => dispatch => {
    Api.getComments(idPost)
        .then(comments => dispatch(loadComments(comments)));
};

export const loadComment = (comment) => {
    return {
        type: LOAD_COMMENT,
        comment
    }
};

export const addComment = (body) => dispatch => {
    return Api.addComment(body)
        .then(comment => dispatch(loadComment(comment)));
};

export const editComment = (body, id) => dispatch => {
    return Api.editComment(body, id)
        .then(comment => dispatch(loadComment(comment)));
};

// export const sendCommentVote = (id, vote) => dispatch => {
//     Api.vote(id, vote)
//         .then(comment => dispatch(loadComment(comment)));
// };

export const sendCommentVote = (id, vote, type) => dispatch => {
    Api.vote(id, vote, type)
        .then(comment => dispatch(loadComment(comment)))
};



export const removeComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
};

export const deleteComment = (id) => dispatch => {
    Api.deleteComment(id)
        .then(() => dispatch(removeComment(id)))
}
