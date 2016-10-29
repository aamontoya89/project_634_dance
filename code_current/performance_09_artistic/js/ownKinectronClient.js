//retrieve canvas on html document by id
var kinectronCanvas = window.document.getElementById("kinectronCanvas");
//retrieve the context of the canvas
var kinectContext = kinectronCanvas.getContext("2d");

//define the variables for kinectron constructor
var leftUsername = "kinectron";
var leftHost = "172.16.251.69";
var leftPort = "9001";
var leftPath = "/";

var rightUsername = "kinectron";
var rightHost = "172.16.242.210";
var rightPort = "9001";
var rightPath = "/";

//declare kinectron variables
var leftKinectron = null;
var rightKinectron = null;

var lengthPrerecord = 20;

var leftCurrentDepthImg;
var leftPrerecord = [];
var leftIsImageNew = false;
var leftIsFirstTime = true;
var leftCanvasData;

var rightCurrentDepthImg;
var rightPrerecord = [];
var rightIsImageNew = false;
var rightIsFirstTime = true;
var righCanvasData;

var brightnessThreshold = 150;
var edgeThreshold = 300;

var edgeMode = 0;


function createKinectrons() {
    //declare and define kinectron variable
    leftKinectron = new Kinectron(leftUsername, { // username matches application display
        "host": leftHost, // host matches application display
        "port": leftPort, // port matches application display
        "path": leftPath
    });

    //declare and define kinectron variable
    rightKinectron = new Kinectron(rightUsername, { // username matches application display
        "host": rightHost, // host matches application display
        "port": rightPort, // port matches application display
        "path": rightPath
    });

    leftKinectron.makeConnection();
    rightKinectron.makeConnection();
}

function leftAddImg(img) {
    leftCurrentDepthImg = img;
    leftIsImageNew = true;
    leftPrerecord.push(img);
    while (leftPrerecord.length > lengthPrerecord) {
        leftPrerecord.splice(0, 1);
    }
}

function rightAddImg(img) {
    rightCurrentDepthImg = img;
    rightIsImageNew = true;
    rightPrerecord.push(img);
    while (rightPrerecord.length > lengthPrerecord) {
        rightPrerecord.splice(0, 1);
    }
}

//setup function for kinectron
function setupKinectrons() {
    leftKinectron.setRGBCallback(leftAddImg);
    leftKinectron.setDepthCallback(leftAddImg);
    leftKinectron.setInfraredCallback(leftAddImg);

    rightKinectron.setRGBCallback(rightAddImg);
    rightKinectron.setDepthCallback(rightAddImg);
    rightKinectron.setInfraredCallback(rightAddImg);
}

function drawFeed(leftImg, rightImg) {
    if (leftIsFirstTime) {
        for (var i = 0; i < lengthPrerecord; i++) {
            leftPrerecord.push(leftImg);
        }
    } else {
        if (leftIsImageNew) {
            leftTempKinectronContext.drawImage(leftImg, 10, 10);
        } else {
            leftTempKinectronContext.drawImage(leftPrerecord[leftPrerecord.length - 1], 10, 10);
        }
        leftIsImageNew = false;
    }

    if (rightIsFirstTime) {
        for (var i = 0; i < lengthPrerecord; i++) {
            rightPrerecord.push(rightImg);
        }
    } else {
        if (rightIsImageNew) {
            rightTempKinectronContext.drawImage(rightImg, 10, 10);
        } else {
            rightTempKinectronContext.drawImage(rightPrerecord[leftPrerecord.length - 1], 10, 10);
        }
        rightIsImageNew = false;
    }

    leftIsFirstTime = false;
    rightIsFirstTime = false;
    rightCanvasData = rightTempKinectronContext.getImageData(0, 0, 340, 272);
    leftCanvasData = leftTempKinectronContext.getImageData(0, 0, 340, 272);
    for (var n = 0; n < 2000; n++) {
        var x = Math.floor(Math.random() * rightCanvasData.width);
        var y = Math.floor(Math.random() * rightCanvasData.height);
        var pixIndex = y * rightCanvasData.width + x;
        var rightPixR = rightCanvasData.data[pixIndex * 4 + 0];
        var rightPixG = rightCanvasData.data[pixIndex * 4 + 1];
        var rightPixB = rightCanvasData.data[pixIndex * 4 + 2];
        var leftPixR = leftCanvasData.data[pixIndex * 4 + 0];
        var leftPixG = leftCanvasData.data[pixIndex * 4 + 1];
        var leftPixB = leftCanvasData.data[pixIndex * 4 + 2];
        var pixR = rightPixR + leftPixR;
        var pixG = rightPixG + leftPixG;
        var pixB = rightPixB + leftPixB;

        var neiborIndex = (y - 1) * rightCanvasData.width + x - 1;
        var nrightPixR = rightCanvasData.data[neiborIndex * 4 + 0];
        var nrightPixG = rightCanvasData.data[neiborIndex * 4 + 1];
        var nrightPixB = rightCanvasData.data[neiborIndex * 4 + 2];
        var nleftPixR = leftCanvasData.data[neiborIndex * 4 + 0];
        var nleftPixG = leftCanvasData.data[neiborIndex * 4 + 1];
        var nleftPixB = leftCanvasData.data[neiborIndex * 4 + 2];
        var neiborPixR = nrightPixR + nleftPixR;
        var neiborPixG = nrightPixG + nleftPixG;
        var neiborPixB = nrightPixB + nleftPixB;
        var colorDiff = Math.sqrt(Math.pow((neiborPixR - pixR), 2) + Math.pow((neiborPixG - pixG), 2) + Math.pow((neiborPixB - pixB), 2));
        if(edgeMode != 0){
        if (colorDiff > edgeThreshold) {
          if(edgeMode == 2){
            for (var c = 0; c < 5; c++) {
                drawEllipse(kinectContext, x - c, y - c, 254, 0, 4, 2);
            }
          }
          if(edgeMode == 1){
            drawLine(kinectContext,x,y,0,0,0,2);
          }
        }}

        var grayScale = 0.21 * pixR + 0.72 * pixG + 0.07 * pixB;
        if (grayScale > brightnessThreshold) {
            drawEllipse(kinectContext, x, y, 255, 255, 255, 2);
        } else {
            drawEllipse(kinectContext, x, y, 0, 0, 0, 1);
        }
    }

}

function drawEllipse(ctx, _x, _y, r, g, b, size) {
    ctx.save();
    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
    ctx.beginPath();
    ctx.ellipse(_x, _y, size, size, 45 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}

function drawLine(ctx, _x, _y, r, g, b, thickness) {
    ctx.save();
    ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
    ctx.lineWidth = thickness;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(_x, _y);
    ctx.stroke();
    ctx.restore();
}
