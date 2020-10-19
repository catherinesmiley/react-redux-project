export const fetchCategories = () => {
    return dispatch => {
        fetch('http://localhost:3090/categories')
        .then(resp => resp.json())
        .then(categories => dispatch({ type: 'FETCH_CATEGORIES', categories }))
    }
}

export const addCategory = category => {
    return dispatch => {
        fetch('http://localhost:3090/categories', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(category)
        })
        .then(resp => resp.json())
        .then(category => dispatch({ type: 'ADD_CATEGORY', category}))
    }
}