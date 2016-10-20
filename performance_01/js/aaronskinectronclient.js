var kinectron = new Kinectron("kinectron", { // username matches application display
    "host": "192.168.1.96", // host matches application display
    "port": "9001", // port matches application display
    "path": "/"
});


kinectron.makeConnection();

kinectron.startRGB(myCallback);
kinectron.startDepth(myCallback);
// kinectron.startTrackedBodies(myCallback);
// kinectron.startBodies(myCallback);
// kinectron.startInfrared(myCallback);
// kinectron.startLEInfrared(myCallback);
// kinectron.startKey(myCallback);

// kinectron.setRGBCallback(myCallback);
// kinectron.setDepthCallback(myCallback);
// kinectron.setTrackedBodiesCallback(myCallback);
// kinectron.setBodiesCallback(myCallback);
// kinectron.setInfraredCallback(myCallback);
// kinectron.setLeInfraredCallback(myCallback);
// kinectron.setKeyCallback(myCallback);

function myCallBack() {
  console.log("yay");
}
