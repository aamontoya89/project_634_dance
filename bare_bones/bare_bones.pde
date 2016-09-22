import processing.sound.*;
SoundFile file;

void setup() {
  //size(800, 800);
  fullScreen();
  // Load a soundfile from the /data folder of the sketch and play it back
  file = new SoundFile(this, "music.mp3");
  file.play();
  noCursor();
}

void draw() {

  String seconds, minutes;

  String[] sceneInfo = new String[16];
  int[] sceneMinute = new int[16];
  int[] sceneSecond = new int[16];

  sceneInfo[0] = "donald is not on stage";
  sceneInfo[1] = "donald crawls into stage";
  sceneInfo[2] = "donald wakes up";
  sceneInfo[3] = "donald does diagonal pattern";
  sceneInfo[4] = "donald goes to the window";
  sceneInfo[5] = "donald swings his arms";
  sceneInfo[6] = "donald swirling around";
  sceneInfo[7] = "donald does another diagonal pass";
  sceneInfo[8] = "donald stands around";
  sceneInfo[9] = "donald moves all over the place";
  sceneInfo[10] = "donald does a backstand";
  sceneInfo[11] = "donald stands up again";
  sceneInfo[12] = "donald goes back to the window";
  sceneInfo[13] = "donald pivots around the window";
  sceneInfo[14] = "donald slows down";
  sceneInfo[15] = "donald lays on the ground";

  sceneMinute[0] = 0;
  sceneMinute[1] = 0;
  sceneMinute[2] = 0;
  sceneMinute[3] = 1;
  sceneMinute[4] = 1;
  sceneMinute[5] = 1;
  sceneMinute[6] = 2;
  sceneMinute[7] = 2;
  sceneMinute[8] = 2;
  sceneMinute[9] = 2;
  sceneMinute[10] = 4;
  sceneMinute[11] = 5;
  sceneMinute[12] = 5;
  sceneMinute[13] = 5;
  sceneMinute[14] = 6;
  sceneMinute[15] = 6;


  sceneSecond[0] = 0;
  sceneSecond[1] = 30;
  sceneSecond[2] = 55;
  sceneSecond[3] = 10;
  sceneSecond[4] = 15;
  sceneSecond[5] = 30;
  sceneSecond[6] = 0;
  sceneSecond[7] = 15;
  sceneSecond[8] = 30;
  sceneSecond[9] = 55;
  sceneSecond[10] = 30;
  sceneSecond[11] = 15;
  sceneSecond[12] = 20;
  sceneSecond[13] = 30;
  sceneSecond[14] = 0;
  sceneSecond[15] = 20;

  background(255);

  int currentMillis = millis();

  int currentSeconds = currentMillis / 1000;
  int currentMinutes = currentMillis / 60000;

  //wrapup seconds
  currentSeconds = currentSeconds % 60;

  if (currentSeconds < 10) {
    seconds = "0" + str(currentSeconds);
  } else {
    seconds = str(currentSeconds);
  }

  minutes = str(currentMinutes);

  //put the counter on the screen
  noStroke();
  textSize(32);
  text(minutes + ":" + seconds, 10, 30);
  
  String message = "";
  
  for(int i = 0; i < sceneInfo.length; i++) {
    if (currentMinutes >= sceneMinute[i] && currentSeconds >= sceneSecond[i]) {
      message = sceneInfo[i];
    }
  }
 
  
  //put the scene text on the screen
  text(message, 10, 70);

  //white ellipse that follows the cursor
  fill(0);  
  ellipse(mouseX, mouseY, 350, 350);
}

//1
//0:00
//donald is not on stage

//2
//0:30
//donald crawls into stage
//from left stage
//oily liquid towards him

//3
//0:55
//donald wakes up

//4
//1:10
//donald starts walking around
//the pattern

//5
//1:15
//donald goes into the window
//and crawls upstage

//6
//1:30
//swinging the arms

//7
//2:00
//swirling around

//8
//2:15
//another diagonal pass

//9
//2:30
//standing around

//10
//2:55
//sudden break, it gets heavy
//in movement, dancing all over the space

//11
//4:30
//donald does a headstand
//oily comes back, donald is the source
//the sink is opposite on the stage

//12
//5:15
//donald stands up again

//13
//5:20
//donald goes back to the window

//14
//5:30
//donald pivots around the window

//15
//6:00 
//everything start to slow down

//16
//6:20
//donald lays down on the ground