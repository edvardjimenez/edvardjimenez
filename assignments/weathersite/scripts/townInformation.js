var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
  var townInfo = request.response;
  showData(townInfo);
}

function showData(jsonObj) {
  var townData = jsonObj["towns"];

  for (var i = 0; i < townData.length; i++) {
    if (townData[i].name == "Preston" || townData[i].name == "Fish Haven" || townData[i].name == "Soda Springs") {
      var string = "";
      for (var j = 0; j < townData[i].name.length; j++) {
        if (townData[i].name.charAt(j) != " ") {
          string += townData[i].name.charAt(j);
        }
      }
      console.log(string);
      var townName = document.getElementById(string);

      var myTown = document.createElement("h2");
      myTown.textContent = townData[i].name;
      townName.appendChild(myTown);

      var myH3 = document.createElement("h3");
      myH3.textContent = townData[i].motto;
      townName.appendChild(myH3);

      var myArticle = document.createElement("article");
      townName.appendChild(myArticle);

      var myPara = document.createElement("p");
      myPara.innerHTML = "Year Founded: " + townData[i].yearFounded + "<br>" +
                         "Population: " + townData[i].currentPopulation + "<br>" +
                         "Average Rainfall: " + townData[i].averageRainfall;
      myArticle.appendChild(myPara);
    }
  }
}
