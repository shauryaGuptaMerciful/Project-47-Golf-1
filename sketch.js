const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var club;
var ground2, ground3, ground4;
var hole;
var fGround;

function preload() {
    bgImg = loadImage("sprites/background.jpg")
}

function setup(){
    var canvas = createCanvas(1700,900);
    engine = Engine.create();
    world = engine.world;

    fill("brown")
    fGround = createSprite(1620, 850, 130, 30)
    
    ground = new Ground(500, 850,1700,30);
    ground2 = new Ground(850, 20,1700,10);
    ground3 = new Ground(10, 450,10,900);
    ground4 = new Ground(1690, 450,10,900);

    hole = new Hole(1560, 690, 300,300);
    ball = new Ball(200, 200, 30);
    club = new Club(1500, 800, 60, 270);
    
}

function draw(){
    
    Engine.update(engine);
    //background(bgImg);
    background("white");


    ground.display();  
    ground2.display();   
    ground3.display();   
    ground4.display();   

    hole.display();
    ball.display();
    club.display();

    if(ball.x>1000 && ball.y<600){
        fill("red");
        text("You Win", 200, 200)
        console.log("hello");
    }
    
    drawSprites();
}

