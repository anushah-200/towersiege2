class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("aredbox.png");
        World.add(world, this.body);
        this.visibility=255
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        if(this.body.speed<3)
        image(this.image, 0, 0, this.width, this.height);
        else
        World.remove(world,this.body)
        this.visibility=this.visibility-5
         tint(255,this.visibility)
         image(this.image, 0, 0, this.width, this.height);
        
        pop();
      }
}