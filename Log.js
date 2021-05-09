class Log{
    constructor(x,y,height,angle){
        var options={
           
            friction:0.2,
            density:1.1
        }
       this.body=Bodies.rectangle(x,y,30,height,options)
       this.width=30
       this.height=height
       Matter.Body.setAngle(this.body,angle)
       World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("green")
        rect(0,0,this.width,this.height)
        pop()
    }
}