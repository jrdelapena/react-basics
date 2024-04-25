import TempInputField from "./TempInputField"

import React, {useState} from "react";

/**
 * Converts from Fahrenheit to Celsius
 * @param {number} fahrenheit The temperature to convert
 * @returns {number} The temperature in Celsius
 */
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

/**
 * Converts from Celsius to Fahrenheit
 * @param {number} celsius The temperature to convert
 * @returns {number} The temperature in Fahrenheit
 */
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export default function TempConverter() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);
    
    function getValueF(number) {
        setFahrenheit(number);
        setCelsius(toCelsius(number));
    }
    
    function getValueC(number) {
        setCelsius(number);
        setFahrenheit(toFahrenheit(number));
    }
    
    return (
        <>
            <TempInputField unit={'C'} func={getValueC} value={celsius} />
            <TempInputField unit={'F'} func={getValueF} value={fahrenheit} /> <br />
            <div id="message"> { celsius >= 100 ? "Boiling":"Not boiling..."}</div>
        </>
    );
}
