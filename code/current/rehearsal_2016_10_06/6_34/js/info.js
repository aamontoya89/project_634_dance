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

    sceneInfo.push("not on stage");
    sceneInfo.push("crawls into stage");
    sceneInfo.push("wakes up");
    sceneInfo.push("does diagonal pattern");
    sceneInfo.push("goes to the window");
    sceneInfo.push("swings his arms");
    sceneInfo.push("swirling around");
    sceneInfo.push("does another diagonal pass");
    sceneInfo.push("stands around");
    sceneInfo.push("moves all over the place");
    sceneInfo.push("does a backstand");
    sceneInfo.push("stands up again");
    sceneInfo.push("goes back to the window");
    sceneInfo.push("pivots around the window");
    sceneInfo.push("slows down");
    sceneInfo.push("lays on the ground");

    sceneVisuals.push("black");
    sceneVisuals.push("spotlight growing");
    sceneVisuals.push("spotlight maximum");
    sceneVisuals.push("following and trail");
    sceneVisuals.push("goes to the window");
    sceneVisuals.push("swings his arms");
    sceneVisuals.push("swirling around");
    sceneVisuals.push("does another diagonal pass");
    sceneVisuals.push("stands around");
    sceneVisuals.push("moves all over the place");
    sceneVisuals.push("does a backstand");
    sceneVisuals.push("stands up again");
    sceneVisuals.push("goes back to the window");
    sceneVisuals.push("pivots around the window");
    sceneVisuals.push("slows down");
    sceneVisuals.push("lays on the ground");

    sceneMinute.push(0);
    sceneSecond.push(1);

    sceneMinute.push(0);
    sceneSecond.push(30);

    sceneMinute.push(0);
    sceneSecond.push(55);

    sceneMinute.push(1);
    sceneSecond.push(10);

    sceneMinute.push(1);
    sceneSecond.push(15);

    sceneMinute.push(1);
    sceneSecond.push(30);

    sceneMinute.push(2);
    sceneSecond.push(1);

    sceneMinute.push(2);
    sceneSecond.push(15);

    sceneMinute.push(2);
    sceneSecond.push(30);

    sceneMinute.push(2);
    sceneSecond.push(55);

    sceneMinute.push(4);
    sceneSecond.push(30);

    sceneMinute.push(5);
    sceneSecond.push(15);

    sceneMinute.push(5);
    sceneSecond.push(20);

    sceneMinute.push(5);
    sceneSecond.push(30);

    sceneMinute.push(6);
    sceneSecond.push(1);

    sceneMinute.push(6);
    sceneSecond.push(20);

}
