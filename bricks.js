class Paddle {
	constructor(width, height, bottom, left, bound) {
		this.width = width;
		this.height = height;
		this.bottom = bottom;
		this.left = left;
		this.bound = bound;
	}

	moveLeft() {
		console.log("left");
		this.left = this.left - 50;
		if (this.left < 0) {
			this.left = 0;
		}
	}

	moveRight() {
		console.log("right");
		this.left = this.left + 50;
		if (this.left > 900) {
			this.left = 900;
		}
	}
}
