const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var  bomb, bullet, fighter, melon, line

function setup()
{
    var canvas = createCanvas(1200,800);
    engine=Engine.create();
    world= engine.world;

fighter = new jetplane(0,0);

melon = new mellon(0,0);

bullet = new Bullet(0,0);

 line = new lines(60,800);
}

function draw()  {
    background("white");


    line.display()
    drawSprites();
    
    if(keyDown(UP)) {
        fighter.velocityY=-3;
        fighter.velocityX=0;
    }
    if(keyDown(DOWN)){
        fighter.velocityY=3;
        fighter.velocityX=0;
    }
    if (keyDown(LEFT)){
        bullet.velocityY=0;
        bullet.velocityX=3;
    }
    if (World.framecount%60==0) {
        bomb= new bombs(0,0);
        bomb.velocityX=5;
        bomb.velocityY=0;
        bomb.lifetime=200;
    }
    
    melon.lifetime=100;
}
