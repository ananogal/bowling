
function Strike(frame) {
	this.type = 'Strike';
	this.frame = frame;
	this.nextFrame = undefined;
};

Strike.prototype.score = function() {
		return this.frame.firstRoll.pins + this.calculateBonus();
};

Strike.prototype.calculateBonus = function() {
	if(this.canCalculateBonus())
	{
		if (this.nextFrame.type === 'Strike')
			return this.nextFrame.score();

		return this.nextFrame.pinsKnockDown();	
	}
	
	return 0;
};

Strike.prototype.canCalculateBonus = function(){
	return this.nextFrame !== undefined;
};