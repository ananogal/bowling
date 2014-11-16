describe('if it is a Spare', function() {
		var frame, myFrame;

		beforeEach(function() {
			frame = new Frame();
			myFrame = frame.roll(new Roll(5)).roll(new Roll(5));
			nextFrame = new Frame();
			nextFrame.roll(new Roll(1)).roll(new Roll(1));
			myFrame.nextFrame = nextFrame;
		});

		it('it knows if it can calculate its bonus', function() {
			expect(myFrame.canCalculateBonus()).toBe(true);
		});

		it('it knows if cant calculate its bonus', function() {
			myFrame.nextFrame = undefined;
			expect(myFrame.canCalculateBonus()).toBe(false);
		});

		it('it calculates its bonus', function() {
			expect(myFrame.calculateBonus()).toEqual(1);
		});

		it('it can calculate its score', function() {
			expect(myFrame.score()).toEqual(11);
		});

	});