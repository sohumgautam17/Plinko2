class Plinko{
    constructor(x, y){
    var options = {
        restitution : 0.3,
        friction : 0.5,
        isStatic : true,

        }
       
        this.radius=5;
        this.body = Bodies.circle(x,y,this.radius,options);
    
        World.add(world, this.body);
  }
    display(){

    //console.log("hiiii");
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,8);
    pop();
          
     }
    
    };