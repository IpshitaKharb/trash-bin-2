class Ball{
    constructor(x,y,r){
        var ball_options={
            restitution: 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.ball=Bodies.circle(x,y,r/2,ball_options);
        World.add(world,this.ball);
        this.radius=r;
        this.image=loadImage("paper.png");
    }
    display(){
        
        var pos=this.ball.position;
        var angle=this.ball.angle;
        ellipseMode(CENTER);
        imageMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        image(this.image,0,0,50,50)
        pop();
    }
}