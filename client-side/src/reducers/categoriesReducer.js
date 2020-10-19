export const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return action.categories
        case 'ADD_CATEGORY': 
            return [...state, action.category]
        default: 
            return state
    }
}