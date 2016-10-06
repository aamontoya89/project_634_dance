var x = 300;
var y = 0;
var diffx = 0;
var diffy = 0;
var targetX = 0;
var targetY = 0;
var trail = [];
var easing = 0.9;
var trailAmount = 50;
var spotSize = 5;
var onScene = 0;
var timer = 0;

//scene2 vars
var s2Timer = 0;

function setup() {
    createCanvas(1400, 800);
}

function draw() {
    background(0);
    diffx = targetX - x; //what`s the different between mouse and the circle
    diffy = targetY - y;
    x = x + easing * diffx; //everytime catches a little bit more of the diff
    y = y + easing * diffy;
    var pos = createVector(x, y);
    trail.push(pos);
    targetX = mouseX;
    targetY = mouseY;
    if (trail.length > trailAmount) {
        trail.splice(0, 1);
    }
    switch (onScene) {
        case 0:
            //do nothing
            break;
        case 1:
            console.log("Scene1");
            s2Timer = 0;
            drawTrail(trail, spotSize);
            break;
        case 2:
            console.log("Scene2");

            if (s2Timer < 100) {
                var newSize = spotSize * sin(0.1 * timer);
                drawTrail(trail, newSize);
                var oppSize = spotSize * cos(0.1 * timer);
                drawOppositeTrail(trail, oppSize);
            } else if (s2Timer >= 100) {
                var newOppSize = spotSize * cos(0.03 * timer);
                drawOppositeTrail(trail, newOppSize);
            }

            s2Timer++;
            break;

    }

    timer += 1;

}

function drawTrail(trail, size) {
    fill(255, 100);
    noStroke();
    for (var i = 0; i < trail.length; i++) {
        ellipse(trail[i].x, trail[i].y, size * (i + 1), size * (i + 1));
    }
}

function drawOppositeTrail(trail, size) {
    fill(255, 100);
    noStroke();
    for (var i = 0; i < trail.length; i++) {
        ellipse(width - trail[i].x, trail[i].y, size * (i + 1), size * (i + 1));
    }
}

function keyTyped() {
    if (key === 'q') {
        onScene = 0;

    } else if (key === 'a') {
        onScene = 1;
    } else if (key === 'b') {
        onScene = 2;
    }
}
