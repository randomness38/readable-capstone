import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.posts
        };
    }

    return state;
};



const createList = (filter) => {

    const ids = (state = [], action) => {
        switch(action.type) {
            case 'FETCH_POSTS_SUCCESS':
                return action.filter === filter ?
                    action.response.result:
                    state ;
            default:
                return state;
        }
    }

    const isFetching = (state = false, action) => {
        if (action.filter !== filter)
            return state;

        switch(action.type) {
            case 'FETCH_POSTS_REQUEST':
                return true;
            case 'FETCH_POSTS_SUCCESS':
            case 'FETCH_POSTS_FAILURE':
                return false;
            default:
                return state;
        }
    }

    const errorMessage = (state = null, action) => {
        if (action.filter !== filter)
            return state;

        switch(action.type) {
            case 'FETCH_POSTS_REQUEST':
            case 'FETCH_POSTS_SUCCESS':
                return null;
            case 'FETCH_POSTS_FAILURE':
                return action.message;
            default:
                return state;
        }
    }

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
};

const listByFilter = combineReducers({
    readable: createList('readable'),
    react: createList('react'),
    redux: createList('redux'),
    udacity: createList('udacity'),
});

const posts = combineReducers({
    byId,
    listByFilter
});

export default posts

export const getPost = (state, id) => state.byId[id];
export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
