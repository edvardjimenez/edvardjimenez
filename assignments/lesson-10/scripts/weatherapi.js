let weatherRequest = new XMLHttpRequest();
let apiURLstring =  'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5943ce71a52d546135f1d898a9d7516c';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
}