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
        .then(item => dispatch({ type: 'ADD_ITEM', item}))
    }
}

export const fetchItems = () => {
    return dispatch => {
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'FETCH_ITEMS', items: responseJSON }))
    }
}

export const deleteItem = item => {
    console.log("item in delete item action", item)
    return dispatch => {
        dispatch({ type: 'DELETE_ITEM', item })
        // if you call dispatch after fetch, fetch might finish before or after dispatch runs
        fetch(`${BASE_URL}${item.id}`, {
            method: "DELETE",
        })
    }
}