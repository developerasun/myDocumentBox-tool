import { configureStore } from '@reduxjs/toolkit'
import product from './products/productSlice'

// A friendly abstraction over the standard Redux createStore() function.
const store = configureStore({
    reducer : { product }
})

// ReturnType : Obtain the return type of a function type
export type RootState = ReturnType<typeof store.getState>

export default store