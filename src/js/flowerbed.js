// GLOBALS
var flower_bed,
	flower_1;

// MODELS
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

flowerBed();
forgetMeNot();
