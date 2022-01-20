import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import validateProduct from '../fake.api'
import { RootState } from '../store'

export interface Product {
    title : string
    price : number
    id : string
} 

export const initialProduct : Product[] = [
    { title : "game 1", price : 1, id : v4() },
    { title : "game 2", price : 3, id : v4() },
    { title : "game 3", price : 222, id : v4() },
]

export enum ValidationState {
    Fulfilled,
    Pending,
    Rejected
}

interface ProductSliceState {
    product : Product[]
    validationState? : ValidationState
    errorMessage? : string
}

const initialState : ProductSliceState = {
    product : initialProduct,
    validationState : undefined,
    errorMessage : undefined
}

// For Redux specifically, "thunks" are a pattern of writing functions with logic
// inside that can interact with a Redux store's dispatch and getState methods.
// Thunks are the standard approach for writing async logic in Redux apps, 
// and are commonly used for data fetching. However, they can be used 
// for a variety of tasks, and can contain both synchronous and asynchronous logic.
export const addProductAsync = createAsyncThunk('product/addNewProduct', async (initialProduct : Product)=>{
    const validatedProduct = await validateProduct(initialProduct)
    return validatedProduct
})

// createSlice creates your actions as well as your reducer
const productSlice = createSlice({
    name: 'products',
    initialState  : initialState, 
    reducers : {
        // PayloadAction : An action with a string type and an associated payload. 
        // This is the type of action returned by createAction() action creators.
        addProduct : (state, action: PayloadAction<Product>) => {
            // return [action.payload, ...state]
            state.product.push(action.payload) // immutable.js are being developed for simpler state management
        }, 
        removeProduct : (state, action: PayloadAction<string>) =>({
            ...state, 
            // The filter() method creates a new array with all elements 
            // that pass the test implemented by the provided function
            product : state.product.filter(product => product.id !== action.payload)
        }), 
    extraReducers: builder => {
        
    }
    }
})


// Action creators for the types of actions that are handled by the slice reducer.
export const { addProduct, removeProduct } = productSlice.actions

export const getProductSelector = ( state: RootState ) => state.product

export default productSlice.reducer


// (builder) => {
//     builder.addCase(addProductAsync.fulfilled, (state, action) => ({
//         ...state, 
//         validationState : ValidationState.Fulfilled, 
//         errorMessage : undefined,
//         product : [...state.product, action.payload]
//     }))
//     builder.addCase(addProductAsync.rejected, (state, action) => ({
//         ...state, 
//         validationState : ValidationState.Rejected, 
//         errorMessage : action.error.message,
//     }))
//     builder.addCase(addProductAsync.pending, (state, action) => ({
//         ...state, 
//         validationState : ValidationState.Pending, 
//         errorMessage : undefined,
//     }))
// }