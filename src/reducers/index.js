
import { combineReducers } from 'redux';
import categories from './categories';

const initial = {
    categories: {},
    categoriesIds: [],
    // posts: {},
    // postsIds: [],
    // comments: {},
    // activeModal: null,
    // selectedComment: null,
    // selectedPost: null
};
export default function mainReducer(state = initial, action) {

    let newState;

    newState = categories(state, action);
    // newState = postsReducer(newState, action);
    // newState = commentsReducer(newState, action);
    // newState = modalReducer(newState, action);
    //
    return newState;

}
