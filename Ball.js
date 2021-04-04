class Ball{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restituition:0.5,
            friction:0.7,
            density:1.2
        }
        this.body = Bodies.circle(x, y,r,options);
        this.x= x;
        this.y= y;
        this.r=r;
        

        World.add(world, this.body);
    }
    display(){
       var pos =this.body.position;
       push();
       translate(pos.x, pos.y);
       ellipseMode(CENTER);
       fill("purple");
       ellipse(0, 0, this.radius);
       pop();
     }
    }