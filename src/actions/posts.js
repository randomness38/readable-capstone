import * as Api from "../api";
import * as actions from './actionTypes'


export const loadPosts = (posts) => {
    return {
        type: actions.LOAD_POSTS,
        posts
    }
};

export const loadPost = (post) => {
    return {
        type: actions.LOAD_POST,
        post
    }
};


export const addPost = (body) => dispatch => {
    return Api.addPost(body)
        .then(post => dispatch(loadPost(post)));
};

export const editPost = (body) => dispatch => {
    return Api.editPost(body)
        .then(post => dispatch(loadPost(post)));
};

export const sendPostVote = (id, vote, type) => dispatch => {
    Api.vote(id, vote, type)
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



export const removePost = (id) => {
    return {
        type: actions.DELETE_POST,
        id
    }
};

export const deletePost = (id) => dispatch => {
    Api.deletePost(id)
        .then(() => dispatch(removePost(id)))
}

