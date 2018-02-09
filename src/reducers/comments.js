import {normalize} from 'normalizr';
import {COMMENT_LIST_SCHEMA} from './schemas';
import * as actions from "../actions/actionTypes";

// import {DELETE_COMMENT, LOAD_COMMENT} from "../actions/comments";
// import {DELETE_POST} from "../actions/posts";

const initialState = {
    ids: [],
    entities: {}
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case actions.LOAD_COMMENTS: {

            const {entities = {}, result = []} = normalize(action.comments, COMMENT_LIST_SCHEMA);
            const {comments = {}} = entities;
            const newIds = result.filter(r => !state.ids.find(id => r === id));
            const newEntities = newIds.reduce((currEntities, id) => ({...currEntities, [id]: comments[id]}), {});

            return {
                ids: [...state.ids, ...newIds],
                entities: {...state.entities, ...newEntities}
            }

        }

        case actions.LOAD_COMMENT: {

            const comment = action.comment;

            return {
                ids: [...state.ids.filter(id => id !== comment.id), comment.id],
                entities: {...state.entities, [comment.id]: comment}
            }

        }

        case actions.DELETE_COMMENT: {
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

        case actions.DELETE_POST: {
            const id = action.id;
            const comments = state.ids.map(id => state.entities[id]);
            const deletedComments = comments.filter(c => c.parentId === id);
            const deletedEntities = deletedComments.reduce((curr, item) => {
                return {...curr, [item.id]: {...item, parentDeleted: true}}
            }, {});

            return {
                ...state,
                entities: {
                    ...state.entities,
                    ...deletedEntities,
                }
            }
        }

        default: {
            return state;
        }

    }

}
