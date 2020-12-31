class Plinko {
    constructor(x, y) {
      var options = {
          isStatic:true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
        }
      this.body = Bodies.circle(x, y, 5, options);
      
    this.radius =5;

      
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      
      
      fill("white");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,10,10);
    }
  };