// INIT ENVIRONMENT
var htp_root = "http://192.168.0.107/gitgarden/",
	scene,
	camera,
	controls,
	renderer,
	light1,
	light2,
	suzanne,
	loader,
	mesh;

	console.log(THREE);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// BACKGROUND
//	loader = new THREE.TextureLoader();
//	loader.load(htp_root + "src/3d/textures/TexturesCom_WoodFine0077_6_seamless_S.jpg", function(texture) {
//		scene.background = texture;
//	});



	// LIGHTS
	var light = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(light);

	var light = new THREE.HemisphereLight(0xffffbb, 0xffffff, 2.0, 600);
	scene.add(light);

	// MODELS
	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
		}
	};
	var onError = function ( xhr ) { };
	THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
	// flowerbed
	new THREE.MTLLoader()
		.setPath("./src/3d/models/")
		.load("flowerbed.mtl", function(materials) {

			materials.preload();

			new THREE.OBJLoader()
				.setMaterials(materials)
				.setPath("./src/3d/models/")
				.load("flowerbed.obj", function(object) {
					//console.log(object);
				    scene.add(object);
					//object.translateZ( -10 );
				}, onProgress, onError);
		});



	// CAMERA
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	camera.position.z = 5;



	// CREATE BOUNDINGS
	scene.traverse(function(node){
	    if(node.geometry){
	        node.geometry.computeBoundingSphere();
			node.geometry.computeBoundingBox();
	    }
	});

	// RENDER LOOP
	function animate() {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
	}window.scene = scene
	animate();
