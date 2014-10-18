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


});