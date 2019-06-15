// //Get a temperature from the first text field
// //Get a wind speed from the second text field
// //Call the second function (windChill)
// //Store the value returned by windChill in a variable
// //Output the value returned by windChill to the div for the user to see
// function doInputOutput() {
//     var t = parseFloat(document.getElementById('tempInput').value);
//     var ws = parseFloat(document.getElementById('speedInput').value);
//     var wc = windChill(t, ws);

//     document.getElementById('outputDiv').innerHTML = wc + 'º Fahrenheit';
// }

// //Take a temperature in Fahrenheit as a parameter
// //Take a wind speed in miles per hour as a parameter
// //Calculate the wind chill factor as a temperature in Fahrenheit
// //Return the wind chill factor in Fahrenheit
// function windChill(tempF, speed) {
//     var f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));

//     // Round the wind chill factor to two digits after the decimal.
//     var digits = 2;
//     var multiplier = Math.pow(10, digits);
//     f = Math.round(f * multiplier) / multiplier;

//     return f;
// }

let t = parseInt(document.getElementById('tempF').innerHTML);
let ws = parseInt(document.getElementById('speed').innerHTML);

let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * t * Math.pow(ws, 0.16));

var digits = 2;
var multiplier = Math.pow(10, digits);
f = Math.round(f * multiplier) / multiplier;

document.getElementById('windChill').innerHTML = f + ' ºF';