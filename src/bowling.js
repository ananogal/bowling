function Bowling(){
	this.frames = [];
	this.score = 0;
	this.framesPerGame = 10;
};

Bowling.prototype.addFrame = function(frame) {
		this.frames.push(frame);
};

Bowling.prototype.calculateScore = function() {
	max = this.frames.length > this.framesPerGame ? this.framesPerGame : this.frames.length
	for(var frameIndex = 0; frameIndex < max; frameIndex++){
		var frame = this.frames[frameIndex];
		this.score += frame.score();
	}
	return this.score;
};

