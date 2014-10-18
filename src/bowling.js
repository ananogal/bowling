function Bowling(){
	this.score = 0;
	this.roleScore = [];
	this.totalFramesRoles = 20;
	this.lastFrame = 18;
};

Bowling.prototype.role = function(pins) {
	this.roleScore.push(pins);
};

Bowling.prototype.calculateScore = function() {
	for(var currentRole = 0; currentRole < this.totalFramesRoles; currentRole++){
		this.score += this.roleScore[currentRole];
		if(this._applyStrikeBonus(currentRole))
			break;
		this._applySpareBonus(currentRole);
	}
};

Bowling.prototype._isSpare = function(currentRole) {
	return (( currentRole + 1 ) % 2 === 0 ) && (this.roleScore[currentRole] + this.roleScore[currentRole-1] === 10)
};

Bowling.prototype._applySpareBonus = function(currentRole) {
	if(this._isSpare(currentRole))
		 this.score += this.roleScore[currentRole+1];
};

Bowling.prototype._isStrike = function(currentRole) {
	return	this.roleScore[currentRole] === 10;
};

Bowling.prototype._applyStrikeBonus = function(currentRole) {
	returnValue = false;
	if(this._isStrike(currentRole))
	{
		if(this._isNotLastFrame(currentRole))
			this.score += this.roleScore[currentRole + 1] + this.roleScore[currentRole +2];
		else { //last frame
			this._applyStrikeBonusInLastFrame(currentRole);
			returnValue = true;
		}
	}	
	return returnValue;
};

Bowling.prototype._isNotLastFrame = function(currentRole) {
	return !(currentRole === this.lastFrame);
};

Bowling.prototype._applyStrikeBonusInLastFrame = function(currentRole) {
	this.score += this.roleScore[currentRole + 1];
	if(this._isStrike(currentRole + 1))
		this.score +=this.roleScore[currentRole + 2]; 
};

