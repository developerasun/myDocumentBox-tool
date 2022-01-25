import * as Redux from 'redux'
import cakeReducer from '../cake/cakeReducer'
import iceCreamReducer from '../iceCream/iceCreamReducers'

export const rootReducer = Redux.combineReducers({
    // now state needs to be accessed separately since they are
    // in different reducers. For example, 
    // state.cake.props~ 
    // state.iceCream.props~
    cake : cakeReducer, 
    iceCream : iceCreamReducer
})
