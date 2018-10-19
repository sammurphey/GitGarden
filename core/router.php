<?php

switch($current_path) {
	case "":
	// homepage
		if (valExists("code", $current_params)) {
			include($php_root . "views/process_login.php");
		} else {
			if (isset($_COOKIE["user_token"])) {
				include($php_root . "views/game_overview.php");
			} elseif (isset($_COOKIE["user_code"])) {
				include($php_root . "views/process_login.php");
			} else {
				include($php_root . "views/login.php");
			}
		}
		break;
	case "logout":
		break;
	case "about":
		break;
	case "early-access":
		break;
	case "donate":
		break;
	default:
	// assume username and attempt lookup
}
