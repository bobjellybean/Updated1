class lines {
    constructor (x,y) {
        var options = {
            isStatic:true
        }
    this.body = Bodies.rectangle(0,0,width,height, options);
    this.width= width;
    this.height=height;
    
    World.add(world, engine);
    }

    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y );
        pop();
    }
}