const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var hierro;
var edges;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(150, 590, 100)
    stone = new Stone(250,590)
    hierro = new Hierro(350,580)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
   

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    hierro.display();

    
 
}