let weatherRequest = new XMLHttpRequest();
let apiURLstring =  'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=5943ce71a52d546135f1d898a9d7516c';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('weather-desc').innerHTML = weatherData.weather[0].description;
    document.getElementById('weather-temp').innerHTML = weatherData.main.temp;
    document.getElementById('weather-humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('weather-speed').innerHTML = weatherData.wind.speed;

    let t = parseInt(document.getElementById('weather-temp').innerHTML);
    let ws = parseInt(document.getElementById('weather-speed').innerHTML);

    let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * t * Math.pow(ws, 0.16));

    var digits = 2;
    var multiplier = Math.pow(10, digits);
    f = Math.round(f * multiplier) / multiplier;

    document.getElementById('wind-chill').innerHTML = f + ' ºF';
}