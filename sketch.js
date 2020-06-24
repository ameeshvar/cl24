var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,650,1200,20);
    log1= new Dustbin(700,600,20,100);
	log2= new Dustbin(500,600,20,100);
    log3= new Dustbin(600,650,200,20);
    ball= new Ball(200,300,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  ball.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(ball.body,ball.body.position,{x:305,y:-305});
}


}



