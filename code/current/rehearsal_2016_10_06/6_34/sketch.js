//6:34
//dance piece by donald shorter
//software by aarón montoya-moraga + yuli cai
//runs on a web browser
//uses p5.js library
//october 2016

//function for loading the assets
function preload() {
  //load the sound file
  soundtrack = loadSound("assets/soundtrack.mp3");
  //save the moment when the assets are done loading
  loadMilli = millis();
}

function setup() {
  //fullscreen
  createCanvas(windowWidth, windowHeight);

  //loadInfo of the scenes
  loadInfo();

  //don't show the mouse
  noCursor();

  //black background
  background(0);

  //playback the soundtrack
  playSoundtrack();

  //initialize tempo
  initTempo();

  //setup text styling
  setupText();
}

function draw() {

  //console.log(soundtrack.isPlaying());

  if (soundtrack.isPlaying()) {

    //black background
    background(0);

    //time retrieval
    timeRetrieval();

    //display sceneVisuals
    displayCurrentVisuals();

    //display info on screen
    infoOnScreen();

  } else {
    background(0);
  }

}

//detect tab key to control tap tempo
function keyPressed() {

  if (keyCode == RIGHT_ARROW) {
    //delete the first element of the array
    tapTempo.shift();
    //append the current millis() counting
    tapTempo.push(millis());
    //print to console
    console.log(tapTempo[0]);
  }

}

//function triggered when the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function resetPiece() {
  soundtrack.stop();
  soundtrack.play();
  loadMilli = millis();
}
