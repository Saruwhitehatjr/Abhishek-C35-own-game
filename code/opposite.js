class Opposite{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image1 = loadImage("assest/o1.png");
      this.image2 = loadImage("assest/o2.png");
      this.image3 = loadImage("assest/o3.png"); 
      this.image4 = loadImage("assest/whitecar.png");
      this.image5 = loadImage("assest/bluecar.png");
      this.image6 = loadImage("assest/redcar.png");
      Matter.Body.setVelocity(this.body, {x:0,y:-1})
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image1, 0, 0, this.width, this.height);
      pop();
    }

display2(){
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image2, 0, 0, 50,100);
pop();
}
display3(){
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image3, 0, 0, this.width, this.height);
pop();
}
display4(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image4, 0, 0, this.width, this.height);
  pop();
}
display5(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image5, 0, 0, this.width, this.height);
  pop();
}
display6(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image6, 0, 0, this.width, this.height);
  pop();
}
}