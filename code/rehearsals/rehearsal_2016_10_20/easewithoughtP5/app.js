var ballX = 600;
var ballY = 0;
var diffx = 0;
var diffy = 0;
var targetX = 0;
var targetY = 0;
var trail = [];
var easing = 0.1;
var trailAmount = 10;
var spotSize = 10;
var onScene = 0;
var timer = 0;
var mousePos;
var s2Timer = 0;
//scene3 vars
//particle system
var pSystem;
var fallingParticleSize = 40;

var thecanvas, thecontext;

//Threejs scene vars
var container;
var camera, scene, renderer;
var geometry, material, mesh;
var zPosition;

var jmouseX = 0;
var jmouseY = 0;
var e = window.event;
document.onmousemove = function(e) {
    jmouseX = e.clientX;
    jmouseY = e.clientY;
};

function init() {

    thecanvas = document.getElementById('thecanvas');
    // thecanvas.setAttribute('width', window.innerWidth);
    // thecanvas.setAttribute('height', window.innerHeight);
        thecanvas.setAttribute('width',300);
    thecanvas.setAttribute('height', 300);
    thecontext = thecanvas.getContext('2d');
    pSystem = new ParticleSystem({ x: 0, y: 0 }, thecontext);



    ///*
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
        container.setAttribute('id','threeScene');
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

        window.addEventListener('resize', onWindowResize, false);
        return true;
    //*/
    animate()

}


function animate() {
    // thecontext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // thecontext.fillRect(0, 0, window.innerWidth, window.innerHeight);
    thecontext.clearRect(0, 0, 300, 300);
    thecontext.fillRect(0, 0, 300, 300);

    diffx = targetX - ballX; //what`s the different between mouse and the circle
    diffy = targetY - ballY;
    ballX = ballX + easing * diffx; //everytime catches a little bit more of the diff
    ballY = ballY + easing * diffy;
    var pos = { x: ballX, y: ballY };

    trail.push(pos);
    targetX = jmouseX;
    targetY = jmouseY;
    if (trail.length > trailAmount) {
        trail.splice(0, 1);
    }
    mousePos = {};
    mousePos.x = jmouseX;
    mousePos.y = jmouseY;


    switch (onScene) {
        case 0:
            //do nothing
            break;
        case 1:
            console.log("Scene 1");
            s2Timer = 0;
            drawTrail(thecontext, trail, spotSize);
            break;
        case 2:
            console.log("Scene 2");
            var s2Trail = [];
            var staticPos = { x: window.innerWidth - 150, y: 150 };
            for (var i = 0; i < trail.length; i++) {
                s2Trail.push(staticPos);
            }
            if (s2Timer < 100) {
                var newSize = spotSize * Math.abs(Math.sin(0.1 * timer));
                drawTrail(thecontext, trail, newSize);
                var oppSize = spotSize * Math.abs(Math.cos(0.1 * timer));
                drawTrail(thecontext, s2Trail, oppSize);
            } else if (s2Timer >= 100) {
                var newOppSize = spotSize * Math.abs(Math.cos(0.03 * timer));
                drawTrail(thecontext, s2Trail, newOppSize);
            }
            s2Timer++;
            break;
        case 3:
            console.log("Scene 3");
            var s2Trail = [];
            // var staticPos = createVector(width - 150, 150);
            var staticPos = { x: window.innerWidth - 150, y: 150 };
            for (var i = 0; i < trail.length; i++) {
                s2Trail.push(staticPos);
            }
            var newOppSize = spotSize * Math.abs(Math.cos(0.03 * timer));
            drawTrail(thecontext, s2Trail, newOppSize);
            s2Timer = 0;
            pSystem.addParticle(mousePos);
            pSystem.run();
            break;
    }

    timer += 1;

    ///*
        var time = performance.now() * 0.0005;
        camera.position.z = zPosition;
        material.uniforms.time.value = time;
        material.uniforms.mousex.value = jmouseX / window.innerWidth;
        material.uniforms.mousey.value = jmouseY / window.innerHeight;
        mesh.rotation.x = time * 0.2;
        mesh.rotation.y = time * 0.4;
        renderer.render(scene, camera);
    //    */

    requestAnimationFrame(animate);
}

function drawTrail(ctx, trail, size) {
    for (var i = 0; i < trail.length; i++) {
        ctx.save();
        ctx.fillStyle = 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 0.5 + ')';
        ctx.beginPath();
        ctx.ellipse(trail[i].x, trail[i].y, size * (i + 1), size * (i + 1), 45 * Math.PI / 180, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }
}

function onWindowResize(event) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//0 = 48; 1=49...9=57, a=65
window.addEventListener('keydown', function(evt) {
    if (evt.keyCode == 48) {
        console.log("typing 0");
        onScene = 0;
    } else if (evt.keyCode == 49) {
        console.log("typing 1");
        onScene = 1;
    } else if (evt.keyCode == 50) {
        console.log("typing 2");
        onScene = 2;
    } else if (evt.keyCode == 51) {
        console.log("typing 3");
        onScene = 3;
    } else if (evt.keyCode == 52) {
        console.log("typing 4 - into three.js scene");
        //container.appendChild(renderer.domElement);
    }
}, true)

window.addEventListener('load', init);
