//keyboard controls for manipulating audiovisuals

//if the following combination is pressed, the piece pauses:
//space, p, p

var resetPiece = false;

var spacePressed = false;
var space_pPressed = false

//ascii codes
var spaceAscii = 32;
var PAscii = 80;
var pAscii = 80;

//detect click
window.document.addEventListener("click", function() {
    console.log("yo what up");
});

//detect space bar and p
//if you press space, p, p then the piece pauses
window.document.onkeyup = function(e) {
    if (e.keyCode === spaceAscii) {
        console.log("space");
        spacePressed = true;
    }
    else if (e.keyCode === pAscii || e.keyCode === PAscii) {
        if (spacePressed) {
            space_pPressed = true;
            console.log("space then p");
            spacePressed = false;
        } else if (space_pPressed == true) {
            spacePressed = false;
            console.log("reset");
        } else {
            spacePressed = false;
            console.log("p");
        }
    } else {
      console.log("pressed something");
      spacePressed = false;
      space_pPressed = false;
    }
}
