var car , wall;
var speed,weight;




function setup() {
  createCanvas(1600,400);
 car = createSprite(200, 200, 50, 50);
 
 wall = createSprite(1200,200,60,300);
 

car.velocityX=5;

speed=random(40,90);
weight=random(400,1500);

car.velocityX=speed;
}

function draw() {
  background("black");  

if (wall.x-car.x<(car.width+wall.width/2)){
  
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180){
    car.shapeColor="red";
    wall.shapeColor="blue";
  }
if(deformation < 180  && deformation >100){
  car.shapeColor="orange";
  wall.shapeColor="blue";
}
if (deformation<100){
car.shapeColor="green";
wall.shapeColor="blue";


}
 }

  drawSprites();
}