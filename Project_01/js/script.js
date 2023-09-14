/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {
}


/**
 * Description of setup
*/
function setup() {function setup() {

}
    createCanvas(500, 500);
    background(200, 200, 200);
 

    //LeftTentacle
    noFill();
    strokeWeight(30);
    stroke(127, 200, 170);
    bezier(255, 120, 330, 10, 300, 190, 500, 80);

    strokeWeight(25);
    bezier(255, 180, 320, 130, 280, 190, 500, 180);

    stroke(127, 200, 170);
    bezier(255, 210, 350, 170, 310, 230, 500, 230);

    stroke(127, 200, 170);
    bezier(255, 250, 330, 200, 300, 300, 500, 310);


    //Body
    ellipseMode(CENTER);
    noStroke();
    fill(123, 231, 200);
    ellipse(250, 400, 300, 125);
    ellipse(250, 320, 200, 125);
    ellipse(250, 250, 120, 125);
 
    // Neck
    ellipse(220, 170, 100, 100);
    ellipse(180, 130, 120, 120);
 
    // Head
    ellipse(180, 130, 200, 200);
 
    //Mouth
    rectMode(CENTER);
    fill(170, 10, 175);
    rect(160, 170, 90, 40, 10);
 
    fill(0, 0, 0);
    rect(160, 170, 80, 10, 29);
 
    // Left Eye
    fill(127, 200, 170);
    ellipse(290, 75, 50, 50);
    ellipse(270, 75, 40, 40);
    ellipse(250, 80, 30, 30);
    ellipse(240, 85, 30, 30);

        //left eyelashes
        strokeWeight(5);
        stroke(0); 
        line(297, 77, 350, 70);
        line(297, 77, 340, 45);
        line(297, 77, 310, 30);
        noStroke();
 
 
    //Left Eyeball
    strokeWeight(2);
    stroke(0);
    fill(170, 10, 175);
    ellipse(297, 77, 50, 50);
    fill(255, 255, 255);
    ellipse(300, 80, 50, 50);
    noStroke();
    fill(0, 0, 0);
    ellipse(310, 82, 20, 20);
 
    // Right Eye
    fill(127, 200, 170);
    ellipse(85, 120, 50, 50);
    ellipse(93, 110, 40, 40);
    ellipse(105, 110, 30, 30);
    ellipse(115, 115, 30, 30);
 
    //right eyelashes
     strokeWeight(5);
     stroke(0); 
     line(83, 127, 30, 125);
     line(83, 127, 35, 90);
     line(83, 127, 55, 70);
     noStroke();
     
    //Right Eyeball
    fill(170, 10, 175);
    ellipse(83, 127, 50, 50);
    strokeWeight(2);
    stroke(0); 
    fill(255, 255, 255);
    ellipse(80, 130, 50, 50);
    fill(0, 0, 0);
    ellipse(70, 140, 20, 20);
    noStroke();
 
    //Dots
    fill(150, 0, 155);
    ellipse(300, 400, 10, 10);
    ellipse(200, 380, 15, 15);
    ellipse(120, 400, 10, 10);
    ellipse(330, 380, 15, 15);
    ellipse(370, 420, 10, 10);
    ellipse(390, 410, 10, 10);

    //Tentacle
    /*noFill();
    strokeWeight(30);
    stroke(127, 200, 170);
    bezier(255, 120, 330, 10, 300, 190, 500, 80);

    strokeWeight(25);
    bezier(255, 180, 320, 130, 280, 190, 500, 180);

    stroke(127, 200, 170);
    bezier(255, 210, 350, 170, 310, 230, 500, 230);
*/







/**
function setup() {
*/
function draw() {

}

}
