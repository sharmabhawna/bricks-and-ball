const applyPixel = dimention => dimention + "px";

const movePaddle = function(document, paddle) {
	let { key } = event;
	let toMove = { ArrowLeft: "moveLeft", ArrowRight: "moveRight" };
	paddle[toMove[key]]();
	drawPaddle(document, paddle);
};

const generateGameEntities = function(document, paddle, ball) {
	createPaddleDiv(document);
	createBallDiv(document);
	drawPaddle(document, paddle);
	drawBall(document, ball);
};

const initialize = function() {
	let paddle = new Paddle(100, 15, 5, 5, 1000);
	let velocity = new Velocity(10, 10);
	let ball = new Ball(50, 20, 25, velocity);
	generateGameEntities(document, paddle, ball);
	getGameScreen(document).tabIndex = "0";
	getGameScreen(document).focus();
	getGameScreen(document).onkeydown = movePaddle.bind("null", document, paddle);
	setInterval(() => {
		ball.moveBall();
		drawBall(document, ball);
	}, 50);
};

window.onload = initialize;
