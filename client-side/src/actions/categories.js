export const fetchCategories = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_CATEGORIES' })
        fetch('http://localhost:3090/categories')
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'FETCH_CATEGORIES', categories: responseJSON }))
    }
}

// let nextCategoryId = 2
// fetch post request
export const addCategory = category => {
    console.log("category in action", category)
    return dispatch => {
        dispatch({ type: 'LOADING_CATEGORIES' })
        fetch('http://localhost:3090/categories', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(category)
        })
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'ADD_CATEGORY', category}))
        // type: 'ADD_CATEGORY',
        // // id: nextCategoryId++,
        // category
    }
}