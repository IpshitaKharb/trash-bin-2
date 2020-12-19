
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

	//Create the Bodies Here.

	ball1 = new Ball(200,350,30);

  ground  = new Ground(400,650,800,20);

  left=new Dustbin(400,600,20,80);
  right=new Dustbin(550,600,20,80);
  bottom=new Dustbin(475,630,130,20);
  
	}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  background(400);

  ball1.display();

  ground.display();

  //left.display();
  //right.display();
  bottom.display();

  Force();
  
  drawSprites();
  
}

function Force(){
  var message = 0
  console.log(message);
  //Matter.Body.applyForce ( WHICH BODY TO APPLY FORCE , WHAT TO AFFECT AFTER APPLICATION OF FORCE , INTENSITY OF FORCE );
  if (keyWentDown("UP_ARROW")){
    Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x : 10, y : -50});
  }
}