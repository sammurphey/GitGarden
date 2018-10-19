<?php

// Enable Error Reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// env vars
$php_root = $_SERVER['DOCUMENT_ROOT'] . "/gitgarden/";
$htp_root = "http://192.168.0.107/gitgarden/";

// defaults
$document_title = "GitGarden | Login";
$document_description = "Grow your own beautiful flower garden by contributing code on GitHub!";
$keywords = "github, code tracker, productivity, games, flowers, garden";
$version = 1.0;
$last_updated = "2018/10/14";
$document_url = $htp_root;

// functions
function valExists($key, $arr) {
	if (is_array($arr)) {
		if (array_key_exists($key, $arr) && $arr[$key]) {
			return true;
		}
		return false;
	}
	return false;
}
function fetchApi($url, $params = false) {
	$api_url = $url;
	if ($params) {
		$api_url .= "?";
		foreach($params as $param) {
			$api_url .= $param[0] . "=" . $param[1] . "&";
		}
		$api_url = rtrim($api_url, "&");
	}
	echo $api_url;
	$api_res = file_get_contents($api_url);
	if (strlen($api_res) > 0) {
	//	$api_json = json_decode($api_res, true);
	//	if (count($api_json) === 1) {
	//		$api_json = $api_json[0];
	//	}
		return $api_res;
	} else {
		return false;
	}
}
function url_get_contents ( $url ) {
    if ( ! function_exists( 'curl_init' ) ) {
        die( 'The cURL library is not installed.' );
    }
    $ch = curl_init();
    curl_setopt( $ch, CURLOPT_URL, $url );
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
    $output = curl_exec( $ch );
    curl_close( $ch );
    return $output;
}
function pushApi($params) {
	$api_url = "https://api.sammurphey.net/v3/push/index.php?" . $params;
	$api_res = file_get_contents($api_url);
	return $api_res;
}

// init
require_once($php_root . "core/headers.php");
require_once($php_root . "core/router.php");
?>
</body>
</html>
