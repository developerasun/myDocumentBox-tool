import { BUY_CAKE } from "./cakeTypes"

const initalCakeState = {
    numberOfCakes : 10
}

const cakeReducer = ( state = initalCakeState, action ) => { 
    switch(action.type) {
        case BUY_CAKE :
            if (state.numberOfCakes > 0)
            return { 
                ...state, 
                numberOfCakes : state.numberOfCakes - 1
            }
        default : 
            return state
    }
}

export default cakeReducer