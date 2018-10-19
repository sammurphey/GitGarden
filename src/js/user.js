function xhRequest(url, cb) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       // Typical action to be performed when the document is ready:
		   var res = xhttp.responseText;
		   if (res.charAt(0) == "{") {
			   res = JSON.parse(res, true);
		   }
	       cb(res);
	    }
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

// make globals
var user_data = [];

// handle assignments
function getUserData(res) {
	user_data = res;
	console.log("user_data", res);
	updateUi();
}
function updateUi() {
	document.getElementById("avatar").style.backgroundImage = "url(" + user_data.avatar_url + ")";
}

// init
xhRequest("https://api.github.com/users/sammurphey", getUserData);
