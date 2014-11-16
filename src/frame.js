function Roll(pins) {
	this.pins = pins;
}

function Frame(){
	this.type = 'Frame';
	this.rules = new FrameRules(this);
};

Frame.prototype.roll = function(roll) {
	this._recordRoll(roll);
	if(this.rules.isStrike())
		return new Strike(this);
	if(this.rules.isSpare())
		return new Spare(this);
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

Frame.prototype.pinsKnockDown = function() {
	if (this.rules.hasSecondRoll()) 
		return this.firstRoll.pins + this.secondRoll.pins;
	else
		return this.firstRoll.pins;
};

function FrameRules(frame){
	this.frame = frame;
};

/********************************************/
/****************FRAMERULES******************/
/********************************************/

FrameRules.prototype.isFirstRoll = function() {
	return this.frame.firstRoll === undefined
};

FrameRules.prototype.isStrike = function() {
	return this.frame.firstRoll.pins == 10
};

FrameRules.prototype.isSpare = function(){
	if( !this.hasSecondRoll() ) 
		return false;
	return (this.frame.firstRoll.pins != 10) && (this.frame.score() == 10);
};

FrameRules.prototype.hasSecondRoll = function(){
	return this.frame.secondRoll !== undefined
};

/********************************************/
/*****************SPARE*********************/
/********************************************/

function Spare(frame){
	this.type = 'Spare';
	this.frame = frame;
	this.nextFrame = undefined;
};

Spare.prototype.canCalculateBonus = function() {
	return this.nextFrame !== undefined
};	




