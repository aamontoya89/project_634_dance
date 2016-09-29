//6:30
//dance piece by donald shorter
//software by aarón montoya-moraga + yuli cai
//runs on a web browser
//uses p5.js library
//september 2016

//sceneInfo
var sceneInfo = [];
var sceneMinute = [];
var sceneSecond = [];

//time calculations
var currentMilli;
var currentSecond;
var currentMinute;

//timer displayed on screen
var displaySecond;
var displayMinute;
//message displayed on screen
var message = "";

//sound
var soundtrack;

//tap tempo
var tapTempo = [];
var tempo = 0;
var previousMoment = 0;


function preload() {
  soundtrack = loadSound("assets/soundtrack.mp3");
}

function setup() {
  //fullscreen
  createCanvas(windowWidth, windowHeight);

  loadInfo();

  //don't show the mouse
  noCursor();

  //white background
  background(255);

  //playback the soundtrack
  soundtrack.setVolume(1.0);
  soundtrack.play();

  initTempo();
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
  text(displayMinute + ":" + displaySecond, 10, 30);
 
 //display message on screen
  for (var i = 0; i < sceneInfo.length; i++) {
    if (currentMinute >= sceneMinute[i] && currentSecond >= sceneSecond[i]) {
      message = sceneInfo[i];
    }
  }
  //put the scene text on the screen
  text(message, 10, 70);



  //update tempo
  defineTempo();

  if (millis() > previousMoment + tempo) {
    previousMoment = millis();
    fill(random(255), random(255), random(255));
  }

  ellipse(mouseX, mouseY, 400, 400);



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