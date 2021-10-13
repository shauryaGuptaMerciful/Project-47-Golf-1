class Hole {
    constructor(x,y,width,height) {
      var options = {
        'density': 0.1,
        isStatic: true
    }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/golf1.png");
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
     //rectMode(CENTER);
     //fill("brown");
     //rect(pos.x, pos.y, this.width, this.height);
 
      
    }
  };
