import { combineReducers } from 'redux';
import posts, * as fromPosts from './posts';
import categories from './categories';

export default combineReducers({
    posts,
    categories,
});

// export const getVisiblePosts = (state, filter) => {
//     const ids = getIds(state.listByFilter[filter]);
//     return ids.map(id => getPost(state, id));
// }
//
// export const getIsFetching = (state, filter) => {
//     return getIsFetching(state.listByFilter[filter]);
// }
//
// export const getErrorMessage = (state, filter) => {
//     return getErrorMessage(state.listByFilter[filter]);
// }

export const getVisiblePosts = (state, filter) => {
    const ids = fromPosts.getIds(state.listByFilter[filter]);
    return ids.map(id => fromPosts.getPost(state, id));
}

export const getIsFetching = (state, filter) => {
    return fromPosts.getIsFetching(state.listByFilter[filter]);
}

export const getErrorMessage = (state, filter) => {
    return fromPosts.getErrorMessage(state.listByFilter[filter]);
}
