//retrieve canvas on html document by id
var kinectronCanvas = window.document.getElementById("kinectronCanvas");
//retrieve the context of the canvas
var kinectContext = kinectronCanvas.getContext("2d");

//define the variables for kinectron constructor
var username = "kinectron";
var host = "172.16.242.210";
var port = "9001";
var path = "/";

//declare kinectron variable
var kinectron = null;

// //create kinectron object
// createKinectron();
//
// //setup kinectron object
// setupKinectron();
var currentDepthImg;
var prerecordImgs = [];
var lengthPrerecord = 20;
var isImageNew = false;
var isFirstTime = true;
var canvasData;

function createKinectron() {
    //declare and define kinectron variable
    kinectron = new Kinectron(username, { // username matches application display
        "host": host, // host matches application display
        "port": port, // port matches application display
        "path": path
    });

    kinectron.makeConnection();
}

function addImg(img) {
    currentDepthImg = img;
    isImageNew = true;
    prerecordImgs.push(img);
    while (prerecordImgs.length > lengthPrerecord) {
        prerecordImgs.splice(0, 1);
    }
}

//setup function for kinectron
function setupKinectron() {
    kinectron.setRGBCallback(addImg);
    kinectron.setDepthCallback(addImg);
    kinectron.setInfraredCallback(addImg);
}

//draw feed on the canvas
function drawFeed(img) {
    console.log("Start drawing kinectron")


    if (isFirstTime) {
        for (var i = 0; i < lengthPrerecord; i++) {
            prerecordImgs.push(img);
        }

    } else {
        if (isImageNew) {
            tempKinectronContext.drawImage(img, 10, 10);
        } else {
            tempKinectronContext.drawImage(prerecordImgs[prerecordImgs.length - 1], 10, 10);
        }

        isImageNew = false;
    }

    isFirstTime = false;
    canvasData = tempKinectronContext.getImageData(0, 0, 340, 272);
    for (var n = 0; n < 2000; n++) {
        var x = Math.floor(Math.random() * canvasData.width);
        var y = Math.floor(Math.random() * canvasData.height);
        var pixIndex = y * canvasData.width + x;
        var pixR = canvasData.data[pixIndex * 4 + 0];
        var pixG = canvasData.data[pixIndex * 4 + 1];
        var pixB = canvasData.data[pixIndex * 4 + 2];
        // 0.21 R + 0.72 G + 0.07 B
        var grayScale = 0.21 * pixR + 0.72 * pixG + 0.07 * pixB;
        if (grayScale > 100) {
            // drawEllipse(context2,x,y,pixR,pixG,pixB,2);
            drawEllipse(kinectContext, x, y, 255, 255, 255, 2);
        } else {
            drawEllipse(kinectContext, x, y, 0, 0, 0, 1);
        }
    }
    // kinectContext.drawImage(img, 0, 0);
}

function drawEllipse(ctx, _x, _y, r, g, b, size) {
    ctx.save();
    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',0.3)';
    ctx.beginPath();
    ctx.ellipse(_x, _y, size, size, 45 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}
