<?php
if (valExists("code", $current_params)) {
	include($php_root . "components/process_login.php");
} else {
	// nothing set
	if (!isset($_COOKIE["user_token"]) && !isset($_COOKIE["user_code"])) {
		include($php_root . "views/login.php");
	}
	// only user code is present
	if (!isset($_COOKIE["user_token"]) && isset($_COOKIE["user_code"])) {
		include($php_root . "components/process_login.php");
	}
	// login verified, procede with routing
	if (isset($_COOKIE["user_token"])) {
		switch($current_path) {
			case "": // homepage
			include($php_root . "views/game_overview.php");
				break;
			case "logout":
				include($php_root . "views/logout.php");
				break;
			case "2d":
				include($php_root . "views/2d.php");
				break;
			case "about":
				include($php_root . "views/about.php");
				break;
			case "early-access":
				include($php_root . "views/patreon.php");
				break;
			case "donate":
				include($php_root . "views/donate.php");
				break;
		}
	}
}
