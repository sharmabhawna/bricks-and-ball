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
	return paddleDiv;
};
