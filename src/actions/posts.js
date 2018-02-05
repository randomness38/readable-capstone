import * as Api from "../api";

export const LOAD_POSTS = '[Post] Load posts';
export const LOAD_POST = '[Post] Vote';
export const DELETE_POST = '[Post] Delete post';

export const loadPosts = (posts) => {
    return {
        type: LOAD_POSTS,
        posts
    }
};

export const loadPost = (post) => {
    return {
        type: LOAD_POST,
        post
    }
};


// export const removePost = (id) => {
//     return {
//         type: DELETE_POST,
//         id
//     }
// };


export const addPost = (body) => dispatch => {
    return Api.addPost(body)
        .then(post => dispatch(loadPost(post)));
};

export const editPost = (body) => dispatch => {
    return Api.editPost(body)
        .then(post => dispatch(loadPost(post)));
};

// 어떻게 reducer가 없어 이 type 을 다루는
export const sendVote = (id, vote) => dispatch => {
    Api.vote(id, vote)
        .then(post => dispatch(loadPost(post)))
};



export const fetchPosts = () => dispatch => {
    Api.getPosts()
        .then(posts => dispatch(loadPosts(posts)));
};

export const fetchPostsByCategory = (category) => dispatch => {
    Api.getCategoryPosts(category)
        .then(posts => dispatch(loadPosts(posts)))
};



//
export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
};

// export const deletePost = (id) => dispatch => {
//     Api.deletePost(id)
//         .then(() => dispatch(removePost(id)))
// }

//
// export const deletePost = ( id ) => dispatch => (
//     Api
//     .deletePost( id )
//     .then(dispatch({
//         type: DELETE_POST,
//         id
//     }))
// );
