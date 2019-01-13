describe("Pedal", function() {
	let pedal = new Pedal(150, 20, 10, 10, 10);
	describe(".moveLeft", function() {
		it("should decrement pedal's left position by 10", function() {
			pedal.moveLeft();
			chai.assert.equal(0, pedal.left);
		});
	});

	describe(".moveRight", function() {
		it("should increment pedal's left position by 10", function() {
			pedal.moveRight();
			chai.assert.equal(10, pedal.left);
		});
	});
});
