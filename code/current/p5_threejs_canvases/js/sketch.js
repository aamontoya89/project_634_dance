var scene00 = function(p) {
    p.setup = function() {
        p.createCanvas(100, 100);
        p.background(255, 0, 0);
    }
    p.draw = function() {
      p.background(p.random(255), 0, 0);
    }
};

new p5(scene00, "scene00");

var scene01 = function(p) {
    p.setup = function() {
        p.createCanvas(100, 100);
        p.background(255, 0, 0);
    }
    p.draw = function() {
      p.background(0, p.random(255), 0);
    }
};
new p5(scene01, "scene01");

var scene02 = function(p) {
    p.setup = function() {
        p.createCanvas(100, 100);
        p.background(255, 0, 0);
    }
    p.draw = function() {
      p.background(0, 0, p.random(255));
    }
};
new p5(scene02, "scene02");
