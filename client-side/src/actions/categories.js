export const fetchCategories = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_CATEGORIES' })
        fetch('http://localhost:3090/categories')
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'ADD_CATEGORIES', categories: responseJSON }))
    }
}