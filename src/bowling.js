function Bowling(){
	this.score = 0;
	this.roleScore = [];
};

Bowling.prototype.role = function(pins) {
	this.roleScore.push(pins);
};

Bowling.prototype.calculateScore = function() {
	for(var currentRole = 0; currentRole < this.roleScore.length; currentRole++){
		this.score += this.roleScore[currentRole];
		this._applyStrikeBonus(currentRole);
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
	if(this._isStrike(currentRole))
		this.score += this.roleScore[currentRole + 1] + this.roleScore[currentRole +2];
};