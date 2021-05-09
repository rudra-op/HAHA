class Pig{
    constructor(x,y){
        var options={
            restitution:1, 
            friction:0.2,
            density:1.1
        }
       this.body=Bodies.rectangle(x,y,30,30,options)
       World.add(world,this.body)
       this.width=30
       this.height=30
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("yellow")
        rect(0,0,this.width,this.height)
        pop()
    }
}