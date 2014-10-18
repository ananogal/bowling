function Bowling(){
	this.score = 0;
};

Bowling.prototype.role = function(pins) {
	this.score += pins;
};