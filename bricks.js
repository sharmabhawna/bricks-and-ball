class Paddle {
	constructor(width, height, bottom, left, bound) {
		this.width = width;
		this.height = height;
		this.bottom = bottom;
		this.left = left;
		this.bound = bound;
	}

	moveLeft() {
		this.left = this.left - 50;
		if (this.left < 0) {
			this.left = 0;
		}
	}

	moveRight() {
		this.left = this.left + 50;
		if (this.left > 900) {
			this.left = 900;
		}
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
