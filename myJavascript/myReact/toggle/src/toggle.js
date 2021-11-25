import React from 'react';
import { ReactDOM } from 'react';


class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isToggled:false};
        // For a given function, creates a bound function that 
        // has the same body as the original function. The this 
        /// object of the bound function is associated with the 
        // specified object, and has the specified initial parameters.
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState(state => ({
            isToggled: !(state.isToggled)
        })); 
    }

    render() {

        return (
            <button onClick={this.clickHandler}>
                {this.state.isToggled ?'ON':'OFF'}
            </button>
        );
    }

}

export default Toggle; 