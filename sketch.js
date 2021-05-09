const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var engine,world
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
 
 
  box1=new Box(400,380,50,50)
  box2=new Box(500,380,50,50)
  ground1=new Ground(400,390,800,20)
  pig= new Pig(450,380)
 log= new Log(100,200,100,PI/2)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  box1.display();
  box2.display();
  ground1.display();
  pig.display();
  log.display();
}