let clicks = 0;
let starMass = 4000000;
let planet = new Planet([0,0], [0,0], 0, 0, 4, starMass, 0, 0, 0.0007);
let trail = []


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	noStroke();
	fill(255);
	background(0);
	fill(252, 229, 112)
	ellipse(window.width/2,window.height/2,40,40);
	if(clicks>=1){
		planet.update();
		trail.push([planet.xpos, planet.ypos]);
		beginShape();
		for(var i =max(0,trail.length-1200);i<trail.length;i++){
			stroke(255);
			strokeWeight(2);
			noFill();
			vertex(trail[i][0],trail[i][1]);
		}
		endShape();
		fill(173,216,230);
		noStroke();
		planet.display();
	
	}
	if(Math.sqrt((window.width/2-planet.xpos)**2+(window.height/2-planet.ypos)**2)<=32.5){
		noLoop();
	}
}


function mousePressed(){
	clicks++;
	planet.xpos = mouseX;
	planet.ypos = mouseY;
	planet.vel = [2,2];
	planet.acc = [0,0];
	planet.sx = window.width/2;
	planet.sy = window.height/2;
	trail = []
	loop();
}

