//Based on Daniel Shiffman's nature of code example for P5.js

//Declare a simple Particle class
var Particle = function(position) {
    this.acc = createVector(-0.05, 0.05);
    this.vel = createVector(random(-1, 1), random(-1, 0));
    this.pos = position.copy();
    this.lifespan = 255;
    this.r = fallingParticleSize/2.0;
};

Particle.prototype.run = function(particleSystem) {
	// this.handleForce(particleSystem);
    this.update();
    this.borders();
    this.display();
};

Particle.prototype.applyForce = function(force) {
    this.acc.add(force);
};

Particle.prototype.handleForce = function(particleSystem) {
    var sep = this.seperate(particleSystem);
    // sep.mult(1.5);
    this.applyForce(sep);
};

Particle.prototype.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // this.acc.mult(0);
    this.lifespan -= 1;
};

Particle.prototype.borders = function() {
    if (this.pos.x < -this.r || this.pos.x > (width+this.r)) this.vel.x *= -0.90;
    if (this.pos.y < -this.r || this.pos.y > (height+this.r)) this.vel.y *= -0.90;
};

Particle.prototype.seperate = function(particleSystem) {
    var desiredSeperation = 25.0;
    var steer = createVector(0, 0);
    var count = 0;
    for(var i = 0; i<particleSystem.length;i++){
    	var d = p5.Vector.dist(this.pos,particleSystem[i].pos);
    	//if within the range of seperation
    	if((d>0)&&(d<desiredSeperation)){
    		var diff = p5.Vector.sub(this.pos,particleSystem[i].pos);
    		diff.normalize();
    		diff.div(d); //Weight by distance
    		steer.add(diff);
    		count++
    	}
    }
    if(count > 0){
    	steer.div(count);
    }
    if(steer.mag()>0){
    	// steer.normalize();
    	// steer.mult(3.0);
    	steer.sub(this.vel);
    	// steer.limit(this.)
    }
    return steer;
};



Particle.prototype.display = function() {
    noStroke();
    fill(255, this.lifespan);
    ellipse(this.pos.x, this.pos.y, fallingParticleSize, fallingParticleSize);
};

Particle.prototype.isDead = function() {
    if (this.lifespan < 0) {
        return true;
    } else {
        return false;
    }
};

//Declare a particle system class
var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function(pos) {
    this.particles.push(new Particle(pos));
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
