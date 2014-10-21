describe('A Roll', function(){
	it("has number of pins", function() {
		roll = new Roll(2);
		expect(roll.pins).toEqual(2);
	});
});

describe("In a Frame", function() {
	var frame;

	beforeEach(function() {
		frame = new Frame;
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

		it('it knows if it can calculate its bonus', function(){
			myFrame = frame.roll(new Roll(10));
			nextFrame = new Frame();
			nextFrame.roll(new Roll(1)).roll(new Roll(1));
			myFrame.nextFrame = nextFrame; 
			expect(myFrame.canCalculateBonus()).toBe(true);
		});

		it('it knows if it cannot calculate its bonus', function(){
			myFrame = frame.roll(new Roll(10));
			expect(myFrame.canCalculateBonus()).toBe(false);
		});

		it('should be able to calculate its bonus', function() {
			myFrame = frame.roll(new Roll(10));
			nextFrame = new Frame();
			nextFrame.roll(new Roll(1)).roll(new Roll(1));
			myFrame.nextFrame = nextFrame;
			expect(myFrame.calculateBonus(nextFrame)).toEqual(2);
		});

		it('should not calculateBonus if it cant', function() {
			myFrame = frame.roll(new Roll(10));
			expect(myFrame.calculateBonus()).toEqual(undefined);
		});
	});
});