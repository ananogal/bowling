describe('if it is a Strike', function() {
		var frame, myFrame;

		beforeEach(function() {
			frame = new Frame();
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