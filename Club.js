class Club {
    constructor(x,y,width,height) {
      var options = {
        'restitution': 0.4,
        'friction': 1,
        'density': 1.5
    }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/club.png");
      World.add(world, this.body);
    }

    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var pos =this.body.position;
      //imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
     //rectMode(CENTER);
     //fill("brown");
     //rect(pos.x, pos.y, this.width, this.height);
 
      
    }
  };
