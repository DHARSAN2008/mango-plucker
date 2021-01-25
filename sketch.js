
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,groundObject,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,150,30);
	mango3=new mango(1200,200,35);
	mango4=new mango(1000,270,30);
	mango5=new mango(1000,200,30);
	mango6=new mango(1130,227,32);
	mango7=new mango(1035,80,30);
	mango8=new mango(1085,220,30);
	mango9=new mango(920,227,30);
	mango10=new mango(970,145,33);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(240,420,30,30)

	slingshot = new Slingshot(stone.body,{x:240,y:420});

	
	Engine.run(engine);

}

function draw() {

  background(230);
  text("press space to play second chance",50,50)
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  groundObject.display();
  slingshot.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  

  //text(mouseX+","+mouseY,mouseX,mouseY)

}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){

		Matter.Body.setPosition(stone.body,{x:240,y:420})
		slingshot.attach(stone.body)
	}

}
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

