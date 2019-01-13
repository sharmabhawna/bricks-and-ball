const getGameScreen = document => document.getElementById("game_screen");

const drawPaddle = function(document, Paddle) {
	let paddleDiv = document.getElementById("paddle_1");
	paddleDiv.style.width = applyPixel(Paddle.width);
	paddleDiv.style.height = applyPixel(Paddle.height);
	paddleDiv.style.bottom = applyPixel(Paddle.bottom);
	paddleDiv.style.left = applyPixel(Paddle.left);
};

const createPaddleDiv = function(document) {
	let paddleDiv = document.createElement("div");
	paddleDiv.id = "paddle_1";
	paddleDiv.className = "paddle";
	getGameScreen(document).appendChild(paddleDiv);
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
	getGameScreen(document).appendChild(ballDiv);
};
