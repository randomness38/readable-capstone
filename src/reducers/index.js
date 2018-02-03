

const categories = (state = {}, action) => {
    const { categories } = action
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories
                // ...action.response.entities.categories
            };

<<<<<<< HEAD
// export const getVisiblePosts = (state, filter) => {
//     const ids = fromPosts.getIds(state.listByFilter[filter]);
//     return ids.map(id => fromPosts.getPost(state, id));
// }
//
// export const getIsFetching = (state, filter) => {
//     return fromPosts.getIsFetching(state.listByFilter[filter]);
// }
//
// export const getErrorMessage = (state, filter) => {
//     return fromPosts.getErrorMessage(state.listByFilter[filter]);
// }
=======
        default:
            return state;
    }
}

export default categories;

// export const getTodo = (state, id) => state.byId[id];
>>>>>>> parent of 4b2e0181... feetching 을 못함
