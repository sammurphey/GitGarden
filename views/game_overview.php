<?php
include($php_root . "components/html_header.php");

// build the menus / ui skeletons
echo "<button id='avatar' data-token='" . $_COOKIE["user_token"] . "'></button>";

echo "<footer id='bottom_menu'><nav><ul>";
	echo "<li><button>Item 1</button></li>";
	echo "<li><button>Item 2</button></li>";
	echo "<li><button>Item 3</button></li>";
echo "</ul></nav></footer>";

// get user data
echo "<script src='" . $htp_root . "src/js/user.js'></script><div id='demo'></div>";

// include THREE
echo "<script src='" . $htp_root . "src/js/three/three.min.js'></script>";
echo "<script src='" . $htp_root . "src/js/three/add_ons/GLTFLoader.js'></script>";
echo "<script src='" . $htp_root . "src/js/three/add_ons/DDSLoader.js'></script>";
echo "<script src='" . $htp_root . "src/js/three/add_ons/OBJLoader.js'></script>";
echo "<script src='" . $htp_root . "src/js/three/add_ons/OrbitControls.js'></script>";

// build plant bed
echo "<script src='" . $htp_root . "src/js/plant_bed.js'></script>";

include($php_root . "components/html_footer.php");
