import React from 'react';
import BoilingVerdict from './BollingVerdict';


// parent component
export default class Calculator extends React.Component {

    // declare a state variable name temperature.
    // syntax of state in class components
    state = {
        temperature: '',
    }

    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        // state destructor 
        const { temperature } = this.state;

        return(
            <div>
                <fieldset>
                    <legend>Enter Temperature in Celsius: </legend>
                    <input type="text" value={temperature} onChange={this.onTemperatureChange} />
                </fieldset>

                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        )
    }
}