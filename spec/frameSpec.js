describe('A Roll', function(){
	it("has number of pins", function() {
		roll = new Roll(2);
		expect(roll.pins).toEqual(2);
	});
});

describe("In a Frame", function() {
	var frame;

	beforeEach(function() {
		frame = new Frame();
	});

	it("we can roll for the first time", function() {
		expect(frame.roll(new Roll(8)).firstRoll.pins).toEqual(8);
	});

	it("we can roll a second time", function() {
		myFrame = frame.roll(new Roll(1)).roll(new Roll(8));
		expect(myFrame.secondRoll.pins).toEqual(8);
	});

	it("we can only roll a second time if we rolled the first time", function() {
		expect(frame.roll(new Roll(8)).firstRoll.pins).toEqual(8);
	});

	it("has a score based on the two rolls", function() {
		myFrame = frame.roll(new Roll(1)).roll(new Roll(3));
		expect(myFrame.score()).toEqual(4);
	});

	it("if the first roll is a 10 we don't need a second one for the score", function() {
		expect(frame.roll(new Roll(10)).score()).toEqual(10);
	});

	it("if the first roll is a 10 we have a strike", function() {
		myFrame = frame.roll(new Roll(10));
		expect(myFrame instanceof Strike).toBe(true);
	});

	describe('if it is a Strike', function() {
		var myFrame;

		beforeEach(function() {
			myFrame = frame.roll(new Roll(10));
		});

		it('it knows if it can calculate its bonus', function(){
			nextFrame = new Frame();
			nextFrame.roll(new Roll(1)).roll(new Roll(1));
			myFrame.nextFrame = nextFrame; 
			expect(myFrame.canCalculateBonus()).toBe(true);
		});

		it('it knows if it cannot calculate its bonus', function(){
			expect(myFrame.canCalculateBonus()).toBe(false);
		});

		it('should be able to calculate its bonus', function() {
			nextFrame = new Frame();
			nextFrame.roll(new Roll(1)).roll(new Roll(1));
			myFrame.nextFrame = nextFrame;
			expect(myFrame.calculateBonus(nextFrame)).toEqual(2);
		});

		it('should not calculateBonus if it cant', function() {
			expect(myFrame.calculateBonus()).toEqual(0);
		});

		it('should calculate its score', function() {
			nextFrame = new Frame();
			nextFrame.roll(new Roll(1)).roll(new Roll(1));
			myFrame.nextFrame = nextFrame;
			expect(myFrame.score()).toEqual(12);
		});

		it('should get the a score of 30 if it makes 3 strikes in a row', function () {
			secondFrame = new Frame();
			secondFrame = secondFrame.roll(new Roll(10));
			myFrame.nextFrame = secondFrame;

			thirdFrame = new Frame();	
			thirdFrame = thirdFrame.roll(new Roll(10));
			secondFrame.nextFrame = thirdFrame;

			expect(myFrame.score()).toEqual(30);

		});

	});

	it('if the sum of both rolls is 10 we have a Spare', function() {
		myFrame = frame.roll(new Roll(5)).roll(new Roll(5));
		expect(myFrame.score()).toEqual(10);
	});

});