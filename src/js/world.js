// GLOBALS
var htp_root = "http://192.168.0.107/gitgarden/",
	scene = new THREE.Scene(),
	renderer = new THREE.WebGLRenderer(),
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
	controls = new THREE.OrbitControls( camera, renderer.domElement ),
	ambient_light,
	hemi_light,
	world,
	fence;

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
	addWorld();

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

//world
function addWorld() {
	new THREE.MTLLoader()
		.setPath("./src/3d/models/")
		.setMaterialOptions( { side:THREE.DoubleSide } )
		.load("world.mtl", function(materials) {
			materials.preload();
			new THREE.OBJLoader()
				.setMaterials(materials)
				.setPath("./src/3d/models/")
				.load("world.obj", function(object) {
					// move to global
					world = object;
					scene.add(world);
					world.translateY(10);

					addFence();
				}, onProgress, onError);
		});
}

// fence
function addFence() {
	new THREE.MTLLoader()
		.setPath("./src/3d/models/")
		.setMaterialOptions( { side:THREE.DoubleSide } )
		.load("fence.mtl", function(materials) {
			materials.preload();
			new THREE.OBJLoader()
				.setMaterials(materials)
				.setPath("./src/3d/models/")
				.load("fence.obj", function(object) {
					// move to global
					fence = object;
					scene.add(fence);
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
