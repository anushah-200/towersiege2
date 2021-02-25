const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;


    ground1= new Ground(470,250,210,10);
    ground2 = new Ground(200,430, 250, 10);
    //tower1 level1
    box1 = new Box(980,320,70,70);
    box2 = new Box(980,320,70,70);
    box3 = new Box(810, 350,10,10);
    box4 = new Box(810,260,300,10 );
    box5 = new Box(700,240,70,70);
    box6 = new Box(920,240,70,70);
    box7 = new Box(810, 220,30,10);
    //tower 1level 2
    box8 = new Box(810, 220,30,10);   
    box9 = new Box(810, 220,30,10);
    box10 = new Box(810, 220,30,10);
    box11 = new Box(810, 220,30,10);
    box12 = new Box(810, 220,30,10);
   //tower1 level3
   box13 = new Box(810, 220,30,10);
   box14 = new Box(810, 220,30,10);
   box15 = new Box(810, 220,30,10);
   // tower1 level4
   box16 = new Box(810, 220,30,10);
   //tower2 level 1
   box17 = new Box(810, 220,30,10);
   box18 = new Box(810, 220,30,10);
   box19 = new Box(810, 220,30,10);
   box20 = new Box(810, 220,30,10);
   box21 = new Box(810, 220,30,10);
   //tower2 level 2
   box22 = new Box(810, 220,30,10);
   box23 = new Box(810, 220,30,10);
   box24 = new Box(810, 220,30,10);
   //tower2 level3
   
   box25 = new Box(810, 220,30,10);
    polygon=new Polygon(450,20,50,50)
    
    slingshot = new SlingShot(polygon.body,{x:700, y:100});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    polygon.display ()  
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
