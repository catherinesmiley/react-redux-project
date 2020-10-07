export const itemsReducer = (state = { items: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_ITEMS': 
            return {
                ...state,
                items: [...state.items],
                loading: true
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