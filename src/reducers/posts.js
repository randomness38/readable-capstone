// import { combineReducers } from 'redux';
//
// const byId = (state = {}, action) => {
//     if (action.response) {
//         return {
//             ...state,
//             ...action.response.entities.posts
//         };
//     }
//
//     return state;
// };
//
//
//
// const createList = (filter) => {
//
//     const ids = (state = [], action) => {
//         switch(action.type) {
//             case 'FETCH_POSTS_SUCCESS':
//                 return action.filter === filter ?
//                     action.response.result:
//                     state ;
//             default:
//                 return state;
//         }
//     }
//
//     const isFetching = (state = false, action) => {
//         if (action.filter !== filter)
//             return state;
//
//         switch(action.type) {
//             case 'FETCH_POSTS_REQUEST':
//                 return true;
//             case 'FETCH_POSTS_SUCCESS':
//             case 'FETCH_POSTS_FAILURE':
//                 return false;
//             default:
//                 return state;
//         }
//     }
//
//     const errorMessage = (state = null, action) => {
//         if (action.filter !== filter)
//             return state;
//
//         switch(action.type) {
//             case 'FETCH_POSTS_REQUEST':
//             case 'FETCH_POSTS_SUCCESS':
//                 return null;
//             case 'FETCH_POSTS_FAILURE':
//                 return action.message;
//             default:
//                 return state;
//         }
//     }
//
//     return combineReducers({
//         ids,
//         isFetching,
//         errorMessage
//     });
// };
//
// const listByFilter = combineReducers({
//     readable: createList('readable'),
//     react: createList('react'),
//     redux: createList('redux'),
//     udacity: createList('udacity'),
// });
//
// const posts = combineReducers({
//     byId,
//     listByFilter
// });
//
// export default posts
//
// export const getPost = (state, id) => state.byId[id];
// export const getIds = (state) => state.ids;
// export const getIsFetching = (state) => state.isFetching;
// export const getErrorMessage = (state) => state.errorMessage;

import {
    FETCH_POSTS,
    // FETCH_POST,
    // ADD_POST,
    // UPDATE_POST,
    // DELETE_POST,
    // VOTE
} from '../actions/actionTypes';

const posts = (state = {}, action) => {
    // const { posts, post } = action;
    const { posts } = action;
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts
            };

        // case ADD_POST:
        // case UPDATE_POST:
        //     return {
        //         ...state,
        //         ...[posts],
        //         [posts]: post,
        //     };
        //
        // case FETCH_POST:
        //     return state.posts !== undefined ? {
        //         ...state,
        //         posts: state.posts.map( p => p.id === post.id ? post : p)
        //     } : state;
        //
        // case DELETE_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.filter( p => p.id !== post.id )
        //     };
        //
        // case VOTE:
        //     const { id, score } = action;
        //     if ( state.posts !== undefined ) {
        //         return {
        //             ...state,
        //             posts: state.posts.map((p) => {
        //                 if (p.id === id) p.voteScore = score;
        //                 return p;
        //             })
        //         };
        //     } else {
        //         return state;
        //     }


        default:
            return state;
    }
}

export default posts;
