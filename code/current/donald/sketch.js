//6:34
//dance piece by donald shorter
//software by aarón montoya-moraga + yuli cai
//runs on a web browser
//uses p5.js library
//september 2016

//scene information
var sceneInfo = [];
var sceneMinute = [];
var sceneSecond = [];

//time calculations
var loadMilli;
var currentMilli;
var currentSecond;
var currentMinute;

//timer displayed on screen
var timerSecond;
var timerMinute;
//message displayed on screen
var info = "";
//variable to toggle display of scene info
var hideInfo = false;
//variable to toggle display of timer
var hideTimer = false;
//variable to toggle display of stage directions
var hideStageDirections = false;

//sound
var soundtrack;
var soundtrackIsPlaying = true;

//tap tempo
var tapTempo = [];
var tempo = 0;
var previousMoment = 0;

//arrays for holding the trail information
var trailX = [];
var trailY = [];
var trailMoment = [];
var trailMaximumLength = 1000;
var trailLifetime = 5000;

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

  //white background
  background(0);

  //playback the soundtrack
  playSoundtrack();

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

    //put the timer on the screen
    displayTimer();

    displayInfo();

    //update tempo
    defineTempo();

    // if (millis() > previousMoment + tempo) {
    //   previousMoment = millis();
    //   fill(random(255), random(255), random(255));
    // }


    ellipse(mouseX, mouseY, 100, 100);

    //update trail
    updateTrail();

    //display trail
    displayTrail();

    //display stage directions
    displayStageDirections();

  } else {
    background(0);
  }

}


function loadInfo() {

  sceneInfo.push("donald is not on stage");
  sceneInfo.push("donald crawls into stage");
  sceneInfo.push("donald wakes up");
  sceneInfo.push("donald does diagonal pattern");
  sceneInfo.push("donald goes to the window");
  sceneInfo.push("donald swings his arms");
  sceneInfo.push("donald swirling around");
  sceneInfo.push("donald does another diagonal pass");
  sceneInfo.push("donald stands around");
  sceneInfo.push("donald moves all over the place");
  sceneInfo.push("donald does a backstand");
  sceneInfo.push("donald stands up again");
  sceneInfo.push("donald goes back to the window");
  sceneInfo.push("donald pivots around the window");
  sceneInfo.push("donald slows down");
  sceneInfo.push("donald lays on the ground");

  sceneMinute.push(0);
  sceneMinute.push(0);
  sceneMinute.push(0);
  sceneMinute.push(1);
  sceneMinute.push(1);
  sceneMinute.push(1);
  sceneMinute.push(2);
  sceneMinute.push(2);
  sceneMinute.push(2);
  sceneMinute.push(2);
  sceneMinute.push(4);
  sceneMinute.push(5);
  sceneMinute.push(5);
  sceneMinute.push(5);
  sceneMinute.push(6);
  sceneMinute.push(6);

  sceneSecond.push(1);
  sceneSecond.push(30);
  sceneSecond.push(55);
  sceneSecond.push(10);
  sceneSecond.push(15);
  sceneSecond.push(30);
  sceneSecond.push(1);
  sceneSecond.push(15);
  sceneSecond.push(30);
  sceneSecond.push(55);
  sceneSecond.push(30);
  sceneSecond.push(15);
  sceneSecond.push(20);
  sceneSecond.push(30);
  sceneSecond.push(1);
  sceneSecond.push(20);

}

//set the initial array of tapTempo values to 0
function initTempo() {
  tapTempo[0] = 0;
  tapTempo[1] = 0;
  tapTempo[2] = 0;
  tapTempo[3] = 0;
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

//calculate tempo according to tapTempo array

function defineTempo() {

  //check if all of the numbers are different  
  if (tapTempo[0] != 0) {
    tempo = 0;
    tempo += abs(tapTempo[0] - tapTempo[1]);
    tempo += abs(tapTempo[1] - tapTempo[2]);
    tempo += abs(tapTempo[2] - tapTempo[3]);
    //average
    tempo = tempo / 3;
  }
}

function displayStageDirections() {
  if (!hideStageDirections) {
    stroke(0);
    fill(255);
    var upStage = "upstage";
    var downStage = "downstage";
    var centerStage = "center";
    var leftStage = "l\ne\nf\nt\ns\nt\na\ng\ne";
    var rightStage = "r\ni\ng\nh\nt\ns\nt\na\ng\ne";

    textAlign(CENTER, CENTER);
    text(upStage, windowWidth / 2, windowHeight / 15);
    text(centerStage, windowWidth / 2, windowHeight / 2);
    text(downStage, windowWidth / 2, 14 * windowHeight / 15);
    text(rightStage, windowWidth / 20, windowHeight / 2);
    text(leftStage, 19 * windowWidth / 20, windowHeight / 2);
  }
}

//function for playing back the soundtrack
function playSoundtrack() {
  soundtrack.setVolume(1.0);
  soundtrack.play();
}

//function for text setup
function setupText() {
  textFont("Helvetica");
  textSize(10);
  textStyle(NORMAL);
}

function timeRetrieval() {
  //retrieve time data
  currentMilli = millis() - loadMilli;
  currentSecond = floor(currentMilli / 1000);
  currentMinute = floor(currentMilli / 60000);

  //convert from integer to string
  timerMinute = str(currentMinute);

  //wrapup seconds
  currentSecond = currentSecond % 60;

  //add a 0 to the left if currentSecond < 10
  if (currentSecond < 10) {
    timerSecond = "0" + str(currentSecond);
  } else {
    timerSecond = str(currentSecond);
  }

}

//function triggered when the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//function triggered when a key is pressed
//used for hiding and making visible the 
//text on the screen
function keyTyped() {
  if (key === "t") {
    hideTimer = !hideTimer;
  } else if (key === "i") {
    hideInfo = !hideInfo;
  } else if (key === "s") {
    hideStageDirections = !hideStageDirections;
  } else if (key === "a") {
    hideTimer = false;
    hideInfo = false;
    hideStageDirections = false;
  } else if (key === "z") {
    hideTimer = true;
    hideInfo = true;
    hideStageDirections = true;
  } else if (key === "r") {
    resetPiece();
  }
}

function resetPiece() {
  soundtrack.stop();
  soundtrack.play();
  loadMilli = millis();
}

function displayTimer() {
  if (!hideTimer) {
    //put the timer on the screen
    noStroke();
    textSize(32);
    text(timerMinute + ":" + timerSecond, windowWidth / 10, 2 * windowHeight / 15);
  }

}

function displayInfo() {
  if (!hideInfo) {
    //display message on screen
    for (var i = 0; i < sceneInfo.length; i++) {
      if (currentMinute >= sceneMinute[i] && currentSecond >= sceneSecond[i]) {
        info = sceneInfo[i];
      }
    }
    //put the scene text on the screen
    text(info, windowWidth / 5, windowHeight / 15);
  }
}

//function for updating trail left by donald
function updateTrail() {

  //if the mouse is pressed, add to the trail
  if (mouseIsPressed) {
    //append to the end of the trails the current
    //mouse position
    //also record the moment when they were created
    trailX.push(mouseX);
    trailY.push(mouseY);
    trailMoment.push(millis());

    //if the length of the trails is longer
    //than the maximum, pop the first elements
    while (trailX.length > trailMaximumLength) {
      trailX.splice(0, 1);
    }
    while (trailY.length > trailMaximumLength) {
      trailY.splice(0, 1);
    }



  }

  //check if they are still alive
  //if the time since creation is larger than lifetime
  //delete the particle
  for (var i = 0; i < trailX.length; i++) {
    if (millis() - trailMoment[i] > trailLifetime) {
      trailX.splice(0, 1);
      trailY.splice(0, 1);
    }
  }
}

//function for displaying the trail
function displayTrail() {
  if ((trailX.length) > 0 && (trailY.length > 0)) {

    for (var i = 0; i < trailX.length; i++) {
      for (var j = 0; j < trailY.length; j++) {
        fill(random(255), random(255), random(255));
        var radius = 50*(trailLifetime - (millis() - trailMoment[i]))/1000;
        console.log(radius);
        ellipse(trailX[i], trailY[j], radius, radius);
      }
    }

  }
}