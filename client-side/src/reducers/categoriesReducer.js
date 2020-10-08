export const categoriesReducer = (state = { categories: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_CATEGORIES': 
            return {
                ...state,
                categories: [...state.categories],
                loading: true
            }
        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
                loading: false
            }
        case 'ADD_CATEGORY': 
        console.log("action in add category", action)
        console.log("state in add category", state)
            return {
                ...state,
                categories: [
                    ...state.categories, action.category
                ]
            }
        default: 
            return state
    }
}