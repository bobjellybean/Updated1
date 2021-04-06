class baseclass {
    constructor (x,y,width, height, angle) {
        var options = {
            'restitution':0.4,
            'density':0.8,
            'friction':0
        }
        this.body= Bodies.rectangle(0,0,width,height, options);
        this.width=width;
        this.height=height;
        this.images=loadImage("Images/bomb2.png, bullet.png, fighter.png, melon.png");

       World.add(world, engine);
    }
    display() {
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y );
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
    }

}