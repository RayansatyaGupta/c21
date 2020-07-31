var rect1,rect2
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100, 200, 50, 50);
  rect2 = createSprite(600,200,50,50);
  //rect1.velocityX = 4;
  rect2.velocityX = -4;
  rect1.debug = true;
  rect2.debug = true;
  rect3 = createSprite(100,200,100,100);
  rect3.velocityX = 3;
  rect3.debug = true;
}


function draw() {
  background(255,255,255);  
 if (isTouching(rect2,rect3)){
   rect2.shapeColor = "red";
   rect3.shapeColor = "blue";
   
 }
 else{
   rect2.shapeColor = "green";
   rect3.shapeColor = "green";
 }
    
  //bounceOff(rect3,rect2,);
  drawSprites();

}



