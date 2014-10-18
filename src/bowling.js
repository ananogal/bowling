function Bowling(){
	this.score = 0;
	this.roleScore = [];
};

Bowling.prototype.role = function(pins) {
	this.roleScore.push(pins);
};

Bowling.prototype.calculateScore = function() {
	for(var i = 0; i < this.roleScore.length; i++){
		this.score += this.roleScore[i];
	}
};