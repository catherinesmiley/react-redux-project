import { combineReducers } from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { itemsReducer } from './itemsReducer'

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer
})