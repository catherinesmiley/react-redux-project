export const fetchCategories = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_CATEGORIES' })
        fetch('http://localhost:3090/categories')
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'ADD_CATEGORIES', categories: responseJSON }))
    }
}

// let nextCategoryId = 0
export const addCategory = category => {
    console.log("category in action", category)
    return {
        type: 'ADD_CATEGORY',
        // id: nextCategoryId++,
        category
    }
}