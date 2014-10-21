function Roll(pins) {
	this.pins = pins;
}

function Frame(){
	this.rules = new FrameRules(this);
};

Frame.prototype.roll = function(roll) {
	this._recordRoll(roll);
	if(this.rules.isStrike())
		return new Strike(this);
	return this;
};

Frame.prototype._recordRoll = function(roll) {
	if(this.rules.isFirstRoll())
		this.firstRoll = roll;
	else
		this.secondRoll = roll;
};

Frame.prototype.score = function() {
	return this.firstRoll.pins + this.secondRoll.pins;
};

function FrameRules(frame){
	this.frame = frame;
};

/********************************************/
/****************FRAMERULES******************/
/********************************************/

FrameRules.prototype.isStrike = function() {
	return this.frame.firstRoll.pins == 10
};

FrameRules.prototype.isFirstRoll = function() {
	return this.frame.firstRoll === undefined
};

/********************************************/
/*****************STRIKE*********************/
/********************************************/

function Strike(frame) {
	this.frame = frame;
	this.nextFrame = undefined;
};

Strike.prototype.score = function() {
  return this.frame.firstRoll.pins;
};

Strike.prototype.calculateBonus = function() {
	if(this.canCalculateBonus())
		return this.nextFrame.score();
};

Strike.prototype.canCalculateBonus = function(){
	return this.nextFrame !== undefined;
};





