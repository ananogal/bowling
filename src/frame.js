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

FrameRules.prototype.isStrike = function() {
	return this.frame.firstRoll.pins == 10
};

FrameRules.prototype.isFirstRoll = function() {
	return this.frame.firstRoll === undefined
};

function Strike(frame) {
	this.frame = frame;
};

Strike.prototype.score = function() {
  return this.frame.firstRoll.pins;
};



