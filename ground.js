class Ground extends BaseClass {
    constructor(x,y,width,height){
        super(x,y,width,height);
    }
    display(){
        var pos = this.body.position;
        fill(255);
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width,this.height);
        pop();
    }
};