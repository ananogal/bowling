describe('Bowling can count and sum the scores of 1 player', function(){
	
	beforeEach(function() {
		bowling = new Bowling();
	});

	addANewFrameToBowling = function(firstRollPins, secondRollPins){
		frame = new Frame();
		frame.roll(new Roll(firstRollPins)).roll(new Roll(secondRollPins));
		bowling.addFrame(frame);
	};

	it('should be able to have frames', function(){
		expect(bowling.frames).toBeDefined();
	});

	it('should be able to add a frame', function(){
		addANewFrameToBowling(1, 1);
		expect(bowling.frames.length).toEqual(1);
	});

	it('should be able to count the score of a frame', function(){
		addANewFrameToBowling(1, 1);
		expect(bowling.calculateScore()).toEqual(2);
	});

	it('should be able to calculate the score of 2 frames', function(){
		addANewFrameToBowling(1, 1);
		addANewFrameToBowling(1, 1);
		expect(bowling.calculateScore()).toEqual(4);
	});

	it('should create a 10th frame', function() {
		for (var i = 0; i < 10; i++) {
		   addANewFrameToBowling(1, 1);
		}
		tenthFrame = bowling.frames[9];
		expect(tenthFrame instanceof TenthFrame).toBe(true);
	});
});