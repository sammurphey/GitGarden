// INIT ENVIRONMENT
var scene,
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
loader = new THREE.TextureLoader();
loader.load("./src/img/bg.jpg", function(texture) {
	scene.background = texture;
});



// LIGHTS
light1 = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(light1);

light2 = new THREE.PointLight(0xffffff, 0.9);
scene.add(light2);



// MODELS
loader = new THREE.OBJLoader();
loader.load("./src/models/suzanne.obj", function(object) {

    // if you want to add your custom material
//    var materialObj = new THREE.MeshBasicMaterial({color: "red", wireframe: "true"});
//    object.traverse(function(child) {
//        if (child instanceof THREE.Mesh) {
//            child.material = materialObj;
//        }
//    });

    // then directly add the object
    scene.add(object);
	object.translateZ( -10 );
});

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );





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
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
