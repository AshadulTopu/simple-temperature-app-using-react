import React from 'react';


// declare a object for controlling Celsius and Fahrenheit name in message.
const scaleNames ={
    c: 'Celsius',
    f: 'Fahrenheit',
}


export default class TemperatureInput extends React.Component {

    render() {
        const {scale, temperature, onTemperatureChange} = this.props; // received values from calculator component

        return(
                <fieldset>
                    <legend>Enter Temperature in {scaleNames[scale]}: </legend>
                    <input type="text" value={temperature} onChange={(e)=> onTemperatureChange(e, scale)} />
                </fieldset>
        )
    }
}