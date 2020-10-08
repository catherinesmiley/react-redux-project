export const itemsReducer = (state = { items: [], loading: false }, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS': 
            return {
                ...state,
                items: action.items
            }
        case 'ADD_ITEM': 
        console.log("action in add item", action)
            return {
                ...state,
                items: [
                    ...state.items, action.item
                ]
            }
        default: 
            return state
    }
}