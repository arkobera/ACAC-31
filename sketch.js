
var bg, backgroundImg;
var iron_man, pc;
var ground, ground;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  pc=loadImage("images/iron.png")
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);

  iron_man = createSprite(200,200);
  iron_man.addImage(pc);
  iron_man.scale =0.3;

  ground=createSprite(200,585,400,10);
  ground.visible=false;

}

function draw() {
  if (keyDown("space")){
    iron_man.velocityY=-16;
  }
 iron_man.velocityY=iron_man.velocityY+0.5;

 iron_man.collide(ground);
    
    drawSprites();
   
}

