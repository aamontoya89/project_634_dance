//6:34
//dance piece by donald shorter
//software by aarón montoya-moraga + yuli cai
//runs on a web browser
//uses p5.js library
//october 2016

//arrays for holding the trail information
var trailX = [];
var trailY = [];
var trailMoment = [];
var trailMaximumLength = 1000;
var trailLifetime = 5000;
var posX = 0;
var posY = 0;
var easing = 0.1;
var trail = [];
var trailAmount = 50;

//diameter spotlight
var spotlightDiameter = 0.1;
var spotlightDiameterStep = 0.04;
var spotlightDiameterMax = 200;

//function for updating trail left by donald
// function updateTrail() {
//
//     //if the mouse is pressed, add to the trail
//     if (mouseIsPressed) {
//         //append to the end of the trails the current
//         //mouse position
//         //also record the moment when they were created
//         trailX.push(mouseX);
//         trailY.push(mouseY);
//         trailMoment.push(millis());
//
//         //if the length of the trails is longer
//         //than the maximum, pop the first elements
//         while (trailX.length > trailMaximumLength) {
//             trailX.splice(0, 1);
//         }
//         while (trailY.length > trailMaximumLength) {
//             trailY.splice(0, 1);
//         }
//
//     }
//
//     //check if they are still alive
//     //if the time since creation is larger than lifetime
//     //delete the particle
//     for (var i = 0; i < trailX.length; i++) {
//         if (millis() - trailMoment[i] > trailLifetime) {
//             trailX.splice(0, 1);
//             trailY.splice(0, 1);
//         }
//     }
// }

//function for displaying trail
function displayTrail() {
    if ((trailX.length) > 0 && (trailY.length > 0)) {

        for (var i = 0; i < trailX.length; i++) {
            for (var j = 0; j < trailY.length; j++) {
                fill(random(255), random(255), random(255));
                var diameter = 50 * (trailLifetime - (millis() - trailMoment[i])) / 1000;
                console.log(radius);
                ellipse(trailX[i], trailY[j], diameter, diameter);
            }
        }
    }
}

function voidStage() {
    console.log("void stage");
    //background(0);
}

function spotlight() {
    fill(255);
    noStroke();
    spotlightDiameter = spotlightDiameter + spotlightDiameterStep;

    if (spotlightDiameter > spotlightDiameterMax) {
        spotlightDiameter = spotlightDiameterMax;
    }

    posX = posX + easing * (mouseX - posX);
    posY = posY + easing * (mouseY - posY);
    var pos = createVector(posX, posY);
    trail.push(pos);
    if (trail.length > trailAmount) {
        trail.splice(0, 1);
    }

    spotlightDiameter = spotlightDiameter + spotlightDiameterStep;
    if (spotlightDiameter > spotlightDiameterMax) {
        spotlightDiameter = spotlightDiameterMax;
    }

    fill(255, 100);
    noStroke();
    for (var i = 0; i < trail.length; i++) {
        ellipse(trail[i].x, trail[i].y, spotlightDiameter * (i + 1) / (trailAmount), spotlightDiameter * (i + 1) / (trailAmount));
    }
}

function displayCurrentVisuals() {

    if (currentMinute > 6) {

        if (currentSecond >= 55) {

        } else if (currentSecond >= 0) {

        }


    } else if (currentMinute == 6) {

        if (currentSecond >= 55) {

        } else if (currentSecond >= 0) {

        }


    } else if (currentMinute == 5) {

        if (currentSecond >= 55) {

        } else if (currentSecond >= 0) {

        }


    } else if (currentMinute == 4) {

        if (currentSecond >= 55) {

        } else if (currentSecond >= 0) {

        }


    } else if (currentMinute == 3) {

        if (currentSecond >= 55) {

        } else if (currentSecond >= 0) {

        }


    } else if (currentMinute == 2) {

        if (currentSecond >= 55) {

        } else if (currentSecond >= 0) {

        }


    } else if (currentMinute == 1) {

        if (currentSecond >= 55) {
            //goes to the window
        } else if (currentSecond >= 15) {
            //does diagonal pattern
            spotlight();

        } else if (currentSecond >= 10) {
            //does diagonal pattern
            spotlight();
        } else if (currentSecond => 0) {
            //hold
            spotlight();
        }

    } else if (currentMinute == 0) {

        if (currentSecond >= 55) {
            //wakes up
            spotlight();

        } else if (currentSecond >= 30) {
            //crawls into stage
            spotlight();

        } else if (currentSecond >= 0) {
            //not on stage
            voidStage();
        }

    }

}
