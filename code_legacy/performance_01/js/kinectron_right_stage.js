//retrieve canvas on html document by id
var rightCanvas = window.document.getElementById("kinectron_right_stage");
//retrieve the context of the canvas
var rightContext = rightCanvas.getContext("2d");

//define the variables for kinectron constructor
var rightUsername = "kinectron";
var rightHost = "172.16.248.45";
var rightPort = "9001";
var rightPath = "/";

//declare kinectron variable
var rightKinectron = null;

//create kinectron object
createRightKinectron();

//setup kinectron object
setupRightKinectron();

function createRightKinectron() {
    //declare and define kinectron variable
    rightKinectron = new Kinectron(rightUsername, { // username matches application display
        "host": rightHost, // host matches application display
        "port": rightPort, // port matches application display
        "path": rightPath
    });

    rightKinectron.makeConnection();
}

//setup function for kinectron
function setupRightKinectron() {
    rightKinectron.setRGBCallback(rightDrawFeed);
    rightKinectron.setDepthCallback(rightDrawFeed);
    rightKinectron.setInfraredCallback(rightDrawFeed);
}

//draw feed on the canvas
function rightDrawFeed(img) {
    rightContext.drawImage(img, 10, 10);
}
