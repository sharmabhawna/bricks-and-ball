const getWall = document => document.getElementById("wall_1");
const getScreen = document => document.getElementById("screen");

const drawWall = function(document, Wall) {
	let wallDiv = document.getElementById("wall_1");
	wallDiv.style.width = applyPixel(Wall.width);
	wallDiv.style.height = applyPixel(Wall.height);
	wallDiv.style.bottom = applyPixel(Wall.bottom);
	wallDiv.style.left = applyPixel(Wall.left);
};

const createWall = function(document) {
	let wallDiv = document.createElement("div");
	wallDiv.id = "wall_1";
	wallDiv.className = "wall";
	getScreen(document).appendChild(wallDiv);
};

const drawPedal = function(document, Pedal) {
	let pedalDiv = document.getElementById("pedal_1");
	pedalDiv.style.width = applyPixel(Pedal.width);
	pedalDiv.style.height = applyPixel(Pedal.height);
	pedalDiv.style.bottom = applyPixel(Pedal.bottom);
	pedalDiv.style.left = applyPixel(Pedal.left);
};

const createPedalDiv = function(document) {
	let pedalDiv = document.createElement("div");
	pedalDiv.id = "pedal_1";
	pedalDiv.className = "pedal";
	getWall(document).appendChild(pedalDiv);
};

const drawBall = function(document, Ball) {
	let ballDiv = document.getElementById("ball_1");
	ballDiv.style.width = applyPixel(Ball.radius);
	ballDiv.style.height = applyPixel(Ball.radius);
	ballDiv.style.bottom = applyPixel(Ball.bottom);
	ballDiv.style.left = applyPixel(Ball.left);
	ballDiv.style.velocity = applyPixel(Ball.velocity);
};

const createBallDiv = function(document) {
	let ballDiv = document.createElement("div");
	ballDiv.id = "ball_1";
	ballDiv.className = "ball";
	getWall(document).appendChild(ballDiv);
};
