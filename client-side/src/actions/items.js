export const addItem = item => {
    return dispatch => {
        fetch('http://localhost:3090/items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'ADD_ITEM', item}))
    }
}