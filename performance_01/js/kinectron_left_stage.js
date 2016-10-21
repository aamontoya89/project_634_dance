//retrieve canvas on html document by id
var leftCanvas = window.document.getElementById("kinectron_left_stage");
//retrieve the context of the canvas
var leftContext = leftCanvas.getContext("2d");

//define the variables for kinectron constructor
var leftUsername = "kinectron";
var leftHost = "172.17.75.184";
var leftPort = "9001";
var leftPath = "/";

//declare kinectron variable
var leftKinectron = null;

//create kinectron object
createLeftKinectron();

//setup kinectron object
setupLeftKinectron();

function createLeftKinectron() {
    //declare and define kinectron variable
    leftKinectron = new Kinectron(leftUsername, { // username matches application display
        "host": leftHost, // host matches application display
        "port": leftPort, // port matches application display
        "path": leftPath
    });

    leftKinectron.makeConnection();
}

//setup function for kinectron
function setupLeftKinectron() {
    leftKinectron.setRGBCallback(leftDrawFeed);
    leftKinectron.setDepthCallback(leftDrawFeed);
    leftKinectron.setInfraredCallback(leftDrawFeed);
}

//draw feed on the canvas
function leftDrawFeed(img) {
    leftContext.drawImage(img, 10, 10);
}
