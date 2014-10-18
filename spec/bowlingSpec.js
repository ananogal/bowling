describe('Bowling can count and sum the scores of 1 player', function(){
	
	beforeEach(function(){
		bowling = new Bowling();
	});

	roleWithResult = function(result){
		for(var i = 0; i < 20; i++)
		{
			bowling.role(result);
		}	
	};

	it('a player makes a Gutter Game', function(){
		roleWithResult(0);
		expect(bowling.score).toEqual(0);
	});

	it('a player only roles 1', function(){
		roleWithResult(1);
		expect(bowling.score).toEqual(20);
	});


});