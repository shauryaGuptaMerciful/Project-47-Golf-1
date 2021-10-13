class Ball {
  constructor(x,y,radius) {
    var options = {
        'restitution': 0.3,
        'friction': 0.5,
        'density': 1
    }
    this.body = Bodies.circle(x,y,radius ,options);
    this.radius = radius;
    this.image = loadImage("sprites/ball.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //ellipseMode(CENTER);
    //fill("white");
   // ellipse(pos.x, pos.y, this.radius);
   imageMode(CENTER);
   image(this.image, pos.x, pos.y, this.radius, this.radius);
  }
};