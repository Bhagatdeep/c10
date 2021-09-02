var ship,ship_swimming,edges;
var seaImage;
var sea;
function preload(){
ship_swimming = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
ship = createSprite(200,50,20,50)  
ship.addAnimation("swimming", ship_swimming);
//edges = createEdgeSprites()

sea = createSprite(200,180,400,20);
sea.addImage("sea",seaImage);
sea.x=sea.width/2
}

function draw(){
  background("blue");

  console.log(ship.y)
  
  //ship.collide(sea)

  sea.velocityX = -2
  if(sea.x<0){
  sea.x=sea.width/2
  }
drawSprites();  
}
