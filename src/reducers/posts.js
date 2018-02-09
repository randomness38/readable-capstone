import {normalize} from 'normalizr';
import * as actions from "../actions/actionTypes";
import {POST_LIST_SCHEMA} from './schemas';

const initialState = {
    ids: [],
    entities: {}
};

const posts = (state = initialState, action) => {

    switch (action.type) {

        case actions.LOAD_POSTS: {

            const {entities = {}, result = []} = normalize(action.posts, POST_LIST_SCHEMA);
            const {posts = {}} = entities;
            const newIds = result.filter(r => !state.ids.find(id => r === id));
            const newEntities = newIds.reduce((currEntities, id) => ({...currEntities, [id]: posts[id]}), {});

            return {
                ids: [...state.ids, ...newIds],
                entities: {...state.entities, ...newEntities}
            }
        }
        case actions.LOAD_POST: {

            const post = action.post;

            return {
                ids: [...state.ids.filter(id => id !== post.id), post.id],
                entities: {...state.entities, [post.id]: post}
            }

        }
        case actions.DELETE_POST: {
            const id = action.id;

            return {
                ...state,
                entities: {
                    ...state.entities,
                    [id]: {
                        ...state.entities[id],
                        deleted: true,
                    }
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default posts;
