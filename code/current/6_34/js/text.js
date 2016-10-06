//6:34
//dance piece by donald shorter
//software by aarón montoya-moraga + yuli cai
//runs on a web browser
//uses p5.js library
//october 2016

//donald message displayed on screen
var infoDonald = "";
//visuals message displayed on screen
var infoVisuals = "";
//variable to toggle display of scene info
var hideInfo = false;
//variable to toggle display of timer
var hideTimer = false;
//variable to toggle display of stage directions
var hideStageDirections = false;

//function for text setup
function setupText() {
  textFont("Helvetica");
  textSize(10);
  textStyle(NORMAL);
}

function displayInfo() {
  if (!hideInfo) {
    //display message on screen
    for (var i = 0; i < sceneInfo.length; i++) {
      if (currentMinute >= sceneMinute[i] && currentSecond >= sceneSecond[i]) {
        infoDonald = sceneInfo[i];
        infoVisuals = sceneVisuals[i];
      }
    }
    //put the scene text on the screen
    text("donald: " + infoDonald, windowWidth / 5, windowHeight / 15);
    //put the visuals text on the screen
    text("visuals: " + infoVisuals, windowWidth / 5, 3 * windowHeight / 15);
  }
}

function displayTimer() {
  if (!hideTimer) {
    //put the timer on the screen
    noStroke();
    textSize(32);
    text(timerMinute + ":" + timerSecond, windowWidth / 10, 2 * windowHeight / 15);
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

function infoOnScreen() {
  //put the timer on the screen
  displayTimer();

  displayInfo();

  //display stage directions
  displayStageDirections();

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
