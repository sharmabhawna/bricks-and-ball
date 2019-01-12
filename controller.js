const getGameScreen = document => document.getElementById("game_screen");

const applyPixel = dimention => dimention + "px";

const movePaddle = function(document, paddle) {
	let { key } = event;
	let toMove = { ArrowLeft: "moveLeft", ArrowRight: "moveRight" };
	paddle[toMove[key]]();
	drawPaddle(document, paddle);
};

const initialize = function() {
	let paddle = new Paddle(100, 15, 5, 5, 1000);
	let paddleDiv = createPaddleDiv(document);
	getGameScreen(document).appendChild(paddleDiv);
	drawPaddle(document, paddle);
	getGameScreen(document).tabIndex = "0";
	getGameScreen(document).focus();
	getGameScreen(document).onkeydown = movePaddle.bind("null", document, paddle);
};

window.onload = initialize;
