//6:34
//dance piece by donald shorter
//software by aarón montoya-moraga + yuli cai
//runs on a web browser
//uses p5.js library
//october 2016

//time calculations
var loadMilli;
var currentMilli;
var currentSecond;
var currentMinute;

//timer displayed on screen
var timerSecond;
var timerMinute;

//tap tempo
var tapTempo = [];
var tempo = 0;
var previousMoment = 0;

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

//set the initial array of tapTempo values to 0
function initTempo() {
  tapTempo[0] = 0;
  tapTempo[1] = 0;
  tapTempo[2] = 0;
  tapTempo[3] = 0;
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
