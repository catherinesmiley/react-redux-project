export const itemsReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS': 
            return {
                ...state,
                items: action.items
            }
        case 'ADD_ITEM': 
            return {
                ...state,
                items: [
                    ...state.items, action.item
                ]
            }
        case 'DELETE_ITEM': 
        console.log("state in delete item", state)
        console.log("action in delete item", action)
            return {items: state.items.filter(i => i.id !== action.item.id)}
        default: 
            return state
    }
}