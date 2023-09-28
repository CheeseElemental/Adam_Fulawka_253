/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

//Declaring variables (by blindly following Pippin's Github code yolo)

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 60,
    fill: {
        r: 255,
        g: 0,
        b: 0,
    }

}

// creating the user (victim)
let victim = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255,
}

//Static variable amount
let numStatic = 5000;

/**
 * Description of preload
*/

function preload() {

}



//Canvas setup
// covid19 attack movement
function setup() {
createCanvas(windowWidth,windowHeight);

covid19.y = random(0,height);
covid19.vx = covid19.speed;

//attempt at making covid19 attack vertically
/**covid19.y = random(width,0);
covid19.x = covid19.speed; */
noCursor();
}


/**
 * Description of draw()
*/
function draw() {

//background colour
    background(0);

    // Static
    for (let i = 0; i < numStatic; i++){
    let x = random(0,width);
    let y = random(0,height);
    stroke(255);
    point(x,y);
    }

    


    //create the red dot 
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    //move and loop the red dot
    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0,height);
    }

    //making the red dot look like a red dot
    fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
    ellipse(covid19.x,covid19.y,covid19.size);

    //User movement
    victim.x = mouseX;
    victim.y = mouseY;

    //User look
    fill(victim.fill);
    ellipse(victim.x,victim.y,victim.size);

    //check distance for catching covid19 and stopping the draw loop if it does 
    let d = dist(victim.x,victim.y,covid19.x,covid19.y);
    if (d < covid19.size/2 + victim.size/2) {
        noLoop();
    }




    



}