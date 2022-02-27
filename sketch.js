
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);
    var ball_options={
		isStatic:false,
		restitutuion:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	
  //Matter.Bodies.circle(200,200,20,ball_options);
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  ellipseMode(RADIUS);
  groundObj=new ground(width/2,790,width,20);
  leftSide=new ground(1100,720,20,120);
  rightSide=new ground(900,720,20,120);
  Engine.run(engine);
}


function draw() { 
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.show();
  leftSide.show();
  rightSide.show();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode == UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:75,y:-85});
  }
}




