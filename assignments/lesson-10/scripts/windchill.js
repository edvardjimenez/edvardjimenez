let t = parseInt(document.getElementById('weather-temp').innerHTML);
let ws = parseInt(document.getElementById('weather-speed').innerHTML);

let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * t * Math.pow(ws, 0.16));

var digits = 2;
var multiplier = Math.pow(10, digits);
f = Math.round(f * multiplier) / multiplier;

document.getElementById('wind-chill').innerHTML = f + ' ºF';