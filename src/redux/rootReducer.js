
import {combineReducers} from 'redux'

import {bgReducer} from './bg.reducer'

const rootReducer = combineReducers({
    bgStore : bgReducer
})

export {rootReducer}