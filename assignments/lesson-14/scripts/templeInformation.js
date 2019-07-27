var div = document.getElementById('temple-info')
var requestURL = 'https://edvardjimenez.github.io/assignments/lesson-14/scripts/temples.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var templesData = request.response;
    showData(templesData);
}


function showData(jsonObj) {
    var temples = jsonObj['temples'];

      
    for (var i = 0; i < temples.length; i++) { 
    if (temples[i].name=="Manila Temple"||
        temples[i].name=="Salt Lake Temple"||
        temples[i].name=="Rexburg Idaho Temple"||
        temples[i].name=="Rome Italy Temple")
    {
        var myFigure = document.createElement('figure');
        myFigure.className = "temples-page";
        var myFigCap = document.createElement('figcaption');
        myFigCap.className = "temples-figcap";
        
        var myImg = document.createElement('img');
        var myH3 = document.createElement('h3');
        var myH4 = document.createElement('h4');
        var myPara1 = document.createElement('p');

        if (temples[i].name=="Manila Temple")
            {
                myImg.setAttribute('src', 'images/temples/img-mnl-375.jpg');
                myImg.setAttribute('srcset', 'images/temples/img-mnl-375.jpg 375w, images/temples/img-mnl-768.jpg 768w, images/temples/img-mnl-1024.jpg 1024w, images/temples/img-mnl-1440.jpg 1440w');
                myImg.setAttribute('alt', 'Manila Philippines Temple');
            }
        else if
            (temples[i].name=="Salt Lake Temple")
            {
                myImg.setAttribute('src', 'images/temples/img-slc-375.jpg');
                myImg.setAttribute('srcset', 'images/temples/img-slc-375.jpg 375w, images/temples/img-slc-768.jpg 768w, images/temples/img-slc-1024.jpg 1024w, images/temples/img-slc-1440.jpg 1440w');
                myImg.setAttribute('alt', 'Salt Lake City Utah Temple');
            }
        else if
            (temples[i].name=="Rexburg Idaho Temple")
            {
                myImg.setAttribute('src', 'images/temples/img-idh-375.jpg');
                myImg.setAttribute('srcset', 'images/temples/img-idh-375.jpg 375w, images/temples/img-idh-768.jpg 768w, images/temples/img-idh-1024.jpg 1024w, images/temples/img-idh-1440.jpg 1440w');
                myImg.setAttribute('alt', 'Rexburg Idaho Temple');
            }
        else if
            (temples[i].name=="Rome Italy Temple")
            {
                myImg.setAttribute('src', 'images/temples/img-rom-375.jpg');
                myImg.setAttribute('srcset', 'images/temples/img-rom-375.jpg 375w, images/temples/img-rom-768.jpg 768w, images/temples/img-rom-1024.jpg 1024w, images/temples/img-rom-1440.jpg 1440w'); 
                myImg.setAttribute('alt', 'Rome Italy Temple');
            }
        
        myH3.innerHTML = temples[i].name + '<br><br>';
        myH4.innerHTML = 
            'Address: ' + temples[i].address + '<br>' +
            'Telephone: ' + temples[i].telephone + '<br>' +
            'Email: ' + temples[i].email + '<br>';

        myPara1.innerHTML =
            '<br><hr><br>' +
            'Services: ' + temples[i].services + "<br><br>" +
            'History: ' + temples[i].history + "<br><br>" +
            'Sessions: ' + temples[i].session + "<br><br>" +
            'Closures: ' + temples[i].closure;
        
        myFigure.appendChild(myImg);
        myFigure.appendChild(myFigCap); 
        myFigCap.appendChild(myH3);
        myFigCap.appendChild(myH4);
        myFigCap.appendChild(myPara1);
        

        div.appendChild(myFigure);
        div.appendChild(myFigCap);
      }
    }
  }