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
	if (this.secondRoll !== undefined) 
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

FrameRules.prototype.isStrike = function() {
	return this.frame.firstRoll.pins == 10
};

FrameRules.prototype.isFirstRoll = function() {
	return this.frame.firstRoll === undefined
};

FrameRules.prototype.isSpare = function(){
	return this.frame.firstRoll.pins != 10 && this.frame.score === 10;
};

/********************************************/
/*****************STRIKE*********************/
/********************************************/

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

/********************************************/
/*****************SPARE*********************/
/********************************************/

function Spare(frame){
	this.type = 'Spare';
	this.frame = frame;
};




