const categories = (state = {}, action) => {
    const { categories } = action
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                ...state.categories,
                ...categories
                // ...action.response.entities.categories
            };

        default:
            return state;
    }
}

export default categories
