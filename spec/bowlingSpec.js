describe('Bowling can count and sum the scores of 1 player', function(){
	
	beforeEach(function(){
		bowling = new Bowling();
	});

	roleManyTimes = function(numberOfTimesToRole, result){
		for(var i = 0; i < numberOfTimesToRole; i++){
			bowling.role(result);
		}	
	};

	it('a player makes a Gutter Game', function(){
		roleManyTimes(20, 0);
		bowling.calculateScore();
		expect(bowling.score).toEqual(0);
	});

	it('adds the score of a role', function(){
		roleManyTimes(20, 0);
		expect(bowling.roleScore.length).toEqual(20);
	});

	it('a player only roles 1', function(){
		roleManyTimes(20, 1);
		bowling.calculateScore();
		expect(bowling.score).toEqual(20);
	});

	it('a player makes a spare', function(){
		bowling.role(4);
		bowling.role(6);
		bowling.role(3);
		roleManyTimes(17, 0);
		bowling.calculateScore()
		expect(bowling.score).toEqual(16);
	});

	it('a player makes a strike', function(){
		bowling.role(10);
		bowling.role(1);
		bowling.role(1);
		roleManyTimes(17, 0);
		bowling.calculateScore();
		expect(bowling.score).toEqual(14);
	});

	it('a player makes a spare in the last frame', function(){
		roleManyTimes(18, 0);
		bowling.role(5);
		bowling.role(5);
		bowling.role(1);
		bowling.calculateScore();
		expect(bowling.score).toEqual(11);
	});

	it('player makes a strike in the last frame', function() {
		roleManyTimes(18, 0);
		bowling.role(10);
		bowling.role(1);
		bowling.calculateScore();
		expect(bowling.score).toEqual(11);
	});

	it('player makes a Spare in last frame with a Strike for bonus', function(){
		roleManyTimes(18, 0);
		bowling.role(5);
		bowling.role(5);
		bowling.role(10);
		bowling.calculateScore();
		expect(bowling.score).toEqual(20);
	});

	it('player makes a strike in last frame with a strike for bonus', function() {
		roleManyTimes(18, 0);
		bowling.role(10);
		bowling.role(10);
		bowling.role(10);
		bowling.calculateScore();
		expect(bowling.score).toEqual(30);
	});
});