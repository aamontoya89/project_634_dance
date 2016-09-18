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

  background(0);

  int currentMillis = millis();

  int currentSeconds = currentMillis / 1000;
  int currentMinutes = currentMillis / 60000;

  if (currentSeconds > 60) {
    currentSeconds = currentSeconds - 60;
  }

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
  
  //white ellipse that follows the cursor
  fill(255);  
  ellipse(mouseX, mouseY, 350, 350);

}