var columns = 10;
var rows = 10;
var rectWidth = null;
var rectHeight = null;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectWidth = width / columns;
  rectHeight = height / rows;


}

function draw() {

  background(0);
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < columns; j++) {
      if ((i + j) % 2 === 0) {
        fill(0);
      } else {
        fill(255);
      }
      //fill(random(255));
      rect(i * rectWidth, j * rectHeight, rectWidth, rectHeight);
    }

  }
  
  fill(255, 255, 0, 100);
  var ellipseX = windowWidth/5;
  var ellipseY = windowHeight/5;
  
  ellipse(mouseX, mouseY, ellipseX, ellipseY);

}