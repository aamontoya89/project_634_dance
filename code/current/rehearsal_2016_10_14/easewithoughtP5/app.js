var x = 300;
var y = 0;
var diffx = 0;
var diffy = 0;
var targetX = 0;
var targetY = 0;
var trail = [];
var easing = 0.1;
var trailAmount = 10;
var spotSize = 40;
var onScene = 0;
var timer = 0;
var mousePos;
var thecanvas;

function init(){
thecanvas = document.createElement('canvas');
thecanvas.setAttribute('width','window.innerWidth');
thecanvas.setAttribute('height','window.innerHeight');
}


window.addEventListener('load', init);