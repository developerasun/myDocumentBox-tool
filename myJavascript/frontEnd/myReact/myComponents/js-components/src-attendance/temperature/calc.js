import React from "react";
import TemperatureInput from "./temp";

function IsBoiled(props) {
    if (props.celsius >= 100) { 
        return <span>It is boiling</span>
    } else {
        return <span>It is not boiling</span>
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit-32)*5/9;
}

function toFahrenheit(celsius) {
    return (celsius*9/5)+32;
}

function tryConvert(temp, convert) { 
    const input = parseFloat(temp); 
    if (Number.isNaN(input)) { 
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString(); 
}

class Calculator extends React.Component { 
    constructor(props) {
        super(props);

        this.state = { 
            scale:'c', 
            temperature:""
        };
    }

    handleCelsiusChange = (temp) => {
        this.setState({scale:'c', temperature:temp}); 
    }

    handleFahreheitChange = (temp) => {
        this.setState({scale:'f', temperature:temp}); 
    }

    render() { 

        const { scale, temperature } = this.state; // deconstructuring an object
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput 
                scale="C"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahreheitChange} />

                <IsBoiled celsius={parseFloat(celsius)} />
    
            </div>
        );
    }
}

export default Calculator;