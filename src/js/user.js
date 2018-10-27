function xhRequest(url, cb) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       // Typical action to be performed when the document is ready:
		   var res = xhttp.responseText;
		   if (res.charAt(0) == "{" || res.charAt(0) == "[") {
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
	console.log("user_data", user_data);
	if (user_data.repos_url) {
		xhRequest(user_data.repos_url, getRepos);
	}
	updateUi();
}
function getRepos(res) {
	repos = res;
	console.log("repos", repos);
}
function updateUi() {
	document.getElementById("avatar").style.backgroundImage = "url(" + user_data.avatar_url + ")";
}

// init

function initUser(username) {
	xhRequest("https://api.github.com/user?access_token=" + username, getUserData);
}
