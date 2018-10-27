// GLOBALS
var htp_root = "http://192.168.0.107/gitgarden/",
	scene = new THREE.Scene(),
	renderer = new THREE.WebGLRenderer(),
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
	controls = new THREE.OrbitControls( camera, renderer.domElement ),
	ambient_light,
	hemi_light,
	floor,
	flower_bed,
	flower_1;

function initScene() {
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );


	// BACKGROUND
//	loader = new THREE.TextureLoader();
//	loader.load(htp_root + "src/3d/textures/TexturesCom_WoodFine0077_6_seamless_S.jpg", function(texture) {
//		scene.background = texture;
//	});
	camera.position.z = 10
	// LIGHTS
	ambient_light = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(ambient_light);
	hemi_light = new THREE.HemisphereLight(0xffffbb, 0xffffff, 2.0, 600);
	scene.add(hemi_light);

	// ADD MODELS
	floorPlane();
	flowerBed();
	forgetMeNot();

	//Begin loops
	animate();
	window.addEventListener( 'resize', onWindowResize, false );
}

function onProgress(xhr) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
	}
};
function onError(xhr) {
	console.log("Mesh error!");
};
//THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

// MODELS

//floor
function floorPlane() {
	var floor = new THREE.Mesh(
		new THREE.PlaneGeometry(40, 40),
		new THREE.MeshBasicMaterial({color: 0x3e3425})
	);
	floor.rotation.x = 0 - (Math.PI / 2);
	scene.add(floor);
}
// flowerbed
function flowerBed() {
	new THREE.MTLLoader()
		.setPath("./src/3d/models/")
		.load("flowerbed.mtl", function(materials) {
			materials.preload();
			new THREE.OBJLoader()
				.setMaterials(materials)
				.setPath("./src/3d/models/")
				.load("flowerbed.obj", function(object) {
					// move to global
					flower_bed = object
					scene.add(flower_bed);
					//flower_bed.rotation.x = Math.PI / 2;
					//flower_bed.rotateX(20);
				}, onProgress, onError);
		});
}

// first flower test
function forgetMeNot() {
	new THREE.MTLLoader()
		.setPath("./src/3d/models/")
		.load("forget_me_not.mtl", function(materials) {
			materials.preload();
			new THREE.OBJLoader()
				.setMaterials(materials)
				.setPath("./src/3d/models/")
				.load("forget_me_not.obj", function(object) {
					// move to global
					flower_1 = object
					scene.add(flower_1);
					flower_1.translateY(1.4);
				}, onProgress, onError);
		});
}


// CREATE BOUNDINGS
function createBoundings() {
	scene.traverse(function(node){
	    if(node.geometry){
	        node.geometry.computeBoundingSphere();
			node.geometry.computeBoundingBox();
	    }
	});
}

// RESPONSIVE
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
// RENDER LOOP
function animate() {
	requestAnimationFrame( animate );
	render();
}
function render() {
	renderer.render( scene, camera );
}
initScene();
