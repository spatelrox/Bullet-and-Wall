var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)

  wall = createSprite(1200,200,thickness,height/2)

  speed = random(223,321)
  weight = random(30,52)

  bullet = createSprite(200,200,100,50)
  bullet.velocityX = speed
}

function draw() {
  background(255,255,255);  

  if(collided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage > 10){
      wall.shapeColor = "red";
    }

    if(damage < 10){
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function collided(bullet, wall){
  if(bullet.x + bullet.width >= wall.x){
    return true
  }
  return false
}