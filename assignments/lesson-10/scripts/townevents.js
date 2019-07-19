var te = document.getElementById('townEvents');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var eventData = request.response;
  showData(eventData);
}

function showData(jsonObj) {
  var townData = jsonObj['towns'];

  for (var i = 0; i < townData.length; i++) {
    if (townData[i].name == 'Preston') {

      var myUL = document.createElement('ul');
      var townEvent = townData[i].events;

      for (var j = 0; j < townEvent.length; j++) {
        var myLI = document.createElement('li');
        myLI.textContent = townEvent[j];
        myUL.appendChild(myLI);
      }
      te.appendChild(myUL);
    }
  }
}