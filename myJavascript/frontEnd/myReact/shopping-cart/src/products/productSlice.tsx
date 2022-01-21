import { createAsyncThunk, createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import validateProduct from '../fake.api'
import { RootState } from '../store'

// Product setting
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

// fake api validation setting : enum classifies validation state by number
export enum ValidationState {
    Fulfilled, // 0
    Pending, // 1
    Rejected // 2
}

// reducer(createSlice) setting
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

// const productAdapter = createEntityAdapter<Product>()
// const initalState = 

// async request setting with the fake api
export const addProductAsync = createAsyncThunk('products/addNewProduct', async (initialProduct : Product)=>{
    const validatedProduct = await validateProduct(initialProduct)
    return validatedProduct
})

// createSlice : slice name, initial state, reducer's' object, extraReducer(for async request)
const productSlice = createSlice({
    name: 'products',
    initialState  : initialState, 
    reducers : {
        addProduct : (state, action: PayloadAction<Product>) => {
            // return [action.payload, ...state]
            state.product.push(action.payload) // immutable.js are being developed for simpler state management
        }, 
        removeProduct : (state, action: PayloadAction<string>) =>({
            ...state, 
            product : state.product.filter(product => product.id !== action.payload)
        }), 
    }, 
    extraReducers : builder => {
        builder.addCase(addProductAsync.fulfilled, (state, action) => ({
            ...state, 
            validationState : ValidationState.Fulfilled, 
            errorMessage : undefined, 
            product : [ ...state.product, action.payload ]
        }))
        builder.addCase(addProductAsync.rejected, (state, action)=>({
            ...state, 
            validationState : ValidationState.Rejected, 
            errorMessage : action.error.message
        }))
        builder.addCase(addProductAsync.pending, (state, action)=>({
            ...state, 
            validationState : ValidationState.Pending, 
            errorMessage : undefined
        }))
    }
})

export const { addProduct, removeProduct } = productSlice.actions
export const getProductSelector = ( state: RootState ) => state.product.product
export const getErrorMessage = ( state : RootState ) => state.product.errorMessage
export default productSlice.reducer
