//retrieve canvas on html document by id
var kinectronCanvas = window.document.getElementById("kinectronCanvas");
//retrieve the context of the canvas
var context = kinectronCanvas.getContext("2d");

//retrieve canvas on html document by id
var kinectronCanvas2 = window.document.getElementById("kinectronCanvas2");
//retrieve the context of the canvas
var context2 = kinectronCanvas2.getContext("2d");

var canvasData;
//define the variables for kinectron constructor
var username = "kinectron";
var host = "172.16.246.240";
var port = "9001";
var path = "/";

//declare kinectron variable
var kinectron = null;

//create kinectron object
createKinectron();

//setup kinectron object
setupKinectron();

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
    kinectron.setRGBCallback(drawFeed);
    kinectron.setDepthCallback(drawFeed);
    kinectron.setInfraredCallback(drawFeed);
}

//draw feed on the canvas
function drawFeed(img) {
    context.drawImage(img, 10, 10);
    canvasData = context.getImageData(0, 0, 500, 500);
    for (var n = 0; n < 1000; n++) {
            var x = Math.floor(Math.random() * canvasData.width);
            var y = Math.floor(Math.random() * canvasData.height);
            var pixIndex = y * canvasData.width + x;
            var pixR = canvasData.data[pixIndex * 4 + 0];
            var pixG = canvasData.data[pixIndex * 4 + 1];
            var pixB = canvasData.data[pixIndex * 4 + 2];
            // 0.21 R + 0.72 G + 0.07 B
            var grayScale = 0.21*pixR + 0.72*pixG+0.07*pixB;
            if(grayScale>150){
            ellipse(context2,x,y,pixR,pixG,pixB,2);
          }
          }
}

function ellipse(ctx,_x,_y,r,g,b,size){
  ctx.save();
  ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
  ctx.beginPath();
  ctx.ellipse(_x, _y, size, size, 45 * Math.PI / 180, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
}
