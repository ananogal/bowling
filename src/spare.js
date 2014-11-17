function Spare(frame){
	this.frame = frame;
	this.nextFrame = undefined;
};

Spare.prototype.canCalculateBonus = function() {
	return this.nextFrame !== undefined
};	

Spare.prototype.calculateBonus = function() {
	if(this.canCalculateBonus())
		return this.nextFrame.firstRoll.pins; 
};

Spare.prototype.score = function(){
	return this.frame.score() + this.calculateBonus();
};

Spare.prototype.pinsKnockDown = function() {
	return this.frame.pinsKnockDown();
};

Spare.prototype.firstRoll = function(){
	return this.frame.firstRoll;
};

Spare.prototype.secondRoll = function(){
	return this.frame.secondRoll;
};