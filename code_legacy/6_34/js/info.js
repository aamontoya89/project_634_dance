//6:34
//dance piece by donald shorter
//software by aarón montoya-moraga + yuli cai
//runs on a web browser
//uses p5.js library
//october 2016

//scene information
var sceneInfo = [];
var sceneVisuals = [];
var sceneMinute = [];
var sceneSecond = [];

function loadInfo() {

    sceneMinute.push(0);
    sceneSecond.push(1);
    sceneInfo.push("not on stage");
    sceneVisuals.push("black");

    sceneMinute.push(0);
    sceneSecond.push(30);
    sceneInfo.push("crawls into stage");
    sceneVisuals.push("spotlight growing");

    sceneMinute.push(0);
    sceneSecond.push(55);
    sceneInfo.push("wakes up");
    sceneVisuals.push("spotlight maximum");

    sceneMinute.push(1);
    sceneSecond.push(10);
    sceneInfo.push("does diagonal pattern");
    sceneVisuals.push("following and trail");

    sceneMinute.push(1);
    sceneSecond.push(15);
    sceneInfo.push("goes to the window");
    sceneVisuals.push("goes to the window");

    sceneMinute.push(1);
    sceneSecond.push(30);
    sceneInfo.push("swings his arms");
    sceneVisuals.push("swings his arms");

    sceneMinute.push(2);
    sceneSecond.push(1);
    sceneInfo.push("swirling around");
    sceneVisuals.push("swirling around");

    sceneMinute.push(2);
    sceneSecond.push(15);
    sceneInfo.push("does another diagonal pass");
    sceneVisuals.push("does another diagonal pass");

    sceneMinute.push(2);
    sceneSecond.push(30);
    sceneInfo.push("stands around");
    sceneVisuals.push("stands around");

    sceneMinute.push(2);
    sceneSecond.push(55);
    sceneInfo.push("moves all over the place");
    sceneVisuals.push("moves all over the place");

    sceneMinute.push(4);
    sceneSecond.push(30);
    sceneInfo.push("does a backstand");
    sceneVisuals.push("does a backstand");

    sceneMinute.push(5);
    sceneSecond.push(15);
    sceneInfo.push("stands up again");
    sceneVisuals.push("stands up again");

    sceneMinute.push(5);
    sceneSecond.push(20);
    sceneInfo.push("goes back to the window");
    sceneVisuals.push("goes back to the window");

    sceneMinute.push(5);
    sceneSecond.push(30);
    sceneInfo.push("pivots around the window");
    sceneVisuals.push("pivots around the window");

    sceneMinute.push(6);
    sceneSecond.push(1);
    sceneInfo.push("slows down");
    sceneVisuals.push("slows down");

    sceneMinute.push(6);
    sceneSecond.push(20);
    sceneInfo.push("lays on the ground");
    sceneVisuals.push("lays on the ground");

}
