const BASE_URL = "http://localhost:3090/items/"

export const addItem = item => {
    return dispatch => {
        fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        .then(item => dispatch({ type: 'ADD_ITEM', item }))
    }
}

export const fetchItems = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(items => dispatch({ type: 'FETCH_ITEMS', items }))
    }
}

export const deleteItem = item => {
    return {
        type: 'DELETE_ITEM', 
        item
    }
}