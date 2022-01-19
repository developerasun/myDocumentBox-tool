import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import { RootState } from '../store'

interface Product {
    title : string
    price : number
    id : string
} 

export const product : Product[] = [
    { title : "game 1", price : 1, id : v4() },
    { title : "game 2", price : 3, id : v4() },
    { title : "game 3", price : 222, id : v4() },
]

// createSlice creates your actions as well as your reducer
const productSlice = createSlice({
    name: 'products',
    initialState  : product, 
    reducers : {
        // PayloadAction : An action with a string type and an associated payload. 
        // This is the type of action returned by createAction() action creators.
        addProduct : (state, action: PayloadAction<Product>) => {
            return [action.payload, ...state]
        }
    }
})


// Action creators for the types of actions that are handled by the slice reducer.
export const { addProduct } = productSlice.actions

export const getProductSelector = ( state: RootState ) => state.product

export default productSlice.reducer