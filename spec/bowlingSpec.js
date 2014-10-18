describe('Bowling can count and sum the scores of 1 player', function(){
	it('a player makes a Gutter Game', function(){
		bowling = new Bowling();
		for(var i = 0; i < 20; i++)
		{
			bowling.role(0);
		}
		expect(bowling.score).toEqual(0);
	});

	it('a player only roles 1', function(){
		bowling = new Bowling();
		for(var i = 0; i < 20; i++)
		{
			bowling.role(1);
		}
		expect(bowling.score).toEqual(20);
	});
});