

//sceneInfo
var sceneInfo = [];
var sceneMinute = [];
var sceneSecond = [];

//time calculations
var currentMilli;
var currentSecond;
var currentMinute;

//displayed on screen
var displaySecond;
var displayMinute;

//sound
var soundtrack;

function preload() {
  soundtrack = loadSound("assets/soundtrack.mp3");
}

function setup() {
  //fullscreen
  createCanvas(windowWidth, windowHeight);

  loadInfo();

  //don't show the mouse
  noCursor();

  background(255);
  
  
  soundtrack.setVolume(1.0);
  soundtrack.play();
}

function draw() {

  background(255);

  currentMilli = millis();
  currentSecond = floor(currentMilli / 1000);
  currentMinute = floor(currentMilli / 60000);

  //wrapup seconds
  currentSecond = currentSecond % 60;

  if (currentSecond < 10) {
    displaySecond = "0" + str(currentSecond);
  } else {
    displaySecond = str(currentSecond);
  }

  displayMinute = str(currentMinute);

  //put the counter on the screen
  noStroke();
  textSize(32);
  text(displayMinute + ":" + displaySecond, 10, 30);

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