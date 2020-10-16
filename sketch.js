
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var grounds,world,engine;
var ball; 

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic : true
  }
  grounds = Bodies.rectangle(200,350,400,5,ground_options);
  World.add(world,grounds);

  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(grounds.position.x,grounds.position.y,400,10); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}