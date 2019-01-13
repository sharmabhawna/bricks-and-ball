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
		const wallLeftEdge = 0;
		const wallRightEdge = this.wall.width - this.ball.radius;
		const wallTopEdge = this.wall.height - this.ball.radius;
		const wallBottomEdge = 0;
		const pedalRange = {
			leftLimit: this.pedal.left,
			rightLimit: this.pedal.left + this.pedal.width
		};

		const isOnPedal = this.ball.bottom == this.pedal.bottom + this.pedal.height;

		this.status = "continue";

		const hasCollisionWithBottomEdge = this.ball.bottom <= wallBottomEdge;
		const hasCollisionWithLeftEdge = this.ball.left <= wallLeftEdge;
		const hasCollisionWithRightEdge = this.ball.left >= wallRightEdge;
		const hasCollisionWithTopEdge = this.ball.bottom >= wallTopEdge;
		const hasCollisionWithPedal =
			isBetween(this.ball.left, pedalRange) && isOnPedal;

		if (hasCollisionWithBottomEdge) {
			this.status = "stop";
		}

		if (hasCollisionWithLeftEdge) {
			this.ball.velocity.inverseHorizontalComponent();
		}

		if (hasCollisionWithRightEdge) {
			this.ball.velocity.inverseHorizontalComponent();
		}

		if (hasCollisionWithTopEdge) {
			this.ball.velocity.inverseVerticalComponent();
		}

		if (hasCollisionWithPedal) {
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

	moveAround() {
		this.left += this.velocity.x;
		this.bottom += this.velocity.y;
	}
}
