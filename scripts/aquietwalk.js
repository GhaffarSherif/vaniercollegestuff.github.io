var xmlhttp = new XMLHttpRequest();
var url = "scripts/aquietwalk.json";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	createPages(JSON.parse(xmlhttp.responseText));
	}
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

var root;
function createPages(textData) {
	root = textData.Root;
	show(root);
}

function show(data) {
	while (document.body.hasChildNodes()) {
		document.body.removeChild(document.body.firstChild);
	}
	
	var mainp = document.createElement("p");
	var ptext = document.createTextNode(data.Text);
	mainp.appendChild(ptext);
	document.body.appendChild(mainp);
	
	var optCount = 0;
	for (var opt in data.Options) {(function(option) {
		optCount++;
		
		var optp = document.createElement("p");
		optp.style.backgroundColor = "blue";
		optp.style.color = "white";
		optp.style.padding = "8px";
		optp.style.display = "inline-block";
		document.body.appendChild(optp);
		optp.onclick = function(e) {
			show(data.Options[option]);
		}
		
		var optptext = document.createTextNode("> " + option);
		optp.appendChild(optptext);
		document.body.appendChild(document.createElement("br"));
	})(opt);}
	
	if (optCount == 0) {
		var optp = document.createElement("p");
		optp.style.backgroundColor = "red";
		optp.style.color = "white";
		optp.style.padding = "8px";
		optp.style.display = "inline-block";
		document.body.appendChild(optp);
		optp.onclick = function(e) {
			show(root);
		}
		
		var optptext = document.createTextNode("Restart");
		optp.appendChild(optptext);
	}
}