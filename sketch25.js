var ship,ship1;
var sea,sea1;

function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea1=loadImage("sea.png");
  
}

function setup(){
  createCanvas(700,700);
  //creating sea
  sea=createSprite(600,300);
  sea.addAnimation("running",sea1);
  sea.scale=0.5;
  sea.velocityX=-2
  //creating ship

  ship=createSprite(50,200,20,50);
  ship.addAnimation("running",ship1);
  edges=createEdgeSprites();
  //adding scale and position to the ship
  ship.scale=0.25;
  ship.x=90;
  ship.y=300;
}


function draw(){
  background("blue");

  if(keyDown("left")){
   ship.velocityX=-1;
  } 

  if(keyDown("right")){
   ship.velocityX=1;
  }

  if(keyDown("space")){
   ship.velocityX=0;
  }

  if(sea.x<0){
   sea.x=sea.width/2
  }
  
  if (sea.x <  0) {
   sea.x =  sea.width / 2;
  }

  //stop ship to falling down
  ship.collide(edges[3])
 drawSprites();
}