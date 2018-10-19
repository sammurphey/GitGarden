<main>
	<?php
	$login_success = false;
	if (valExists("code", $current_params)) {
		$login_code = $current_params["code"];
		setcookie("user_code", $login_code, time() + (86400 * 30), "/");
	} elseif(isset($_COOKIE["user_code"])) {
		$login_code = $_COOKIE["user_code"];
	}
	$login_res = fetchApi("https://github.com/login/oauth/access_token?client_id=66b93d27cd279bf8baa3&client_secret=54ed774756edd4c9a7fa2d08690f9eda40bcb218&code=" . $login_code, false);
	if (strpos($login_res, "error") === false) {
		$login_success = true;
	}
	if ($login_success) {
		$login_token = explode("&", $login_res);
		$login_token = explode("=", $login_token[0]);
		$login_token = $login_token[1];
		setcookie("user_token", $login_token, time() + (86400 * 30), "/");
		echo "<script>history.pushState({}, 'game', '" . $htp_root . "');</script>";
		include($php_root . "views/game_overview.php");
	} else {
		include($php_root . "views/login.php");
	}
	?>
</main>
