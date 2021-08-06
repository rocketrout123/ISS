var iss, dragon, hasDocked;
var hasDocked = false;
var background;

function setup() {
  createCanvas(800,400);
  background(background)
  createSprite(400, 200, 50, 50);
  //--------------------------------
  iss = createSprite(330,130);
  iss.addimage(iss);
  iss.scale = 0.25;
  //--------------------------------
  //--------------------------------
  dragon = createSprite(330,130);
  dragon.addimage(dragon);
  dragon.scale = 0.15;
  


}

function preload() {
  iss = loadImage('iss.png')
  dragon = loadImage('spacecraft1.png')
  background = loadImage('spacebg.jpg')
}
function draw() {
  background(255,255,255);  
  drawSprites();
  //---------------------------------
  if(!hasdocked){
    dragon.x = dragon.x + random(-1,1);
    if(keyDown("UP_ARROW")){
      dragon.y = dragon.y -2;
    }
    if(keyDown("DOWN_ARROW")){
      dragon.y = dragon.y +2;
    }
    if(keyDown("RIGHT_ARROW")){
      dragon.x = dragon.x +2;
    }
    if(keyDown("LEFT_ARROW")){
      dragon.x = dragon.x -2;
    }
  }

}