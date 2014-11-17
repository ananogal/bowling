describe('Bowling can count and sum the scores of 1 player', function(){
	
	beforeEach(function() {
		bowling = new Bowling();
	});

	addANewFrameToBowling = function(firstRollPins, secondRollPins){
		frame = new Frame();
		frame = frame.roll(new Roll(firstRollPins)).roll(new Roll(secondRollPins));
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

	it('should have score = 0 for a gunter game', function() {
		for (var i = 0; i < 10; i++) {
		   addANewFrameToBowling(0, 0);
		}
		expect(bowling.calculateScore()).toEqual(0);
	});

	it('should have score = 300 for a Perfect game', function(){
		createTenStrikes();
		addNextFrameIfIsStrikeOrSpare();
		expect(bowling.calculateScore()).toEqual(300);
	});

	createTenStrikes = function(){
		for (var i = 0; i < 12; i++) {
		  frame = new Frame();
			myFrame = frame.roll(new Roll(10));
			bowling.addFrame(myFrame);
		}
	};

	addNextFrameIfIsStrikeOrSpare = function(){
		for(var i = bowling.frames.length-2; i > -1; i--){
			frame = bowling.frames[i];
			frame.nextFrame = bowling.frames[i + 1];
		}
	};

});