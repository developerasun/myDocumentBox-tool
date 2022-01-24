import { connect } from "react-redux";
import { buyCake } from "../cake/cakeAction";

// getting Redux state and dispatch as React props
const CakeContainer = ({ numberOfCakes, buyCake }) => {
    return ( 
        <div>
            <h2>Number of cakes {numberOfCakes} </h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
     );
}

// selector also can be used instead of mapStateToProps, 
// which returns redux state information
// mapping Redux state to React(props) App
const mapStateToProps = state => {
    return { 
        numberOfCakes : state.numberOfCakes
    }
}

// mapping Redux dispatch state to React(props) App
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

// connect(redux state, redux dispatch)(react component)
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);