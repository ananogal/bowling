function Spare(frame){
	this.type = 'Spare';
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