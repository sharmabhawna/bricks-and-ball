class Game {
	constructor(wall, pedal, ball) {
		this.wall = wall;
		this.pedal = pedal;
		this.ball = ball;
	}

	bouncePedal() {
		let wallLeftBorder = 0;
		let wallRightBorder = this.wall.width - this.pedal.width;

		if (this.pedal.left <= wallLeftBorder) {
			this.pedal.left = wallLeftBorder;
		}

		if (this.pedal.left >= wallRightBorder) {
			this.pedal.left = wallRightBorder;
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
