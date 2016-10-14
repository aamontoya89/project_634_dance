//to be able to display anything with three.js
//we need three things: scene, camera, renderer

//declare a new scene
var scene = new THREE.Scene();

//declare a perspective camera
//attributes are
//(field of view, perspective ratio, near clipping pane, far clipping pane)
//the first attribute is the field of view
var threeCamera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000);

//declare a webgl renderer
var renderer = new THREE.WebGLRenderer();
//set the renderer size to be the whole window of the browser
renderer.setSize(window.innerWidth, window.innerHeight);
//add the renderer to the html document
//it is a canvas element that the renderer uses to display the scene
document.body.appendChild(renderer.domElement);


//declare a box geometry object
//it holds all of the vertices and faces of a cube
var geometry = new THREE.BoxGeometry(1, 1, 1);

//material for the geometry
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});

//declare a mesh
//a mesh is an object that takes a geometry,
//and applies a material to it,
//which we then can insert to our scene, and move freely around
var cube = new THREE.Mesh(geometry, material);

//By default, when we call scene.add(),
//the thing we add will be added to the coordinates (0,0,0).
//This would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit.
scene.add(cube);
threeCamera.position.z = 5;

//render function
//to be used as a loop that draws 60 times per second
function render() {
    //render calls itself
    requestAnimationFrame(render);

    //rotate the cube
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    //call to the render function of the renderer
    //with the scene and camera as arguments
    renderer.render(scene, threeCamera);
};

render();
