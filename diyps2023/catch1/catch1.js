var ballx =300;
var bally =300;
var ballsize=40;
var score =0;

function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(40);

} //end set up


function draw() {
background(220);
levelOne();

text(("Score:  " + score), width/2, 40);
}  // end draw


function levelOne() {
  text("level 1", width/2, height -20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score = score +1;
    
  }
  
  
  ellipse(ballx,bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
}  //end of level 1)
