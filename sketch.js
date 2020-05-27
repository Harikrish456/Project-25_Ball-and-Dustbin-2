
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball;
var dustbin1,dustbin2,dustbin3;
var ground;
var paperObject,dustbinObject;

function preload(){
	paperObject = loadImage("b/paper.png");
}
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ball = new Paper(200,350,70);
	ball.scale = 0.5;
	
	dustbin1 = new Dustbin(1400,640,200,200); 
	

	ground = new Ground(800,700,1600,10);
}

function draw() {
  Engine.update(engine);
 
 
  
  background("blue");
 
 	
  ball.display();
  ground.display();
  dustbin1.display();
  
  keyPressed();
  
}

function keyPressed(){
	
	
	if (keyCode === UP_ARROW){
		
	 paperObject = ball;
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-55});
	}
}


