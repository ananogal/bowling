
function Strike(frame) {
	this.frame = frame;
	this.nextFrame = undefined;
};

Strike.prototype.score = function() {
		return this.frame.firstRoll.pins + this.calculateBonus();
};

Strike.prototype.calculateBonus = function() {
	if(this.canCalculateBonus())
	{
		if (this.nextFrame instanceof Strike)
		{
			if(this.nextFrame.canCalculateBonus())
				return this.nextFrame.pinsKnockDown() + this.nextFrame.calculateBonus();
		}
		return this.nextFrame.pinsKnockDown();
	}
	
	return 0;
};

Strike.prototype.canCalculateBonus = function(){
	return this.nextFrame !== undefined;
};

Strike.prototype.pinsKnockDown = function(){
	return this.frame.firstRoll.pins;
};