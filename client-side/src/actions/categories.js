export const fetchCategories = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_CATEGORIES' })
        fetch('http://localhost:3090/categories')
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'FETCH_CATEGORIES', categories: responseJSON }))
    }
}

// let nextCategoryId = 0
// fetch post request
export const addCategory = category => {
    console.log("category in action", category)
    return {
        type: 'ADD_CATEGORY',
        // id: nextCategoryId++,
        category
    }
}