export const fetchCategories = () => {
    return dispatch => 
        dispatch({ type: 'LOADING_CATEGORIES' })
        debugger;
        fetch('http://localhost:3090/categories')
        .then(resp => resp.json())
        .then(responseJSON => console.log(responseJSON.categories))
}