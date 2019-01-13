const applyPixel = dimention => dimention + "px";

const movePedal = function(document, game) {
	let { key } = event;
	let toMove = { ArrowLeft: "moveLeft", ArrowRight: "moveRight" };
	game.pedal[toMove[key]]();
	game.bouncePedal();
	drawPedal(document, game.pedal);
};

const generateGameEntities = function(document, wall, pedal, ball) {
	createWall(document);
	createPedalDiv(document);
	createBallDiv(document);
	drawWall(document, wall);
	drawPedal(document, pedal);
	drawBall(document, ball);
};

const initialize = function() {
	let wall = new Wall(1000, 650, 0, 200);
	let pedal = new Pedal(100, 15, 5, 10, 50);
	let velocity = new Velocity(10, 10);
	let ball = new Ball(50, 20, 25, velocity);
	let game = new Game(wall, pedal, ball);
	generateGameEntities(document, wall, pedal, ball);
	getWall(document).tabIndex = "0";
	getWall(document).focus();
	getWall(document).onkeydown = movePedal.bind("null", document, game);
	setInterval(() => {
		game.ball.moveBall();
		drawBall(document, ball);
		game.bounceBall();
		if (game.status == "stop") {
			endGame(document);
		}
	}, 100);
};

const endGame = function(document) {
	document.write("Game Over");
};

window.onload = initialize;
