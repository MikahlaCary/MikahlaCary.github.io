var img,img2back, img3, img4, img5, img6, img9;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var restartClicked = false;
var restartBtn;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://MikahlaCary.github.io/netart/camell.jpg');
  img2back = loadImage('https://MikahlaCary.github.io/background.jpg')
  img3 = loadImage('https://MikahlaCary.github.io/goombahcutout.png')
  img4 = loadImage('https://MikahlaCary.github.io/westsidesunset.jpg')
  img5 = loadImage('https://MikahlaCary.github.io/ceramicfridgecutout.png')
  img9 = loadImage('https://MikahlaCary.github.io/octodreams-removebg-preview.png')
  img6 = loadImage('https://MikahlaCary.github.io/grab.jpg')
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  restartBtn = createButton('Restart'); // create the button once in setup()
  restartBtn.hide(); // hide the button initially
  restartBtn.mousePressed(reset);
  restartBtn.id("restartBtn");
} // end setup
 

function draw() {
  background(220);
  //this is where we put pic
  image(img2back, 0, 0, 600, 600);
  if (gameState=="L1"){
  restartBtn.show();
  levelOne();
  } 
  if (gameState=="L2"){
    restartBtn.show();
    levelTwo(); 
  }
  if (gameState=="L3"){
   restartBtn.show();
   levelThree(); 
  }
  if (gameState=="L4"){
  restartBtn.show();
  levelFour(); 
  }
  if (gameState=="L5"){
  restartBtn.show();
  levelFive(); 
  }
    if (gameState=="L6"){
  restartBtn.show();
  levelSix();
  }
  
  

} // end draw


function levelOne(){
  text(("Score: " + score), width/2, 40);
  text("Level 1-Grab the Fridge", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
 console.log("Level One Complete!")
  }
  
  image( img5, ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level one/////////////////////////////////////////

function levelTwo(){
  background(220);
  //this is where we put pic
  image(img2back, 0, 0, 600, 600);
  text(("Score: " + score), width/2, 40);
  text("Level 2 Catch the Goombah", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";
console.log("Level Two Complete!")
  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img3, ballx, bally, ballSize, ballSize);
} // end level two///////////////////////////////////////////////



function levelThree(){
    background(200, 100, 2000);
      //this is where we put pic
  image(img2back, 0, 0, 600, 600);
  text(("Score: " + score), width/2, 40);
  text("Level 3-Pick Up The Flyer", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize+2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize +1;
    score= score +1;
  }
  if(score>15){
// level 4
gameState = "L4";
console.log("Level  Complete!")
  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img4, ballx, bally, ballSize, ballSize);
} // end level three//////////////////////////////////////////////////




function levelFour(){
  background(220);
  //this is where we put pic
  image(img2back, 0, 0, 600, 600);
  text(("Score: " + score), width/2, 40);
  text("Level 4 Pet the Camell", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>20){
// lvel 4
   gameState = "L5";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img, ballx, bally, ballSize, ballSize);
} // end level four///////////////////////////////////////////////


function levelFive(){
  background(220);
  //this is where we put pic
  image(img2back, 0, 0, 600, 600);
  text(("Score: " + score), width/2, 40);
  text("Level 5 Catch the Octopus", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  } //end if
  if(score>25){
// lvel 5
   gameState = ("L6");

  }
  
  
//  line(ballx, bally, mouseX, mouseY);
  image(img9, ballx, bally, ballSize, ballSize);
} // end level five///////////////////////////////////////////////

function levelSix(){
  background(220);
  //this is where we put pic
  image(img2back, 0, 0, 600, 600);
  
  textSize(16);
  text("You grabbed, picked up, pet, and caught All the things! You Won The Game", width/2, 40);
  //console.log("You WIN")
   // alert("You Win")
    if (score>=25){
       gameState= "L6";
}  
  } // end if
  
  function reset(){
    score = 0;
    gameState = "L1";
  }

//... (6 lines left)
