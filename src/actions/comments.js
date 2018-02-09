import * as Api from "../api";
import * as action from './actionTypes'

export const loadComments = (comments) => {
    return {
        type: action.LOAD_COMMENTS,
        comments
    }
};

export const fetchComments = (idPost) => dispatch => {
    Api.getComments(idPost)
        .then(comments => dispatch(loadComments(comments)));
};

export const loadComment = (comment) => {
    return {
        type: action.LOAD_COMMENT,
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

export const sendCommentVote = (id, vote, type) => dispatch => {
    Api.vote(id, vote, type)
        .then(comment => dispatch(loadComment(comment)))
};



export const removeComment = (id) => {
    return {
        type: action.DELETE_COMMENT,
        id
    }
};

export const deleteComment = (id) => dispatch => {
    Api.deleteComment(id)
        .then(() => dispatch(removeComment(id)))
}
