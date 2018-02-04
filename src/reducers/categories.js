// // const categories = (state = {}, action) => {
// //     const { categories } = action
// //     switch (action.type) {
// //         case 'FETCH_CATEGORIES_SUCCESS':
// //             return {
// //                 ...state,
// //                 categories
// //                 // ...action.response.entities.categories
// //             };
// //
// //         default:
// //             return state;
// //     }
// // }
// //
// // export default categories;
//
//
import { normalize, schema } from 'normalizr';
import {LOAD_CATEGORIES} from "../actions/categories";

//
// // This will just add an id key to the data equal to the key name,
// // just to be able to pass this to normalize.
function prepareCategoryDataForNormalizer(rawData) {

    return {
        categories: rawData.map((e) => (
            {
                ...e, id: e.name
            }
        ))
    }

}

export default function categoriesReducer(state = {}, action) {
    switch (action.type) {

        case LOAD_CATEGORIES :

            const data = prepareCategoryDataForNormalizer(action.categories);

            const category = new schema.Entity('categories');
            const categoriesSchema = {categories: [category]};

            const normalizedData = normalize(data, categoriesSchema);

            return {
                // ...state,
                ids: normalizedData.result.categories,
                entities: normalizedData.entities.categories,


            };

        default :
            return state

    }
}

//
//
// const initialState = {
//     categories:[]
// };
//
// export default function reducer(state = initialState, action) {
//
//     switch (action.type) {
//         case LOAD_CATEGORIES: {
//             const {categories} = action;
//             return {categories};
//         }
//
//         default: {
//             return state;
//         }
//     }
//
// }
