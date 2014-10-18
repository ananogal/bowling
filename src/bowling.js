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
		if(this.roleScore[currentRole] === 10)
			this.score += this.roleScore[currentRole + 1] + this.roleScore[currentRole +2];
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