var bullet;
var speed,weight;
var wall,thickness;
function setup() {
  createCanvas(1600,400);
  bullet =createSprite(100, 120, 5, 10);
 thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed;
 // console.log(damage);
}

function draw() {
  background(255,255,255); 
 
if(hasCollided(bullet,wall))
{
bullet.velocityX=0
var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);

if (damage>10)
{
  wall.shapeColor=color(255,0,0)
}

if(damage<10)
{
  wall.shapecolor=color(0,255,0)
}

}

  drawSprites();
}

function hasCollided(bullet,wall){
bulletrightEdge=bullet.x+bullet.width;
walleftEdge=wall.x;
if(bulletrightEdge>=walleftEdge)
{

  return true
}
return false;




}









