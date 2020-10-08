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

export const fetchItems = () => {
    return dispatch => {
        fetch('http://localhost:3090/items')
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'FETCH_ITEMS', items: responseJSON }))
    }
}

export const deleteItem = (item) => {
    return {
        type: 'DELETE_ITEM', item
    }
}