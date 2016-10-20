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

var soundtrack = window.document.getElementById("soundtrack");

//detect click
window.document.addEventListener("click", function() {
    console.log("yo what up");
});

//detect space, p , p
window.document.onkeyup = function(e) {

    if (e.keyCode === spaceAscii) {
        console.log("space");
        spacePressed = true;
        soundtrack.play();
    } else if (e.keyCode === pAscii || e.keyCode === PAscii) {
        if (spacePressed) {
            space_pPressed = true;
            console.log("space then p");
            spacePressed = false;
        } else if (space_pPressed == true) {
            spacePressed = false;
            console.log("reset");
            soundtrack.pause();
        } else {
            spacePressed = false;
            console.log("p");
        }
    } else {
        spacePressed = false;
        space_pPressed = false;
    }


}
