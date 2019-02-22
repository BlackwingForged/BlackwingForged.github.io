let ballX;
let ballY;
let dx = 3;
let dy = 2;
let goalX;
let goalY;
let mario;
let isGoal = false;

function preload(){
	
}

function setup(){
	createCanvas(400, 400);
	ballX = 25;
	ballY = 350;
	goalX = 350;
	goalY = 300;
	
	mario = loadImage('assets/mario.png');
}

function draw(){
	background(100);
	//fill(255);
	//ellipse(ballX, ballY, 40, 40);
	image(mario, ballX, ballY);
	fill(0, 255, 0);
	noStroke();
	rect(goalX, goalY, 25, 100);
	if(((ballX + 20) >= goalX && (ballX - 20) <= (goalX + 25)) && (ballY + 20) >= goalY){
		isGoal = true;
	}
	else{
		isGoal = false;
	}
	if(isGoal)
		text("Goal", 25, 25);

	if(keyIsPressed){
		if(keyCode == RIGHT_ARROW){
			ballX += dx;
		}
		if(keyCode == LEFT_ARROW){
			ballX -= dx;
		}
		if(keyCode == UP_ARROW){
			ballY -= dy;
		}
		if(keyCode == DOWN_ARROW){
			ballY += dy;
		}
	}
}