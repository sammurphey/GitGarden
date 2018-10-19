function handleLogin() {
	console.log("handling login");
	var spinner = "<div class='spinner'style='height:54px;opacity:1'><svg viewBox='0 0 50 50'><circle class='progress'cx='25'cy='25'r='20'/></svg></div>";
	document.getElementById("login_btn_wrapper").innerHTML = spinner;
}
document.getElementById("login_btn").addEventListener("click", handleLogin);
var currentUrl = window.location.href;
console.log(currentUrl);
if (currentUrl.includes("code=")) {
	handleLogin();
}
