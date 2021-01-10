const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//level two
var block8, block9, block10, block11, block12;
//level three
var block13, block14, block15;
//top
var block16;

function preload(){

}

function setup(){
   var canvas = createCanvas(1200,400);
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);
   ground = new Ground();
   stand1 = new Stand(390,300,250,10);
   stand2 = new Stand(700,200,200,10);

   //level one
   block1 = new Block(300,275,30,40);
   console.log(block1);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   //top
   block16 = new Block(390,155,30,40);
}

function draw(){
   background('white')
   drawSprites();

   //polygon holder with slings
   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);
   
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   fill("pink");
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   fill("turquoise");
   block13.display();
   block14.display();
   block15.display();
   fill("grey");
   block16.display();
   fill("skyblue");
   blocks1.display();
   blocks2.display();
   blocks3.display();
   blocks4.display();
   blocks5.display();
   fill("turquoise");
   blocks6.display();
   blocks7.display();
   blocks8.display();
   fill("pink")
   blocks9.display();
   fill("gold");
   imageMode(CENTER)
   image(polygon_img ,ball.position.x,ball.position.y,40,40);

   slingShot.display();
}
function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}
function mouseReleased(){
   slingShot.fly();
 }