import React from 'react';

const scaleNames = {
    C: 'Celsius', 
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component { 
    constructor(props) {
        super(props);

        // this.state = {} : this component doesn't have to have a state 
        // since the state will be lifted up to its closest anscestor

        // this.handleChange = this.handleChange.bind(this) : if arrow function is
        // used for class method, function.bind is not needed
    }
    
    handleChange = (event) => { 
        this.props.onTemperatureChange(event.target.value); 
    }

    // class component must include a render method 
    render() { 
        const { scale, temperature } = this.props; // deconstructuring in ES6
        return (
            <fieldset>
                {/* variable with square bracket can be used as a key in ES6  */}
                <legend>Enter Temperature in {scaleNames[scale]} : </legend> 
                <input
                    value={temperature}
                    onChange={this.handleChange}
                ></input>
            </fieldset>
        ); 
    }
}

export default TemperatureInput; 