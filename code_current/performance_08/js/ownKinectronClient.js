//retrieve canvas on html document by id
var kinectronCanvas=window.document.getElementById("kinectronCanvas");
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

//draw feed on the canvas
function leftDrawFeed(img) {


    if (leftIsFirstTime) {
        for (var i = 0; i < lengthPrerecord; i++) {
            leftPrerecord.push(img);
        }
    } else {
        if (leftIsImageNew) {
            leftTempKinectronContext.drawImage(img, 10, 10);
        } else {
            leftTempKinectronContext.drawImage(leftPrerecord[leftPrerecord.length - 1], 10, 10);
        }

        leftIsImageNew = false;
    }

    leftIsFirstTime = false;
    leftCanvasData = leftTempKinectronContext.getImageData(0, 0, 340, 272);
    for (var n = 0; n < 2000; n++) {
        var x = Math.floor(Math.random() * leftCanvasData.width);
        var y = Math.floor(Math.random() * leftCanvasData.height);
        var pixIndex = y * leftCanvasData.width + x;
        var pixR = leftCanvasData.data[pixIndex * 4 + 0];
        var pixG = leftCanvasData.data[pixIndex * 4 + 1];
        var pixB = leftCanvasData.data[pixIndex * 4 + 2];
        // 0.21 R + 0.72 G + 0.07 B
        var grayScale = 0.21 * pixR + 0.72 * pixG + 0.07 * pixB;
        if (grayScale > 200) {
            // drawEllipse(context2,x,y,pixR,pixG,pixB,2);
            drawEllipse(kinectContext, x, y, 255, 255, 255, 2);
        } else {
            drawEllipse(kinectContext, x, y, 0, 0, 0, 1);
        }
    }
    // kinectContext.drawImage(img, 0, 0);
}

function rightDrawFeed(img) {

    if (rightIsFirstTime) {
        for (var i = 0; i < lengthPrerecord; i++) {
            rightPrerecord.push(img);
        }
    } else {
        if (rightIsImageNew) {
            rightTempKinectronContext.drawImage(img, 10, 10);
        } else {
            rightTempKinectronContext.drawImage(rightPrerecord[leftPrerecord.length - 1], 10, 10);
        }

        rightIsImageNew = false;
    }

    rightIsFirstTime = false;
    rightCanvasData = rightTempKinectronContext.getImageData(0, 0, 340, 272);
    for (var n = 0; n < 2000; n++) {
        var x = Math.floor(Math.random() * rightCanvasData.width);
        var y = Math.floor(Math.random() * rightCanvasData.height);
        var pixIndex = y * rightCanvasData.width + x;
        var pixR = rightCanvasData.data[pixIndex * 4 + 0];
        var pixG = rightCanvasData.data[pixIndex * 4 + 1];
        var pixB = rightCanvasData.data[pixIndex * 4 + 2];
        // 0.21 R + 0.72 G + 0.07 B
        var grayScale = 0.21 * pixR + 0.72 * pixG + 0.07 * pixB;
        if (grayScale > 200) {

            drawEllipse(kinectContext, x, y, 255, 255, 255, 2);
        } else {
            drawEllipse(kinectContext, x, y, 0, 0, 0, 1);

        }
    }
    // kinectContext.drawImage(img, 0, 0);
}

function drawEllipse(ctx, _x, _y, r, g, b, size) {
    ctx.save();
    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
    ctx.beginPath();
    ctx.ellipse(_x, _y, size, size, 45 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}
