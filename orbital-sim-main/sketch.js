let clicks = 0;
let starMass = 4000000;
let planet = new Planet([0,0], [0,0], 0, 0, 4, starMass, 0, 0, 0.0007);
let planet1 = new Planet([0,0], [0,0], 0, 0, 400000, starMass, 0, 0, 0.007)
let planet2 = new Planet([0,0], [0,0], 0, 0, 400000, starMass, 0, 0, 0.007)
let trail = [];
let trail1 = [];
let trail2 = [];
let planets = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

/*function draw() {
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
}*/


function draw(){
	noStroke();
	background(0);
	fill(255);
	if(clicks>=2){
		planet1.update(planet2.mass, planet2.xpos, planet2.ypos);
		trail1.push([planet1.xpos, planet1.ypos]);
		planet2.update(planet1.mass, planet1.xpos, planet1.ypos);
		trail2.push([planet2.xpos, planet2.ypos]);
		beginShape();
		for(var i = max(0, trail1.length-600); i<trail1.length; i++){
			stroke(255);
			strokeWeight(2);
			noFill();
			vertex(trail1[i][0], trail1[i][1]);
		}
		endShape();
		beginShape();
		for(var i = max(0, trail2.length-600); i<trail2.length; i++){
			stroke(255);
			strokeWeight(2);
			noFill();
			vertex(trail2[i][0], trail2[i][1]);
		}
		endShape();
		fill(255);
		planet1.display();
		planet2.display();
	}
}

function mousePressed(){
	clicks++;
	if(clicks%2==1){
		planet1.xpos = mouseX;
		planet1.ypos = mouseY;
		planet1.vel = [1,1];
		planet1.acc = [0,0];
	}
	else if(clicks%2==0){
		planet2.xpos = mouseX;
		planet2.ypos = mouseY;
		planet2.vel = [-1,-1];
		planet2.acc = [0,0];
	}
}

/*function mousePressed(){
	clicks++;
	planet.xpos = mouseX;
	planet.ypos = mouseY;
	planet.vel = [2,2];
	planet.acc = [0,0];
	planet.sx = window.width/2;
	planet.sy = window.height/2;
	trail = []
	loop();
}*/

