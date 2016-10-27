

var canvasData;
//define the variables for kinectron constructor
var username = "kinectron";
var host = "172.16.242.210";
var port = "9001";
var path = "/";

//declare kinectron variable
var kinectron = null;

var kinectronCanvas,kinectronCanvas2;
var context,context2;

var currentDepthImg;

function createKinectron() {
    //declare and define kinectron variable
    kinectron = new Kinectron(username, { // username matches application display
        "host": host, // host matches application display
        "port": port, // port matches application display
        "path": path
    });

    kinectron.makeConnection();
}

//setup function for kinectron
function setupKinectron() {
    // kinectron.setRGBCallback(drawFeed);

    // kinectron.setInfraredCallback(drawFeed);
    //kinectron.setDepthCallback(drawFeed);
    kinectron.setDepthCallback(updateImg);

}

function init(){

  //create kinectron object
  createKinectron();
  //retrieve canvas on html document by id
  kinectronCanvas = window.document.getElementById("kinectronCanvas");
  //retrieve the context of the canvas
  context = kinectronCanvas.getContext("2d");

  //retrieve canvas on html document by id
  kinectronCanvas2 = window.document.getElementById("kinectronCanvas2");
  //retrieve the context of the canvas
  context2 = kinectronCanvas2.getContext("2d");

    kinectron.startDepth();
  //setup kinectron object
  setupKinectron();
  loop();
}

function loop(){

  drawFeed(currentDepthImg);
  requestAnimationFrame(loop);
}

function updateImg(img) {
  currentDepthImg = img;
}

//draw feed on the canvas
function drawFeed(img) {
    context.drawImage(img, 10, 10);
    canvasData = context.getImageData(0, 0, 500, 500);
    for (var n = 0; n < 2000; n++) {
            var x = Math.floor(Math.random() * canvasData.width);
            var y = Math.floor(Math.random() * canvasData.height);
            var pixIndex = y * canvasData.width + x;
            var pixR = canvasData.data[pixIndex * 4 + 0];
            var pixG = canvasData.data[pixIndex * 4 + 1];
            var pixB = canvasData.data[pixIndex * 4 + 2];
            // 0.21 R + 0.72 G + 0.07 B
            var grayScale = 0.21*pixR + 0.72*pixG+0.07*pixB;
            if(grayScale>100){
            // drawEllipse(context2,x,y,pixR,pixG,pixB,2);
            drawEllipse(context2,x,y,255,255,255,2);
          }
          else{
            drawEllipse(context2,x,y,0,0,0,1);
          }
          }
}

function drawEllipse(ctx,_x,_y,r,g,b,size){
  ctx.save();
  ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.3)';
  ctx.beginPath();
  ctx.ellipse(_x, _y, size, size, 45 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
}


window.addEventListener('load', init);
