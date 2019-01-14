const isBetween = function(value, range) {
	let { leftLimit, rightLimit } = range;
	return value >= leftLimit && value <= rightLimit;
};

class Game {
	constructor(wall, pedal, ball, status) {
		this.wall = wall;
		this.pedal = pedal;
		this.ball = ball;
		this.status = status;
	}

	bouncePedal() {
		const pedalRight = this.pedal.left + this.pedal.width;
		if (this.pedal.left < 0) {
			this.pedal.left = 0;
		}

		if (pedalRight > this.wall.width) {
			this.pedal.left = wallRightEdge;
		}
	}

	bounceBall() {
		const ballRight = this.ball.left + this.ball.radius;
		const ballTop = this.ball.bottom + this.ball.radius;

		const pedalRange = {
			leftLimit: this.pedal.left,
			rightLimit: this.pedal.left + this.pedal.width
		};
		const isOnPedal = this.ball.bottom == this.pedal.bottom + this.pedal.height;
		const hasCollisionWithPedal =
			isBetween(this.ball.left, pedalRange) && isOnPedal;

		this.status = "continue";

		if (this.ball.left <= 0) {
			this.ball.velocity.invertHorizontalComponent();
		}

		if (ballRight >= this.wall.width) {
			this.ball.velocity.invertHorizontalComponent();
		}

		if (ballTop >= this.wall.height) {
			this.ball.velocity.invertVerticalComponent();
		}

		if (this.ball.bottom <= 0) {
			this.status = "stop";
		}

		if (hasCollisionWithPedal) {
			this.ball.velocity.invertVerticalComponent();
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

	invertHorizontalComponent() {
		this.x = -1 * this.x;
	}

	invertVerticalComponent() {
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

	moveAround() {
		this.left += this.velocity.x;
		this.bottom += this.velocity.y;
	}
}
