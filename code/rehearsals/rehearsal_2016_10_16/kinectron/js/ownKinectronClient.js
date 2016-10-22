//retrieve canvas on html document by id
var kinectronCanvas = window.document.getElementById("kinectronCanvas");
//retrieve the context of the canvas
var context = kinectronCanvas.getContext("2d");

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
}
