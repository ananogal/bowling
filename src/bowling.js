function Bowling(){
	this.frames = [];
	this.score = 0;
};

Bowling.prototype.addFrame = function(frame) {
	this.frames.push(frame);
};

Bowling.prototype.calculateScore = function() {
	for(var frameIndex = 0; frameIndex < this.frames.length; frameIndex++){
		frame = this.frames[frameIndex];
		this.score += frame.score();
	}
	return this.score;
};

