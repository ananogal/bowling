describe('Bowling can count and sum the scores of 1 player', function(){
	
	beforeEach(function(){
		bowling = new Bowling();
	});

	rollManyTimes = function(numberOfTimesToRoll, result){
		for(var i = 0; i < numberOfTimesToRoll; i++){
			bowling.roll(result);
		}	
	};

	it('a player makes a Gutter Game', function(){
		rollManyTimes(20, 0);
		bowling.calculateScore();
		expect(bowling.score).toEqual(0);
	});

	it('adds the score of a roll', function(){
		rollManyTimes(20, 0);
		expect(bowling.rollScore.length).toEqual(20);
	});

	it('a player only rolls 1', function(){
		rollManyTimes(20, 1);
		bowling.calculateScore();
		expect(bowling.score).toEqual(20);
	});

	it('a player makes a spare', function(){
		bowling.roll(4);
		bowling.roll(6);
		bowling.roll(3);
		rollManyTimes(17, 0);
		bowling.calculateScore()
		expect(bowling.score).toEqual(16);
	});

	it('a player makes a strike', function(){
		bowling.roll(10);
		bowling.roll(1);
		bowling.roll(1);
		rollManyTimes(16, 0);
		bowling.calculateScore();
		expect(bowling.score).toEqual(14);
	});

	it('a player makes a spare in the last frame', function(){
		rollManyTimes(18, 0);
		bowling.roll(5);
		bowling.roll(5);
		bowling.roll(1);
		bowling.calculateScore();
		expect(bowling.score).toEqual(11);
	});

	it('player makes a strike in the last frame', function() {
		rollManyTimes(18, 0);
		bowling.roll(10);
		bowling.roll(1);
		bowling.calculateScore();
		expect(bowling.score).toEqual(11);
	});

	it('player makes a Spare in last frame with a Strike for bonus', function(){
		rollManyTimes(18, 0);
		bowling.roll(5);
		bowling.roll(5);
		bowling.roll(10);
		bowling.calculateScore();
		expect(bowling.score).toEqual(20);
	});

	it('player makes a strike in last frame with a strike for bonus', function() {
		rollManyTimes(18, 0);
		bowling.roll(10);
		bowling.roll(10);
		bowling.roll(10);
		bowling.calculateScore();
		expect(bowling.score).toEqual(30);
	});

	it('player makes a strike in the 5th frame', function(){
		rollManyTimes(8, 0);
		bowling.roll(10);
		bowling.roll(1);
		bowling.roll(1);
		rollManyTimes(8, 0);
		bowling.calculateScore();
		expect(bowling.score).toEqual(14);
	});

	it('player makes the perfect game', function(){
		rollManyTimes(12, 10);
		bowling.calculateScore();
		expect(bowling.score).toEqual(300);
	});

	it('can sum a players score in the middle of the game', function(){
		bowling.roll(5);
		bowling.roll(5);
		bowling.roll(4);
		bowling.calculateScore();

		expect(bowling.score).toEqual(18);
	});
});