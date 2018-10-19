<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<!-- document setup -->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
	<!-- proper meta -->
	<?php
	echo "<title>" . $document_title . "</title>";
	echo "<meta name='description' content='" . $document_description . "'>";
	echo "<meta name='keywords' content='" . $keywords . "'>";
	echo "<meta name='author' content='Sam Murphey'>
	<meta name='robots' content='NOFOLLOW NO INDEX'>";
	echo "<meta name='version' content='" . $version . "'>";
	echo "<meta name='creation_date' content='" . $last_updated . "'>";
	echo "<meta name='flattr:id' content='w1pd2k'>
	<meta name='language' content='en'>";
	echo "<link rel='alternate' href='" . $document_url . "' hreflang='x-default'>";
	echo "<link rel='alternate' href='" . $document_url . "' hreflang='en'>";
	echo "<link rel='cannonical' href='" . $document_url . "'>";
	echo "<link rel='apple-touch-icon' sizes='120x120' href='" . $htp_root ."apple-touch-icon.png'>";
	echo "<link rel='icon' type='image/png' sizes='32x32' href='" . $htp_root . "favicon-32x32.png'>";
	echo "<link rel='icon' type='image/png' sizes='16x16' href='" . $htp_root . "favicon-16x16.png'>";
	echo "<link rel='manifest' href='" . $htp_root . "site.webmanifest'>";
	echo "<link rel='mask-icon' href='" . $htp_root . "safari-pinned-tab.svg' color='#dbff00'>";
	echo "<meta name='apple-mobile-web-app-title' content='GitGarden'>
	<meta name='application-name' content='GitGarden'>
	<meta name='msapplication-TileColor' content='#dbff00'>
	<meta name='theme-color' content='#dbff00'>";
	echo "<!-- critical styles-->
	<style>";
	echo file_get_contents($php_root . "src/css/index.css");
	echo "</style>";
	?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<!--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-127457905-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-127457905-1');
	</script>-->
</head>
<body>
