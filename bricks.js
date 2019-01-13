class Game {
	constructor(wall, pedal, ball, status) {
		this.wall = wall;
		this.pedal = pedal;
		this.ball = ball;
		this.status = status;
	}

	bouncePedal() {
		let wallLeftEdge = 0;
		let wallRightEdge = this.wall.width - this.pedal.width;

		if (this.pedal.left <= wallLeftEdge) {
			this.pedal.left = wallLeftEdge;
		}

		if (this.pedal.left >= wallRightEdge) {
			this.pedal.left = wallRightEdge;
		}
	}

	bounceBall() {
		let wallLeftEdge = 0;
		let wallRightEdge = this.wall.width - this.ball.radius;
		let wallTopEdge = this.wall.height - this.ball.radius;
		let wallBottomEdge = 0;
		this.status = "continue";

		if (this.ball.bottom <= wallBottomEdge) {
			this.status = "stop";
		}

		if (this.ball.left <= wallLeftEdge) {
			this.ball.velocity.inverseHorizontalComponent();
		}

		if (this.ball.left >= wallRightEdge) {
			this.ball.velocity.inverseHorizontalComponent();
		}

		if (this.ball.bottom >= wallTopEdge) {
			this.ball.velocity.inverseVerticalComponent();
		}
	}
}

class Wall {
	constructor(width, height, bottom, left) {
		this.width = width;
		this.height = height;
		this.bottom = bottom;
		this.left = left;
	}
}

class Pedal {
	constructor(width, height, bottom, left, displacement) {
		this.width = width;
		this.height = height;
		this.bottom = bottom;
		this.left = left;
		this.displacement = displacement;
	}

	moveLeft() {
		this.left = this.left - this.displacement;
	}

	moveRight() {
		this.left = this.left + this.displacement;
	}
}

class Velocity {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	inverseHorizontalComponent() {
		this.x = -1 * this.x;
	}

	inverseVerticalComponent() {
		this.y = -1 * this.y;
	}
}

class Ball {
	constructor(radius, bottom, left, velocity) {
		this.radius = radius;
		this.bottom = bottom;
		this.left = left;
		this.velocity = velocity;
	}

	moveBall() {
		this.left += this.velocity.x;
		this.bottom += this.velocity.y;
	}
}
