export const categoriesReducer = (state = { categories: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_CATEGORIES': 
        console.log("state in loading categories", state)
            return {
                ...state,
                categories: [...state.categories],
                loading: true
            }
        case 'ADD_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
                loading: false
            }
        default: 
            return state
    }
}