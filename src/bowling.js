function Bowling(){
	this.score = 0;
	this.roleScore = [];
	this.totalFramesRoles = 20;
	this.lastFrame = 18;
};

Bowling.prototype.role = function(pins) {
	this.roleScore.push(pins);
	
	var lastPositionOnRoleScore = this.roleScore.length - 1;
	if(this._isStrike(lastPositionOnRoleScore) && this._isNotLastFrame(lastPositionOnRoleScore))
		this.roleScore.push(0);
};

Bowling.prototype.calculateScore = function() {
	for(var currentRole = 0; currentRole < this.roleScore.length; currentRole++){
		this.score += this.roleScore[currentRole];
		console.log(this.score);
		if(this._applyStrikeBonus(currentRole))
			break;
		if(this._applySpareBonus(currentRole))
			break;
	}
	console.log("out of for"+ this.score);
};

Bowling.prototype._isSpare = function(currentRole) {
	return (( currentRole + 1 ) % 2 === 0 ) && (this.roleScore[currentRole] + this.roleScore[currentRole-1] === 10)
};

Bowling.prototype._applySpareBonus = function(currentRole) {
	if(this._isSpare(currentRole))
		 this.score += this.roleScore[currentRole+1];
	if(this._isSpare(currentRole) && this._isLastFrame(currentRole))
		return true;
	return false;
};

Bowling.prototype._isStrike = function(currentRole) {
	return	this.roleScore[currentRole] === 10;
};

Bowling.prototype._applyStrikeBonus = function(currentRole) {	
	if(this._isStrike(currentRole) && this._isNotLastFrame(currentRole))
		this.score += this.roleScore[currentRole + 1] + this.roleScore[currentRole +2];

	if(this._isStrike(currentRole) && this._isLastFrame(currentRole))
	{
		this._applyStrikeBonusInLastFrame(currentRole);
		return true;
	}
	return false;
};

Bowling.prototype._isNotLastFrame = function(currentRole) {
	return !this._isLastFrame(currentRole);
};

Bowling.prototype._isLastFrame = function(currentRole) {
	return currentRole >= this.lastFrame;
};

Bowling.prototype._applyStrikeBonusInLastFrame = function(currentRole) {
	this.score += this.roleScore[currentRole + 1];
	if(this._isStrike(currentRole + 1))
		this.score +=this.roleScore[currentRole + 2]; 
};

