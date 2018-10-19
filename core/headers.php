<?php

// get current path
$current_path = substr($_SERVER["REQUEST_URI"], 1);
$current_path = str_replace("gitgarden", "", $current_path); // dev env
$current_path = ltrim(rtrim($current_path, "/"), "/");
$current_path = explode("?", $current_path);

// get current params
$current_params = [];
if (count($current_path) > 1) {
	$params = $current_path[1];
	$params = explode("&", $params);
	foreach($params as $param) {
		$split_param = explode("=", $param);
		$current_params[$split_param[0]] = $split_param[1];
	}
}
$current_path = $current_path[0];

// get cookies
$user_name = false;
if (isset($_COOKIE["user_name"])) {
	$user_name = $_COOKIE["user_name"];
}
