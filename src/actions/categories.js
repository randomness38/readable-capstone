

/**
 * NEW
 */

import {getCategories} from "../api";

export const LOAD_CATEGORIES = '[Categories] fetch';

export const loadCategories = (categories) =>  {
    return {
        type: LOAD_CATEGORIES,
        categories
    }
};
// 와우 어떻게 res.categories 가 될까?
export const fetchCategories = () => dispatch => {
    getCategories().then(res => {
        dispatch(loadCategories(res.categories))
    });
};




// import * as ReadableAPI from '../api';
// import * as action from './actionTypes'
//
// export const fetchCategories = () => dispatch => (
//     ReadableAPI
//         .fetchCategories()
//         .then(categories =>
//             dispatch({
//                 type: action.FETCH_CATEGORIES_SUCCESS,
//                 categories
//             }))
// );
//
//
// export const fetchPostComments = parentId => dispatch => (
//     ReadableAPI
//         .fetchPostComments(parentId)
//         .then(comments =>
//             dispatch({
//                 type: action.FETCH_POST_COMMENTS_SUCCESS,
//                 parentId,
//                 comments
//             }))
// );
//
// // ADD_COMMENT
//
// export const addNewComment = ( comment ) => dispatch => (
//     ReadableAPI
//         .addNewComment( comment )
//         .then( comment => dispatch({
//             type: action.ADD_COMMENT,
//             comment
//         }))
// );
//
// // DELETE_COMMENT
//
// export const removeComment = ( comment ) => dispatch => (
//     ReadableAPI
//         .removeComment( comment.id )
//         .then(dispatch({
//             type: action.DELETE_COMMENT,
//             comment
//         }))
// );
//
// // UPDATE_COMMENT
// export const updateComment = ( comment ) => dispatch => (
//     ReadableAPI
//         .updateComment( comment )
//         .then( comment => dispatch({
//             type: action.UPDATE_COMMENT,
//             comment,
//         }))
// );
//
//
// export const fetchPost = (id) => dispatch => (
//     ReadableAPI
//         .fetchPost(id)
//         .then(post => dispatch({
//             type: action.FETCH_POST,
//             post,
//         }))
// );
//
// // 왜 fetch 랑 update 랑 같은 action 을 쓰지
// export const updatePost = post => dispatch => (
//     ReadableAPI
//         .updatePost(post)
//         .then(post => dispatch({
//             type: action.UPDATE_POST,
//             post,
//         }))
// );
//
//
// // LOAD_NEW_POST
// export const addNewPost = ( post ) => dispatch => (
//     ReadableAPI
//         .addPost( post )
//         .then(post => dispatch({
//             type: action.ADD_POST,
//             post
//         }))
// );
//
// // DELETE_POST
// export const removePost = ( post ) => dispatch => (
//     ReadableAPI
//         .removePost( post.id )
//         .then(dispatch({
//             type: action.DELETE_POST,
//             post
//         }))
// );
//
// // FETCH_POSTS
// export const fetchPosts = (filter) => dispatch => (
//     ReadableAPI
//         .fetchPosts(filter)
//         .then(posts => dispatch({
//             type: action.FETCH_FILTER_POSTS,
//             posts
//         }))
// );
//
//
// export const setSort = (orderby, sort) => {
//     return {
//         type: action.SET_SORT,
//         orderby,
//         sort
//     }
// }
//
// export const postVote = (id, option, type) => dispatch => (
//     ReadableAPI
//         .vote(id, option, type)
//         .then( data => dispatch({
//             type: action.VOTE,
//             id,
//             score:data.voteScore
//         }))
// );


