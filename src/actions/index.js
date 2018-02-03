import * as ReadableAPI from '../api';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { getIsFetching } from '../reducers';

import * as actions from './ActionTypes'

// Categories
export const fetchCategories = () => dispatch => (
    ReadableAPI
        .fetchCategories()
        .then(categories =>
            dispatch({
                type: actions.FETCH_CATEGORIES_SUCCESS,
                categories
            }))
);

// export const fetchPosts = (filter) => dispatch => (
//     ReadableAPI
//         .fetchPosts(filter)
//         .then(posts => dispatch({
//             type: actions.FETCH_POSTS,
//             posts
//         }))
// );

export const fetchPosts = (category) => (dispatch, getState) => {
    if (getIsFetching(getState(), category)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_POSTS_REQUEST',
        category
    });

    return ReadableAPI
        .fetchPosts(category).then(
        response => {
            dispatch({
                type: 'FETCH_POSTS_SUCCESS',
                category,
                response: normalize(response, schema.arrayOfPosts),
            })
        },
        error => {
            dispatch({
                type: 'FETCH_POSTS_FAILURE',
                category,
                message: error.message || 'Something went wrong.'
            })
        }
    );
}


// FETCH_POST_COMMENTS

export const fetchPostComments = parentId => dispatch => (
    ReadableAPI
        .fetchPostComments(parentId)
        .then(comments =>
            dispatch({
                type: actions.FETCH_POST_COMMENTS_SUCCESS,
                parentId,
                comments
            }))
);

// ADD_COMMENT

export const addNewComment = ( comment ) => dispatch => (
    ReadableAPI
        .addNewComment( comment )
        .then( comment => dispatch({
            type: actions.ADD_COMMENT,
            comment
        }))
);

// DELETE_COMMENT

export const removeComment = ( comment ) => dispatch => (
    ReadableAPI
        .removeComment( comment.id )
        .then(dispatch({
            type: actions.DELETE_COMMENT,
            comment
        }))
);

// UPDATE_COMMENT
export const updateComment = ( comment ) => dispatch => (
    ReadableAPI
        .updateComment( comment )
        .then( comment => dispatch({
            type: actions.UPDATE_COMMENT,
            comment,
        }))
);

export const fetchPost = (id) => dispatch => (
    ReadableAPI
        .fetchPost(id)
        .then(post => dispatch({
            type: actions.FETCH_POST,
            post,
        }))
);

// 왜 fetch 랑 update 랑 같은 action 을 쓰지
export const updatePost = post => dispatch => (
    ReadableAPI
        .updatePost(post)
        .then(post => dispatch({
            type: actions.UPDATE_POST,
            post,
        }))
);


// LOAD_NEW_POST
export const addNewPost = ( post ) => dispatch => (
    ReadableAPI
        .addPost( post )
        .then(post => dispatch({
            type: actions.ADD_POST,
            post
        }))
);

// DELETE_POST
export const removePost = ( post ) => dispatch => (
    ReadableAPI
        .removePost( post.id )
        .then(dispatch({
            type: actions.DELETE_POST,
            post
        }))
);
