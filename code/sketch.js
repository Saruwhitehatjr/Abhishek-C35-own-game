const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = PLAY;
var PLAY = 1
var END = 0
var time = 3
var o1 = []
function preload(){

  bgi = loadImage("assest/bg.jpg")
 
bgm = loadSound("assest/bgm.mp3")

}

function setup() {
  createCanvas(1168,552);
  engine = Engine.create();
  world = engine.world;
  bg = createSprite(width/2+100,height/2)
  bg.velocityY = 5
 player = new Player(200,200,50,1000)
 sm = new SM(200,350)
steering = new Steering(200,420)
 speed = new SB(800,450)
 brake = new SB(1000,500)
 player = new Player(500,500,30,50)

 meter = new Meter({x:88,y:434},{x:200,y:420})
// bgm.play()
}

function draw() {
     Engine.update(engine);
    
     if(frameCount%100 === 0 ){
      bg.velocityY = bg.velocityY+5
      
     }
   if (bg.y > height){
      bg.y = bg.height;
    }
    if(frameCount%100 === 0){
o1.push(new Opposite(random(500,560),30,50,100))  

    }

   for(var i=0;i<o1.length;i++)
    {
   // Matter.Body.applyForce(o1[i].body,{x:o1[i].body.position.x,y:o1[i].body.position.y},{x:0,y:5})
   // Matter.Body.setVelocity(o1[i].body, {x:0,y:-1})
    }
    
  
  drawSprites();
  
  imageMode(CENTER)
image(bgi,bg.x,bg.y,width+1000,height-height)
// bg.addImage(bgi)
sm.display()
speed.display()
meter.display()
steering.display()
brake.display2()
player.display3()
for(var i = 0;i<o1.length;i++){

  o1[i].display2()
}

fill("red")
textFont("italic")
stroke("black")
textSize(25)

text("100% canvas zoom is best for this game thanks!",250,20)
  text(time+"/3 Lap",30,70)
  text("It's highway",30,100)
  text("In Forest mode",30,130)
  text("Enjoy!",30,160)
  text("W",190,270)
  text("D",363,430)
  text("A",20,430)
  text("S",988,500)
  textSize(50)
  text("🠕",785,450)
  text(mouseX+","+mouseY,500,250)
  text(frameCount-1,1000,250)
}

function keyPressed(){
if(keyCode === 68){
  Matter.Body.applyForce(player.body,{x:player.body.position.x,y:player.body.position.y},{x:7,y:0})
Matter.Body.setAngle(steering.body,50)

//Matter.Body.setAngle(player.body,25)
}
if(keyCode === 65)
{Matter.Body.setAngle(steering.body,-50)
  Matter.Body.setPosition(player.body,{x:500,y:500})
  Matter.Body.setAngle(player.body,-25)}
if(keyCode === 87)
{Matter.Body.setAngle(steering.body,0)
  Matter.Body.setAngle(player.body,0)}



  if(keyCode === 83)
  {Matter.Body.setPosition(brake.body,{x:1000,y:550})
  Matter.Body.setPosition(speed.body,{x:800,y:450})}
  if(keyCode === 70)
  {Matter.Body.setPosition(brake.body,{x:1000,y:500})
  Matter.Body.setPosition(speed.body,{x:800,y:500})
  }
 

}


