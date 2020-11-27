
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(370,80,300,30);
	bob1 = new Bob(240,370,60);
	bob2 = new Bob(300,370,60);
	bob3 = new Bob(360,370,60);
	bob4 = new Bob(420,370,60);
	bob5 = new Bob(480,370,60);
	rope = new Line(bob1.body,roof.body,-(2),0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



