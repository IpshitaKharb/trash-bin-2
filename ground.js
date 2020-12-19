class Ground{
    constructor(x,y,w,h){
        var ground_options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(x,y,w,h,ground_options);
        World.add(world,this.ground);
        this.width=w;
        this.height=h;
    }
    display(){
        var pos=this.ground.position;
        var angle=this.ground.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#eb4034");
        rect(0,0,this.width,this.height);
        pop();
    }
}