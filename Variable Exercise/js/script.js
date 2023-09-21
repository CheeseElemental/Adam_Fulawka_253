/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let backgroundShade = 55;
let eyeX = 60;
let eyeY = 60;
let pupilX = 30;
let pupilY = 30;
let headX = 40;
let headY = 20;
/**curveVariables */


/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
    ;
}


/**
 * Description of draw()
*/
function draw() {

    
    background(55, 55, 55);
    noStroke();

    


    /**Head*/
    fill(34, 176, 12)
    ellipse(250, 420, headX*8, headY*7);
    ellipse(250, 430, headX*9, headY*7);
    ellipse(250, 450, headX*10, headY*8);
    /**Mouth */
    fill(0, 0, 0)
    ellipse(250 + mouseX* .13 -20 , 420, headX*.8, headY+ mouseY*.07);

    


//** 
    /**EyeStrands*/ 
    noFill();
    stroke(34, 176, 12);
    strokeWeight(30);
    curve(mouseX*-1.3, mouseY*3.3, mouseX + 40, mouseY, 290, 370, mouseX *.8, mouseY *1.3);
    curve(mouseX*1.3, mouseY*3.3, mouseX - 40, mouseY, 210, 370, mouseX *-.8, mouseY *1.3);

    /**Double Eye movement*/
    noStroke();
    fill (255, 255, 255);
    ellipse(mouseX + 40, mouseY, eyeX, eyeY);
    ellipse(mouseX - 40, mouseY, eyeX, eyeY);

    /**Pupils*/ 
    fill (0, 0, 0);
    ellipse(mouseX + 40, mouseY, pupilX, pupilY);
    ellipse(mouseX - 40, mouseY, pupilX, pupilY);
    
    
    /**EyeShine */
    fill (255, 255, 255, mouseY);
    /**Left */
    ellipse(mouseX + 45, mouseY + 10, 10, 10);
    ellipse(mouseX - 35, mouseY + 10, 10, 10);
    /**Right */
    ellipse(mouseX + 45, mouseY - 12, 20, 20);
    ellipse(mouseX - 35, mouseY - 12, 20, 20);


    
    /**Arms */
    strokeWeight(80);
    stroke(34, 176, 12)
    line(400, 230, 550, 270);
    line(80, 300, 5, 600);

    
    /**Hands */
    /**Right Hand */
    noStroke ();
    fill(49, 141, 61)
    rect(30, 200, 100, 155, 40);
    strokeWeight(40);
    stroke(49, 141, 61);
    line(110, 330, 180, 310);
    strokeWeight(32);
    line(110, 220, 140, 120);
    line(90, 220, 140, 120);
    line(50, 240, 30, 140);
    line(70, 240, 30, 140);

    /**Left Hand */
    noStroke();
    rect(350, 120, 100, 155, 40);
    strokeWeight(40);
    stroke(49, 141, 61);
    line(375, 252, 310, 235);
    strokeWeight(32);
    line(360, 140, 310, 70);
    line(380, 140, 310, 70);
    line(410, 140, 410, 40);
    line(430, 140, 410, 40);

    /**handprints */
    /**Right */
    noStroke();
    fill (255, 255, 255, 55);
    rect(40, 220, 80, 50, 30);
    rect(40, 310, 80, 30, 80);
    ellipse(140, 120, 25);
    ellipse(30, 140, 25);
    ellipse(180, 310, 35);

    /**Left */
    noStroke();
    fill (255, 255, 255, 55);
    rect(360, 130, 80, 50, 30);
    rect(360, 230, 80, 30, 80);
    ellipse (310, 70, 25);
    ellipse (410, 40, 25);
    ellipse (310, 235, 25);
    



}