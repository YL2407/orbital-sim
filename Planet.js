class Planet{
    constructor(vel, acc, xpos, ypos, mass, starMass, sx, sy, g){
        this.vel = vel;
        this.acc = acc;
        this.xpos = xpos;
        this.ypos = ypos;
        this.mass = mass;
        this.starMass = starMass;
        this.sx = sx;
        this.sy = sy;
        this.g = g;
    }
    update(starMass,sx,sy){
        this.starMass = starMass;
        this.sx = sx;
        this.sy = sy;
        this.r = Math.sqrt(Math.pow((this.xpos-this.sx),2)+Math.pow((this.ypos-this.sy),2))
        this.normvecx = (this.sx-this.xpos)/this.r;
        this.normvecy = (this.sy-this.ypos)/this.r;
        this.force = (this.g*this.starMass/this.r**2);
        this.acc = [this.normvecx*this.force,this.normvecy*this.force]
        this.vel[0]+=this.acc[0];
        this.vel[1]+=this.acc[1];
        this.xpos+=this.vel[0];
        this.ypos+=this.vel[1];
        stroke(255);
        strokeWeight(3);
        //equation on teams
    }
    addForce(){
        this.r = Math.sqrt(Math.pow((this.xpos-this.sx),2)+Math.pow((this.ypos-this.sy),2))
        this.normvecx = (this.sx-this.xpos)/this.r;
        this.normvecy = (this.sy-this.ypos)/this.r;
        this.force += (this.g*this.starMass/this.r**2);
        this.acc = [this.normvecx*this.force,this.normvecy*this.force]
        this.vel[0]+=this.acc[0];
        this.vel[1]+=this.acc[1];
        this.xpos+=this.vel[0];
        this.ypos+=this.vel[1];
        stroke(255);
        strokeWeight(3);
    }
    display(){
        ellipse(this.xpos,this.ypos,25,25)
    }
}