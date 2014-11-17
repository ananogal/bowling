
function Strike(frame) {
	this.frame = frame;
	this.nextFrame = undefined;
};

Strike.prototype.score = function() {
		return this.frame.firstRoll.pins + this.calculateBonus();
};

Strike.prototype.calculateBonus = function() {
	var bonus = 0;
	if(this.canCalculateBonus())
	{
		nextFrame = this.nextFrame;
		if (nextFrame instanceof Strike)
		{
			if(nextFrame.canCalculateBonus()){
				secondNextFrame = nextFrame.nextFrame;
				bonus = secondNextFrame.pinsKnockDown() + nextFrame.pinsKnockDown()
			}
		}
		else
			bonus = this.nextFrame.pinsKnockDown();
	}
	
	return bonus;
};

Strike.prototype.canCalculateBonus = function(){
	return this.nextFrame !== undefined;
};

Strike.prototype.pinsKnockDown = function(){
	return this.frame.firstRoll.pins;
};

Strike.prototype.firstRoll = function(){
	return this.frame.firstRoll;
}

Strike.prototype.secondRoll = function(){
	return this.frame.secondRoll;
}
