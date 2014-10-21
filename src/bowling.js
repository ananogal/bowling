function Bowling(){
	this.score = 0;
	this.rollScore = [];
	this.totalFramesRolls = 20;
	this.lastFrame = 18;
};

Bowling.prototype.roll = function(pins) {
	this.rollScore.push(pins);
	
	var lastPositionOnRollScore = this.rollScore.length - 1;
	if(this._isStrike(lastPositionOnRollScore) && this._isNotLastFrame(lastPositionOnRollScore))
		this.rollScore.push(0);
};

Bowling.prototype.calculateScore = function() {
	for(var currentRoll = 0; currentRoll < this.rollScore.length; currentRoll++){
		this.score += this.rollScore[currentRoll];
		if(this._applyStrikeBonus(currentRoll))
			break;
		if(this._applySpareBonus(currentRoll))
			break;
	}
};

Bowling.prototype._isSpare = function(currentRoll) {
	return (( currentRoll + 1 ) % 2 === 0 ) && (this.rollScore[currentRoll] + this.rollScore[currentRoll-1] === 10)
};

Bowling.prototype._applySpareBonus = function(currentRoll) {
	if(this._isSpare(currentRoll))
		 this.score += this.rollScore[currentRoll+1];
	if(this._isSpare(currentRoll) && this._isLastFrame(currentRoll))
		return true;
	return false;
};

Bowling.prototype._isStrike = function(currentRoll) {
	return	this.rollScore[currentRoll] === 10;
};

Bowling.prototype._applyStrikeBonus = function(currentRoll) {	
	if(this._isStrike(currentRoll) && this._isNotLastFrame(currentRoll))
		this.score += this.rollScore[currentRoll + 1] + this.rollScore[currentRoll +2];

	if(this._isStrike(currentRoll) && this._isLastFrame(currentRoll))
	{
		this._applyStrikeBonusInLastFrame(currentRoll);
		return true;
	}
	return false;
};

Bowling.prototype._isNotLastFrame = function(currentRoll) {
	return !this._isLastFrame(currentRoll);
};

Bowling.prototype._isLastFrame = function(currentRoll) {
	return currentRoll >= this.lastFrame;
};

Bowling.prototype._applyStrikeBonusInLastFrame = function(currentRoll) {
	this.score += this.rollScore[currentRoll + 1];
	if(this._isStrike(currentRoll + 1))
		this.score +=this.rollScore[currentRoll + 2]; 
};

