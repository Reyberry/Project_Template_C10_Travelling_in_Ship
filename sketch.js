var seaImg;
var shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png");
}
function setup(){
 createCanvas (600,600);
 sea=createSprite(50,50);
 sea.addImage("sea",seaImg);
 //sea.x=sea.width/2;
 ship = createSprite(200,200);
 ship.addAnimation("running",shipImg1);
 ship.scale=0.25;
 ship.x=100;
 
  drawSprites();
}

function draw(){
 sea.velocityX = -2;
 console.log(sea.x);
 if (sea.x < 0){
 sea.x = sea.width/2;
 }
}