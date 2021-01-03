var bullets,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
bullets = createSprite(50, 200, 50, 50);
wall = createSprite(1500,200,60,height/2)

}

function draw() {
  background("black"); 
  speed = (50,90);
  weight = (400,1500); 

  bullets.velocityX= speed;

  if(wall.x-bullets.x < bullets.width+wall.width/2+ wall.width+bullets.width/2){
    bullets.velocityX=0;
    vardeformation=0.5*weight*speed*speed/22509;
    if(deformation>180);
    {
      bullets.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      bullets.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullets.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}