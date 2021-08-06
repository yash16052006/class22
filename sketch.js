const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.4,
    
  }
  
  
  ball = Bodies.circle(200,50,20,ball_options);
  World.add(world,ball);
console.log(ball)
  ball2 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball2);

  chain1 = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    length:100,
    stiffness:0.1
  })
  World.add(world,chain1);
      
  chain2= Matter.Constraint.create({
    bodyA:ball,
    bodyB:ball2,
    length:150,
    stiffness:0.3
  })
  World.add(world,chain2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill("red");
  
  ellipse(ball.position.x,ball.position.y,20);
  fill("blue");
  ellipse(ball2.position.x,ball2.position.y,20);


  push();
  strokeWeight(2);
  stroke('lightgreen');
  
  line(chain1.pointA.x,chain1.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  pop();
  
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0.3});
    }
}

