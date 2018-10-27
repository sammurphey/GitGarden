<?php
include($php_root . "components/html_header.php");

// build the menus / ui skeletons
echo "<button id='views' class='fab'>";
 	include($php_root . "src/imgs/icons/fullscreen.svg");
echo "</button>";
echo "<button id='avatar' class='fab'></button>";

echo "<footer id='bottom_menu'><nav><ul>";
	echo "<li><button>Views</button></li>";
	echo "<li><button></button></li>";
	echo "<li><button>Item 3</button></li>";
echo "</ul></nav></footer>";

// get user data
echo "<script src='" . $htp_root . "src/js/user.js' onload='initUser(\"" . $user_token . "\")'></script><div id='demo'></div>";

// include THREE
echo "<script src='" . $htp_root . "src/js/three/three.min.js'></script>";
echo "<script src='" . $htp_root . "src/js/three/add_ons/MTLLoader.js'></script>";
echo "<script src='" . $htp_root . "src/js/three/add_ons/DDSLoader.js'></script>";
echo "<script src='" . $htp_root . "src/js/three/add_ons/OBJLoader.js'></script>";
echo "<script src='" . $htp_root . "src/js/three/add_ons/OrbitControls.js'></script>";

?>
<script>
	var supportsWebGL = ( function () {
		try {
			return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' );
		} catch( e ) {
			return false;
		}
	} )();

	if(supportsWebGL){
		console.log("support");
	}else{
		console.log("no support");
	}
</script>

<?php


// create world
echo "<script src='" . $htp_root . "src/js/world.js'></script>";

// build plant bed
echo "<script src='" . $htp_root . "src/js/flowerbed.js'></script>";

include($php_root . "components/html_footer.php");
