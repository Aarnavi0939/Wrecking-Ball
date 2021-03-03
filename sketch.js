const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,580,1200,20);
  brick1 = new Box(900,510);
  brick2 = new Box(980,510);
  brick3 = new Box(1060,510);
  brick4 = new Box(1140,510);
  brick5 = new Box(900,410);
  brick6 = new Box(980,410);
  brick7 = new Box(1060,410);
  brick8 = new Box(1140,410);
  brick9 = new Box(900,310);
  brick10 = new Box(980,310);
  brick11 = new Box(1060,310);
  brick12 = new Box(1140,310);
  brick13 = new Box(900,210);
  brick14 = new Box(980,210);
  brick15 = new Box(1060,210);
  brick16 = new Box(1140,210);
  ball = new Ball(500,400)
  slingshot = new SlingShot(ball.body,{x:500,y:100});
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  ground.display();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  ball.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}