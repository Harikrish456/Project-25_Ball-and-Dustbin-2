class Paper {
    constructor(x,y,radius){
        var options ={
            isStatic: false,
            restitution: 0.2,
            friction: 0.5,
            density: 1.2 
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.X = x;
        this.Y = y;
        this.image = loadImage("b/paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
       
        push();
        translate(pos.x,pos.y);
        ellipse(0, 0, radius,radius);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}