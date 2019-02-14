document.getElementById("JokeSubmit").addEventListener("click", function(event) {
	
  event.preventDefault();
  const url = "https://official-joke-api.appspot.com/random_joke";
  var req = new XMLHttpRequest();
  req.overrideMimeType("application/json");
  req.open('GET', url, true);
  req.onload  = function() {
    var json = JSON.parse(req.responseText);
	let results = "";
    results += "<h2>All right: </h2>" + "<h2>" + json.setup + "</h2></br></br><h1> " + json.punchline + "</h1>";
	document.getElementById("JokeResults").innerHTML = results;
  };
  req.send(null);
});

document.getElementById("FailSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  let results = "";
  results += "<h2>Well, too Dad!</h2>";
  document.getElementById("JokeResults").innerHTML = results;
});

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
	xmlHttp.responseType = 'json';
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
	console.log(xmlHttp);
    return xmlHttp;
}