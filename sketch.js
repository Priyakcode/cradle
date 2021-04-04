
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new Ball(210,250,10);
	ball2= new Ball(280,250,10);
	ball3= new Ball(350,250,10);
	ball4= new Ball(420,250,10);
	ball5= new Ball(490,250,10);

	plank= new Plank(350,200,300,30);

	rope1= new Rope(plank.body,ball1.body,-80,0);

	rope2= new Rope(plank.body,ball2.body,-40,0);
	
	rope3= new Rope(plank.body,ball3.body,0,0);

	rope4= new Rope(plank.body,ball4.body,40,0);

	rope5= new Rope(plank.body,ball5.body,80,0);

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,
								{x:-50,y:-45})
	}
}





function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  plank.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}





