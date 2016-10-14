//Intro vars
// var x = 300;
// var y = 0;
// var diffx = 0;
// var diffy = 0;
// var targetX = 0;
// var targetY = 0;
// var trail = [];
// var easing = 0.1;
// var trailAmount = 10;
// var spotSize = 40;
// var onScene = 0;
// var timer = 0;
// var mousePos;
// var s2Timer = 0;
// var pSystem;
// var fallingParticleSize = 40;

var jmouseX, jmouseY;
var e = window.event;
document.onmousemove = function(e) {
    jmouseX = e.clientX;
    jmouseY = e.clientY;
};
var container;
var camera, scene, renderer;
var geometry, material, mesh;

var zPosition;

function setup() {

}

function draw() {

}

function init() {

    //createCanvas(windowWidth, windowHeight);
    // pSystem = new ParticleSystem(createVector(0, 0));

    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
        return false;
    }
    renderer = new THREE.WebGLRenderer();
    if (renderer.extensions.get('ANGLE_instanced_arrays') === false) {
        document.getElementById("notSupported").style.display = "";
        return false;
    }
    container = document.createElement('div');
    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
    zPosition = 1000;
    camera.position.z = zPosition;
    scene = new THREE.Scene();
    geometry = new THREE.InstancedBufferGeometry();
    geometry.copy(new THREE.CircleBufferGeometry(1, 6));
    var particleCount = 75000;
    var translateArray = new Float32Array(particleCount * 3);
    for (var i = 0, i3 = 0, l = particleCount; i < l; i++, i3 += 3) {
        translateArray[i3 + 0] = Math.random() * 2 - 1;
        translateArray[i3 + 1] = Math.random() * 2 - 1;
        translateArray[i3 + 2] = Math.random() * 2 - 1;
    }
    geometry.addAttribute("translate", new THREE.InstancedBufferAttribute(translateArray, 3, 1));


    material = new THREE.RawShaderMaterial({
        uniforms: {
            map: {
                value: new THREE.TextureLoader().load("assets/circle2.png")
            },
            time: {
                value: 0.0
            },
            mousex: {
                value: 1.0
            },
            mousey: {
                value: 1.0
            }
        },
        vertexShader: document.getElementById('vshader').textContent,
        fragmentShader: document.getElementById('fshader').textContent,
        depthTest: true,
        depthWrite: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(500, 500, 500);
    scene.add(mesh);
    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);


    //createCanvas(windowWidth, windowHeight);
    window.addEventListener('resize', onWindowResize, false);
    return true;
}

function onWindowResize(event) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


window.addEventListener('keydown',
    function(evt) {
        if (evt.key == 'ArrowUp') {
            zPosition = 2000;
        }
        if (evt.key == 'ArrowDown') {
            zPosition = 200;
        }
        if (evt.key == 'ArrowLeft') {
            zPosition += 200;
        }
        if (evt.key == 'ArrowRight') {
            // zPosition -= 200;
            // container.appendChild(renderer.domElement);
        }

    });


function animate() {
    requestAnimationFrame(animate);
    render();

}

function render() {
    var time = performance.now() * 0.0005;
    camera.position.z = zPosition;
    material.uniforms.time.value = time;
    material.uniforms.mousex.value = jmouseX / window.innerWidth;
    material.uniforms.mousey.value = jmouseY / window.innerHeight;
    mesh.rotation.x = time * 0.2;
    mesh.rotation.y = time * 0.4;
    renderer.render(scene, camera);
}
if (init()) {
    animate();
}

function keyTyped() {
    if (key === 'q') {
        console.log("typed q p5 yay");
    }
}
