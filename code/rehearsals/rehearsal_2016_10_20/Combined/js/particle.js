//Based on Daniel Shiffman's nature of code example for P5.js

//Declare a simple Particle class
//acc should be between(-0.1,0.1)
var Particle = function(position,col, acc,ctx) {
    // this.acc = createVector(-0.05, 0.05);
    // this.acc = { x: -0.05, y: 0.05 };
    this.acc = acc;
    // this.vel = createVector(random(-1, 1), random(-1, 0));
    this.vel = { x: Utils.random(-1, 1), y: Utils.random(-1, 1) };
    this.pos = position;
    this.lifespan = 255;
    this.r = fallingParticleSize / 2.0;
    this.context = ctx;
    this.col = col;
};

Particle.prototype.run = function(particleSystem) {
    // this.handleForce(particleSystem);
    this.update();
    this.borders();
    this.display(this.context);
};

Particle.prototype.applyForce = function(force) {
    // this.acc.add(force);
    this.acc = Utils.addVectors(this.acc, force);
};

Particle.prototype.handleForce = function(particleSystem) {
    var sep = this.seperate(particleSystem);
    // sep.mult(1.5);
    this.applyForce(sep);
};

Particle.prototype.update = function() {
    // this.vel.add(this.acc);
    this.vel = Utils.addVectors(this.vel, this.acc);
    // this.pos.add(this.vel);
    this.pos = Utils.addVectors(this.pos, this.vel);
    // this.acc.mult(0);
    this.lifespan -= 1;
};

Particle.prototype.borders = function() {
    if (this.pos.x < -this.r || this.pos.x > (window.innerWidth + this.r)) this.vel.x *= -0.90;
    if (this.pos.y < -this.r || this.pos.y > (window.innerHeight + this.r)) this.vel.y *= -0.90;
};

Particle.prototype.seperate = function(particleSystem) {
    var desiredSeperation = 25.0;
    // var steer = createVector(0, 0);
    var steer = { x: 0, y: 0 };
    var count = 0;
    for (var i = 0; i < particleSystem.length; i++) {
        // var d = p5.Vector.dist(this.pos, particleSystem[i].pos);
        var d = Utils.distVector(this.pos, particleSystem[i].pos);
        //if within the range of seperation
        if ((d > 0) && (d < desiredSeperation)) {
            // var diff = p5.Vector.sub(this.pos, particleSystem[i].pos);
            var diff = Utils.subVectors(this.pos, particleSystem[i].pos);
            // diff.normalize();
            diff = Utils.normalizevector(diff);
            // diff.div(d); //Weight by distance
            diff = Utils.divVector(diff, d);
            // steer.add(diff);
            steer = Utils.addVectors(steer, diff);
            count++
        }
    }
    if (count > 0) {
        // steer.div(count);
        steer = Utils.divVector(steer, count);
    }
    if (steer.mag() > 0) {
        // steer.normalize();
        // steer.mult(3.0);
        // steer.sub(this.vel);
        steer = Utils.subVectors(steer, this.vel);
        // steer.limit(this.)
    }
    return steer;
};



Particle.prototype.display = function(ctx) {
    // noStroke();
    // fill(255, this.lifespan);
    // ellipse(this.pos.x, this.pos.y, fallingParticleSize, fallingParticleSize);
    var ratioLifespan = this.lifespan / 255;
    ctx.save();
    ctx.fillStyle = 'rgba(' + this.col.r + ',' + this.col.g + ',' + this.col.b + ',' + ratioLifespan + ')';
    ctx.beginPath();
    ctx.ellipse(this.pos.x, this.pos.y, fallingParticleSize, fallingParticleSize, 45 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
};

Particle.prototype.isDead = function() {
    if (this.lifespan < 0) {
        return true;
    } else {
        return false;
    }
};

//Declare a particle system class
var ParticleSystem = function(position, ctx) {
    this.origin = position;
    this.particles = [];
    this.context = ctx;
};

ParticleSystem.prototype.addParticle = function(pos,col,acc) {
    this.particles.push(new Particle(pos, col,acc,this.context));
};

ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
        var p = this.particles[i];
        p.run(this);
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }

    }
}
