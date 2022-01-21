// Define an action
const BUY_CAKE = 'BUY_CAKE'
const REFUND_CAKE = 'REFUND_CAKE'

// Define an action creator
function buyCake() {
    return {
        type : BUY_CAKE, 
        madeBy : "Jake"
    }
}

function refundCake() {
    return {
        type : REFUND_CAKE, 
        cause : 'Simple remorse',
        consumed : false
    }
}

// Define an initial state
const initialState = {
    numberOfCakes : 10
}

// Define a reducer 
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE : 
        // Create a copied state object first
        // and then only changes properties needed to change.
            return {
                ...state,
                numberOfCakes : state.numberOfCakes -1
            }
        case REFUND_CAKE : 
            if (state.numberOfCakes < 10) {
                return {
                    ...state,
                    numberOfCakes : state.numberOfCakes +1
                }
            }
        default : return state
    }
}