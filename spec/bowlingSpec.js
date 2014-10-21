describe('Bowling can count and sum the scores of 1 player', function(){
	
	beforeEach(function() {
		bowling = new Bowling();
	});

	addANewFrameToBowling = function(){
		frame = new Frame();
		frame.roll(new Roll(1)).roll(new Roll(1));
		bowling.addFrame(frame);
	};

	it('should be able to have frames', function(){
		expect(bowling.frames).toBeDefined();
	});

	it('should be able to add a frame', function(){
		addANewFrameToBowling();
		expect(bowling.frames.length).toEqual(1);
	});

	it('should be able to count the score of a frame', function(){
		addANewFrameToBowling();
		expect(bowling.calculateScore()).toEqual(2);
	});

	it('should be able to calculate the score of 2 frames', function(){
		addANewFrameToBowling();
		addANewFrameToBowling();
		expect(bowling.calculateScore()).toEqual(4);
	});
});