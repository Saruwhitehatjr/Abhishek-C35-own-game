
var player, pname,animals
var lifeShow, bg
var gameState = 0
var tm = -10
var cofl = 5
var iv = 255
var bm = 530
var inp,play;
var flag
function preload(){
 
  weapon = loadImage("img/weapon.png")
  ibg = loadImage("img/ibg.png")
  pb = loadImage("img/play.png")
  ib = loadImage("img/iboard.png")
  licon = loadImage("img/life.png")
}
function setup(){
  createCanvas(1165,530)

    

    inp = createInput('').attribute("placeholder", "Enter Your Name");
   // inp.position(width/2-50,height/2+100);
    inp.size(100);
animals = new Group();

weaponShow = createSprite(55,55)
weaponShow.addImage(weapon)
weaponShow.scale=0.1
weaponShow.visible=false

player = createSprite(width/2-400,height/2);
player.debug=true;
/*play =createSprite(width/2,height/2)
play.addImage(pb)
play.scale = 0.2*/

button= createButton("Start ")

}

function draw(){
  if(bg)
  background(bg)

  if(gameState===0){


tint(255,iv)
image(ibg,0,0,width,height)
iv = iv-5
if(iv<=0){
  if(tm<=150){
    tm +=5
  }
  if(bm>=height/2-50){
    bm -=5
  }
}

    bg = loadImage("img/bg.png")
  
    pname= inp.value();
  
   
      textFont('Bold')
      textSize(50)
      fill("yellow")
      stroke("red")
      //text("Man vs Wild",width/2-150,height/2)

      text("Man vs Wild",width/2-150,tm)
      inp.position(width/2-50,bm);
      button.position(width/2-50,bm+100);
     
 
/*if(mousePressedOver(play)||keyDown(ENTER)){
  gameState=1
  }*/
button.mousePressed(()=>{
  gameState=1
})
     }
  
 if(gameState===1){

  //bg = loadImage("img/bg.png")
 // play.visible=false;
 // board.visible=false
 inp.hide()
 button.hide()
  textFont('italic')
  textSize(20)
  fill("yellow")
  stroke("red")
  text(pname,120,25)
  animalcome()
weaponShow.visible=true;
createIcon()
for (var i = 0; i < animals.length; i++) {
  if (player.isTouching(animals.get(i))) {
    animals.get(i).destroy();
    cofl=cofl-1
  }
  console.log(cofl)
}


if(cofl===0)
{gameState=2}
}

if(gameState===2){
animals.destroyEach()
player.visible = false
weapon.visible=false
textFont('italic')
textSize(100)
fill("yellow")
stroke("red")
text("THE END",width/2,height/2)
}
    drawSprites();
}

function animalcome() {
  if(frameCount % 20 === 0) {
    var animal = createSprite(width+50,random(height/2-50,height/2+50),20,30);
    animal.debug=true
    animal.setCollider('circle',0,0,45)
    // obstacle.debug = true
  animal.shapeColor="white"
   animal.velocityX = -12
    
    //generate random obstacles
  /*  var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;
    }*/
    
    //assign scale and lifetime to the obstacle           
   
    animal.lifetime = 300;
   animal.depth = player.depth;
    
    //add each obstacle to the group
   animals.add(animal);
    
  }
}
function createIcon()
{
  for(var i=120;i<=500;i=i+20)
  {
  life = createSprite(i,55)
  life.addImage(licon)
  life.scale=0.02
 life.lifetime=20;
  }
}
