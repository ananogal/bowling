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
		var myFrame = frame.roll(new Roll(8));
		expect(myFrame.firstRoll.pins).toEqual(8);
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
		myFrame = frame.roll(new Roll(10));
		expect(myFrame.pinsKnockDown()).toEqual(10);
	});

	it("if the first roll is a 10 we have a strike", function() {
		myFrame = frame.roll(new Roll(10));
		expect(myFrame instanceof Strike).toBe(true);
	});

	it('if the sum of both rolls is 10 we have a Spare', function() {
		myFrame = frame.roll(new Roll(5)).roll(new Roll(5));
		expect(myFrame instanceof Spare).toBe(true);
	});

});